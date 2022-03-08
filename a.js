const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


ctx.beginPath(); // voglio una fare una serie di linee.

// const numCol = 20;
// const lenColonne = canvas.width / 10;
/*
for(let col=0; col < 10; col++ ){
  ctx.moveTo(col * 20, 0); // linea 2
  ctx.lineTo(col * 20, 400);
}
*/

const lenCol = 40; // distanza tra colonne
const numCol =  canvas.width / lenCol;
for(let col=0; col < numCol; col++ ){
  if (col < canvas.width ){
  ctx.moveTo(col * lenCol, 0); // linea 2
  ctx.lineTo(col * lenCol, 400);
}
}

// sposta il cursore del path nella posizione 40,170



// configurazione del drawing state
  ctx.stroke();
// riempi tutti le aree inscritte dal path corrente usanto la configurazione
// del deawing state
ctx.fill();


// disegnare rettangolo a distanza dal bordo sinistro di 10px, e superiore di 20px, 
// il rettangolo deve essere lungo 40px e alto 80

// funzione filleRect

// permette di disegnare un rettangolo (quandrato quando i lati sono uguali)
// i primi due parametri è la distanza dal asse x, e la distanza dal asse y
// l'origine del canvas è x=0, y=0 è si trova nel angolo superiore a sinistra




