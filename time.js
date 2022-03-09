

const a=new Date();
console.log('a =', a.getTime());

/**
 * differenza tra due date e sua formattazione 
 * @param time1 prende in formato data quindi in millisecondi 
 * @param  time2 come sopra
 *
 * time1 e time2 possono essere inseriti indipendentemente dal ordine
 */

/* 
function(a, b){
  // leggo converto i valori converte()
  // controlla la validità isValid()
  // eseguo il calcolo che mi intessa calcolo()
  // formatto i dati da restituire formatta()
}
*/

const converte = ()=> new Date(time1).getTime();

const isValid = (val)=>{
  return val
};

const differenzaDate = (val)=>{
  return val
};

const timeToGiornoOraSecondo = (val)=>{al
   return val
};

function  printDateDiff(time1, time2){
   const t1 = converte(time1)
   const t2 = converte(time1)
   if( !isValid(t1) || !isValid(t2)) return false;
   const diff = differenzaDate(t1, t2);
   return timeToGiornoOraSecondo(diff);
 
}



function test(time1, time2){
  // coverto nei diversi eventuali formati,e lavoro sul time
    let t1 = new Date(time1).getTime(); // 664464673473
    let t2 = new Date(time2).getTime(); // 323723672722

    // qui controlliamo la validità dei valori

    if (isNaN(t2)) t2= new Date(); //se now = true prende la data attuale su t2
    if( isNaN(t1) || isNaN(t2) ) return ' esco perchè nan'; // check validity
    // da qui in poi posso lavorare solo se esistono t1 e t2

    let timeStr =''; // ritorno questo valore

    // Calcolo DIFFERENZA TRA DATE
    let date_diff_ms = t1 < t2 ?  (t2 - t1) : (t1 - t2); // differenza tra il più grande e piccolo

    // FORMATAZIONE VALORI 
    // milliseconds popolato ho calcolato la differenza delle date
    // da qui la renderizza STAMPA I VALORI IN MODO UMANO POTREI DIVIDERE LA FUNZIONE IN 2

    // math.floor arrotando per difetto
    var days = Math.floor(date_diff_ms / 1000 / 60 / (60 * 24)); // converto ms in giorni

    // ATTENZIONE milliseconds è un numero e quindi non ha i metodi getHours , getMinutes ecc 
    // quindi lo metto dentro a un oggetto Date
    const date_diff = new Date( date_diff_ms ); // riporto i millesendi che è un numero in una data

    // le if da qui in poi popolano se hanno valori popolano la stringa finale
    if (days > 0) timeStr += days + 'd '; // Evita di scrivere 0 secondi // se i gironi sono positivi prepara la striga finale

  // una volta che i millisecondi "stanno dentro" una data, posso chiamare i metodi della data 

    if (date_diff.getHours() > 0) timeStr += date_diff.getHours() + 'h ';
    if (date_diff.getMinutes() > 0) timeStr += date_diff.getMinutes() + 'm ';
    if (date_diff.getSeconds() > 0) timeStr += date_diff.getSeconds() + 's ';

    console.log('date diff', timeStr);
    return timeStr;

}



const diff = test(1646755753371); // 1646755753371
const diff1 = test(new Date('2022-03-05')); // 1646755753371
const diff2 = test('2022-03-05'); // 1646755753371



const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
	//ES6 interpolated literals/template literals 
  	//If seconds is less than 10 put a zero in front.
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

var timer = function(name) {
    var start = new Date();
    return {
        stop: function() {
            var end  = new Date();
            var time = end.getTime() - start.getTime();
            console.log('Timer:', name, 'finished in', time, 'ms');
        }
    }
};

var t = timer('Some label');
// code to benchmark
t.stop(); // prints the time elapsed to the js console


const startTime = new Date().getTime() + 3000;
let currentTime = new Date().getTime();

function customTimeout() {
  while (startTime > currentTime) {
    currentTime = new Date().getTime();
  }
  
  return console.log('3 Seconds')
};

customTimeout();