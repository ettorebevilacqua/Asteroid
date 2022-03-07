const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// guida https://www.html.it/pag/19303/canvas1/

var immagine = new Image();
immagine.src = "https://www.rotomail.it/wp-content/uploads/revslider/slidero-ok2/SFONDO-VIDEO.jpg";
// ctx.drawImage(immagine,0,0);

ctx.beginPath(); // voglio una fare una serie di linee.
// sposta il cursore del path nella posizione 40,170
ctx.moveTo(0,0);
// crea un subpath linea fino alla posizione 260,170
  ctx.lineTo(100,0);
  ctx.lineTo(200,90);
  ctx.lineTo(100,90);
  // ctx.closePath();
 //ctx.lineTo(0,50);
// crea un subpath arco che sia tangente alle due linee (260,170 - 150,250)
// (150,250 - 40,170) con diametro 150
//ctx.lineTo(40,170);
//ctx.moveTo(150,170);
//ctx.lineTo(150,40);
//ctx.rect(150,40,60,30);
// disegna tutti i subpath del path corrente sul canvas usando la
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


