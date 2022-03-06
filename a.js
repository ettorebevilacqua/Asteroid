alert('ss');
const canvas = document.getElementById('tutorial');
const ctx = canvas.getContext('2d');

const SHIP_SIZE = 9;

const ship ={
    x: canvas.width /2,
    y: canvas.heigth / 2,
    a: 90 / 180 * Math.PI,
    r: SHIP_SIZE,
}

function test(){
    console.log('dd');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
}

function draw() {
    alert('sss');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.heigth);
}
alert('ss');
draw();