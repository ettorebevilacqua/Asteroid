const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const xlen=canvas.width;
const ylen=canvas.height;

console.log('canvas size', canvas.width, canvas.height);

function sfondo(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, xlen, ylen);
}

function cubo(x, y){
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 40, 40);
}

function draw(){
    sfondo();
    cubo(20, 10);
}

draw();