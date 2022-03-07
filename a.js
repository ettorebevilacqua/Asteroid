const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const FPS = 30;
const SHIP_SIZE = 9;
const SHIP_TRUST = 5; // acceleration of ship in pixel per second
const TURN_SPEED = 360; // turn speed in degree per second
const FRICTION = 0.7;

const ship = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    a: (90 / 180) * Math.PI, // anglee
    r: SHIP_SIZE,
    rot: 0,
    thrusting: false,
    thrust: { x: 0, y: 0 }
};

function drawBoard2(p){
    const bh=canvas.height;
    const bw=canvas.width;
    ctx.moveTo(0, 0);
    ctx.beginPath();
    for (var x = 0; x <= bw; x += 40) {
        ctx.moveTo(0.5 + x + p, p);
        ctx.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 40) {
        ctx.moveTo(p, 0.5 + x + p);
        ctx.lineTo(bw + p, 0.5 + x + p);
    }
    ctx.strokeStyle = "white";
    ctx.stroke();
}

function drawBoard(box, colLen=20, col=10){
    const bh= box.y;
    const bw=box.x;
    const step=bh.x/10;

    ctx.moveTo(0, 0);
    ctx.beginPath();
    for (var x = 0; x <= bw; x += 40) {
        ctx.moveTo(0.5 + x + p, p);
        ctx.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 40) {
        ctx.moveTo(p, 0.5 + x + p);
        ctx.lineTo(bw + p, 0.5 + x + p);
    }
    ctx.strokeStyle = "white";
    ctx.stroke();
}

/* omino che si muove
       xxxPx
       xxxxx
       xxOxx
       xxxxx
       xxxxx

    al centro ho O , per dirgli di andare a P devo dire:
     muoviti a dx di 1, e su di 2
     ma anche : muoviti xPosizione +1, yPosizione -2
     troveremo qualcosa come :
     O.x = O.x + 1;
     O.y = O.y - 2;

     ma se volessi dirgli :
     muoviti in tutti i punti a di 2 di distanza
     che significa ?? muoversi entro un cerchio,
       xxxx xxxx
       xxx x xxx
       xx xxx xx
       x xxOxx x
       xx xxx xx
       xxx x xxx
       xxxx xxxx

     quindi provo a scrivere in questo modo 
     più ristretto le varie poaizioni a 2 di distanza
     partendo dalla prima riga
     ( 0, -3)
     (-1, -2) ( 1, -2)
     (-2, -1) ( 2, -1)
     (-3,  0) (-3,  0)  RIGA CENTRALE
     (-2,  1) (-2,  1)
     (-1,  2) (-2,  2)
     ( 0, -3)

     Questo l'ho ricavato a mano e visivamente, ma posso notare un andamento
     i valori assoluti sommati fanno sempre 3, quindi sempre 3 passi
     se leggo per colonne, 
     x si muove da 0 a -3, e poi -2, -1 e 0 di nuovo
     y si muove da -3 a 0, e da 0 a -3, e poi -2, -1 
     
     sulla parte a sinistra , sulla destra (movimento verso destra) 
    i valori sono uguali ma inverti.

    Fatta questa tabella, potrei memorizzarla, e poter calcolare le posizioni
    quando devo spostare nelle 4 direzioni, qualcosa,
    potrei generare una tabella del genere con diversi for 
    Con questa logica :





*/

function renderShip() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(ship.x, ship.y, 4, 4);

    ctx.strokeStyle = "white";
    ctx.lineWidth = SHIP_SIZE / 20;

    ctx.beginPath();
    const cosPosX = Math.cos(ship.a);
    const sinPosY = Math.sin(ship.a);

    ctx.moveTo(ship.x, ship.y);
    ctx.lineTo(
        ship.x - ship.r * 4 * 0.8,
        ship.y + ship.r * 4 * 0.8
    );
/*
ctx.moveTo(ship.x + ship.r * cosPosX, ship.y - ship.r * sinPosY);

console.log('move x, y', ship.x + ship.r * cosPosX, ship.y - ship.r * sinPosY);

    ctx.lineTo(
        ship.x - ship.r * (cosPosX + sinPosY),
        ship.y + ship.r * (sinPosY - cosPosX)
    );
    console.log('x, y', ship.x - ship.r * (cosPosX + sinPosY), ship.y + ship.r * (sinPosY - cosPosX));
*/
   /* ctx.lineTo( 
        ship.x - ship.r * (cosPosX - sinPosY),
        ship.y + ship.r * (sinPosY + cosPosX)
    ); */
    ctx.closePath();
    ctx.stroke();

    drawBoard({x: canvas.width, y: canvas.height});
}

function renderShip2() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "white";
    ctx.lineWidth = SHIP_SIZE / 20;
    ctx.beginPath();
    const cosPosX = Math.cos(ship.a);
    const sinPosY = Math.sin(ship.a);

    console.log('move x, y', ship.x + ship.r * cosPosX, ship.y - ship.r * sinPosY);
    const xd = 10; // (ship.r * 7);
    const yd = 10; // (ship.r * 7);
    ctx.moveTo(
        ship.x +  (5 / 3) * ship.r * Math.cos(ship.a),
        ship.y -  (5 / 3) * ship.r * Math.sin(ship.a)
    );

    const rap= 2;

    ctx.lineTo(
        ship.x - ship.r * (rap * Math.cos(ship.a) + Math.sin(ship.a)),
        ship.y + ship.r * (rap * Math.sin(ship.a) - Math.cos(ship.a))
    );
    ctx.lineTo(
        ship.x - ship.r * (rap * Math.cos(ship.a) - Math.sin(ship.a)),
        ship.y + ship.r * (rap * Math.sin(ship.a) + Math.cos(ship.a))
    );
    console.log('x, y', ship.x - ship.r * (cosPosX + sinPosY), ship.y + ship.r * (sinPosY - cosPosX));

    /* ctx.lineTo(
        ship.x - (ship.r * 7),
        ship.y + (ship.r * 1)
      );
  */
    ctx.closePath();
    ctx.stroke();
}

function draw() {
    return false;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (ship.thrusting) {
        ship.thrust.x += (SHIP_TRUST * Math.cos(ship.a)) / FPS;
        ship.thrust.y -= (SHIP_TRUST * Math.sin(ship.a)) / FPS;
        ship.thrust.x < 1.8 && console.log("ship.thrust.x", ship.thrust.x, ship.a);
    } else {
        ship.thrust.x -= (FRICTION * ship.thrust.x) / FPS;
        ship.thrust.y -= (FRICTION * ship.thrust.y) / FPS;
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
    //console.log("ship.a", ship.a);

    //HANDLE bounds
    if (ship.x < 0 - ship.r) {
        ship.x = canvas.width + ship.r;
    } else if (ship.x > canvas.width + ship.r) {
        ship.x = 0 + ship.r;
    }

    if (ship.y < 0 - ship.r) {
        ship.y = canvas.height + ship.r;
    } else if (ship.y > canvas.height + ship.r) {
        ship.y = 0 + ship.r;
    }
    // move ship
    ship.x += ship.thrust.x;
    ship.y += ship.thrust.y;

    report.innerHTML = `a=${ship.a}<br>rot=${ship.rot}<br>thrust ${ship.thrust.x}`;
}

renderShip();
// function ship() {}

// draw();
