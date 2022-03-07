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
    //cubo(20, 20);
}

draw();


ctx.fillStyle = 'white';
// rettangolo a distanza dal bordo sinistro di 10px, e superiore di 20px, 
// il rettangolo deve essere lungo 40px e alto 80

// funzione filleRect
// permette di disegnare un rettangolo (quandrato quando i lati sono uguali)
// i primni due parametri è la distanza dal asse x, e la distanza dal asse y
// l'origine del canvas è x=0, y=0 è si trova nel angolo superiore a sinistra


ctx.fillRect(10, 40, 40, 40);