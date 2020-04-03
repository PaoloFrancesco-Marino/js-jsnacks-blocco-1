/**************************************************************************
 * Snack 1: L’utente inserisce due parole in successione, con due prompt.
 *  Il software stampa la parola più lunga. 
 * Utilizza una funzione per determinare e ritornare la parola più lunga.
 **************************************************************************/

//  var parola1 = prompt('inserisci parola 1').trim();
//  var parola2 = prompt('inserisci parola 2').trim();

//  console.log(parola1);
//  console.log(parola2);

//  var risultato = wordlength(parola1, parola2);
//  console.log(risultato);
 

// //  function Snack 1

// function wordlength (word1, word2) {

//     if (word1.length > word2.length) {
//         return 'la parola 1 è più lunga: ' + word1;

//     } else if (word1.length < word2.length) {
//         return 'la parola 2 è più lunga: ' + word2;
//     } 

//     return 'le parole hanno la stessa lunghezza'
// }


/*****************************************************
 * Snack 2: Inserisci un numero, 
 * se è pari stampa il numero, 
 * se è dispari stampa il numero successivo
 *****************************************************/

//  var numUtente = parseInt(prompt('inserisci un numero'));
//  console.log(numUtente);
 

// //  if (numUtente % 2 == 0) {
// //      console.log('numero pari ' + numUtente);
     
// //  } else {
// //      console.log('numero dispari stampo il successivo ' + ++numUtente);
     
// //  }

// //  alternativa con function 

// var risultato = isPari(numUtente);
// console.log(risultato);

// function isPari (numero) {
//     if (numero % 2 == 0) {
//         return 'il numero è pari';
//     }

//     return 'il numero è dispari stampo il successivo ' + ++numero;
// }
 

 /*****************************************************************
  * Snack 3: Generatore di “nomi cognomi” casuali: 
  * prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) 
  * e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), 
  * Gatsby vuole generare una falsa lista di 5 invitati.
  *****************************************************************/
 



// var surnames = ["Forghieri", "Papagni", "Marazzini"];

// var names = ["Michele", "Fabio", "Roberto"];

// var guestsList = [];

// for (var i = 0; i < 5; i++) {
//     var randomIndexName =  getRandomNumber(0, names.length)
//     var randomIndexSurname = getRandomNumber(0, surnames.length)
    
//     var newName = names[randomIndexName] + ' ' + surnames[randomIndexSurname];
//     guestsList.push(newName);
// }

// console.log(guestsList);

// // function 

// function getRandomNumber (min, max) { 
//     var random = Math.floor(Math.random() * (max - min) ) + min;
//     return random; 
// }


/*********************************************************************
 * Snack 4: Crea un array di numeri interi, 
 * ad esempio (1, 4, 2, 15, 120, 17, 3) 
 * e fai la somma di tutti gli elementi che sono in posizione dispari. 
 * Prova prima senza funzione e poi con funzione.
 *********************************************************************/

 var numbers = [1, 4, 2, 15, 120, 17, 3];
 console.log(numbers);
 
 var somma = 0;


 for (var numbersIndex = 0; numbersIndex < numbers.length -1; numbersIndex++) {

     if (numbersIndex % 2 !== 0) {
        console.log('numeri in posizione dispari: ', parseInt(numbers[numbersIndex]));
        somma += numbers[numbersIndex];
        
        
     } else {
         console.log('numeri in posizione pari: ', parseInt(numbers[numbersIndex]));

     }
          
 } 

 console.log('la somma totale dei numeri in posizione dispari è: ', somma);
 

 
