/**
 * Snack 1: L’utente inserisce due parole in successione, con due prompt.
 *  Il software stampa la parola più lunga. 
 * Utilizza una funzione per determinare e ritornare la parola più lunga.
 */

 var parola1 = prompt('inserisci parola 1');
 var parola2 = prompt('inserisci parola 2');

 console.log(parola1);
 console.log(parola2);

 var risultato = wordlength(parola1, parola2);
 console.log(risultato);
 

//  function Snack 1

function wordlength (word1, word2) {

    if (word1.length > word2.length) {
        return 'la parola 1 è più lunga: ' + word1;

    } else if (word1.length < word2.length) {
        return 'la parola 2 è più lunga: ' + word2;
    } 

    return 'le parole hanno la stessa lunghezza'
}
 
 
