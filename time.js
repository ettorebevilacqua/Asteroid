

const a=new Date();
console.log('a =', a.getTime());

/**
 *
 * @param time1
 * @param  time2
 *
 * time1 e time2 possono essere inseriti indipendentemente dal ordine
 */

function test(time1, time2){
    let t1 = new Date(time1).getTime(); // 664464673473
    let t2 = new Date(time2).getTime(); // 323723672722
debugger
    if (isNaN(t2)) t2= new Date(); //se now = true prende la data attuale su t2
    if( isNaN(t1) || isNaN(t2) ) return ''; // check validity
    // da qui in poi posso lavorare solo se esistono t1 e t2

    let timeStr =''; // ritorno questo valore
    let date_diff_ms = t1 < t2 ?  (t2 - t1) : (t1 - t2); // differenza tra il più grande e piccolo

    // milliseconds popolato ho calcolato la differenza delle date
    // da qui la renderizza STAMPA I VALORI IN MODO UMANO POTREI DIVIDERE LA FUNZIONE IN 2

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

  
    return timeStr;

}


const diff = test(1646755753371);
console.log('date diff', diff);

const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
	//ES6 interpolated literals/template literals 
  	//If seconds is less than 10 put a zero in front.
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}