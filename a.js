const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
const report = document.getElementById("report");

const FPS = 30;
const SHIP_SIZE = 9;
const SHIP_TRUST = 5; // acceleration of ship in pixel per second
const TURN_SPEED = 360; // turn speed in degree per second

const ship = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  a: (90 / 180) * Math.PI, // anglee
  r: SHIP_SIZE,
  rot: 0,
  thrusting: false,
  thrust: { x: 0, y: 0 }
};

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

setInterval(draw, 1000 / FPS);
function onKeyDown(ev) {
  const nav = {
    37: () => {
      ship.rot = ((TURN_SPEED / 180) * Math.PI) / FPS;
    },
    38: () => {
      ship.thrusting = true;
    },
    39: () => {
      ship.rot = ((-TURN_SPEED / 180) * Math.PI) / FPS;
    }
  };
  if (!nav[ev.keyCode]) return;
  nav[ev.keyCode]();
}

function onKeyUp(ev) {
  const nav = {
    37: () => {
      // stop rotate
      ship.rot = 0;
    },
    38: () => {},
    39: () => {
      ship.rot = 0;
    }
  };
  if (!nav[ev.keyCode]) return;
  nav[ev.keyCode]();
}

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (ship.thrusting) {
    ship.thrust.x += (SHIP_TRUST * Math.cos(ship.a)) / FPS;
    ship.thrust.y -= (SHIP_TRUST * Math.sin(ship.a)) / FPS;
  }

  ctx.strokeStyle = "white";
  ctx.lineWidth = SHIP_SIZE / 20;
  ctx.beginPath();
  ctx.moveTo(
    ship.x + ship.r * Math.cos(ship.a),
    ship.y - ship.r * Math.sin(ship.a)
  );

  ctx.lineTo(
    ship.x - ship.r * (Math.cos(ship.a) + Math.sin(ship.a)),
    ship.y + ship.r * (Math.sin(ship.a) - Math.cos(ship.a))
  );
  ctx.lineTo(
    ship.x - ship.r * (Math.cos(ship.a) - Math.sin(ship.a)),
    ship.y + ship.r * (Math.sin(ship.a) + Math.cos(ship.a))
  );
  ctx.closePath();
  ctx.stroke();

  // ship rotate
  ship.a += ship.rot;
  console.log("ship.a", ship.a);

  // move ship
  ship.x += ship.thrust.x;
  ship.y += ship.thrust.y;
  report.innerHTML = "ww";
}

// function ship() {}

draw();
