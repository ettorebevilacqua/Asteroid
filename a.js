const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Create circle
const circle = new Path2D();
circle.arc(100, 75, 30, 0 * Math.PI, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill(circle);

function upDateBall(event) {
  // Check whether point is inside circle
  if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
    ctx.fillStyle = 'green';
  }
  else {
    ctx.fillStyle = 'red';
  }

  // Draw circle
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fill(circle);
}

// Listen for mouse moves
canvas.addEventListener('mousemove', upDateBall);
// scanvas.addEventListener('click', clickCell);


function clickCell(e){
  alert('ss');
}
canvas.addEventListener("mousedown", ()=> alert("Hello World!"));

//
function griglia(numCol){
  ctx.beginPath(); // voglio una fare una serie di linee.
  if (!numCol) return false;

  const lenCol = canvas.width / numCol; // conversione

  // controlla validita
  // visualizzo i dati 
  for(let col=0; col <= numCol; col++ ){
    ctx.moveTo(col * lenCol, 0); // linea 2
    ctx.lineTo(col * lenCol, canvas.height);
  }

  const numRow = 20;
  const lenRow = canvas.height / numRow;

  for(let row=0; row <= numRow; row++ ){
  ctx.moveTo( 0, row * lenRow); // linea 2
  ctx.lineTo(canvas.width, row * lenRow);
  }

  ctx.stroke();
  // riempi tutti le aree inscritte dal path corrente usanto la configurazione
  // del deawing state
  ctx.fill();

}

griglia(10);
/*
const numCol =  canvas.width / lenCol;
for(let col=0; col < numCol; col++ ){
  ctx.moveTo(col * lenCol, 0); // linea 2
  ctx.lineTo(col * lenCol, canvas.height);
}

const numRow =  canvas.height / lenCol;
for(let row=0; row < numRow; row++ ){
  ctx.moveTo( 0, row * lenCol); // linea 2
  ctx.lineTo(canvas.width, row * lenCol);
}
*/
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




