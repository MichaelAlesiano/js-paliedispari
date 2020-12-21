// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L’utente inserisce un numero da 1 a 5
var computer = numeroRandom(1,5);

// L’utente sceglie pari o dispari e controllo che ciò che ha scritto corrisponda a ciò che sto chiedendo
do {
  pariODispari = prompt('Pari o dispari ?').toLowerCase();
} while((pariODispari != 'pari') && (pariODispari != 'dispari'));

do {
  numero = parseInt(prompt('Inserisci un numero da 1 a 5'));
} while ((numero <= 0) || (numero > 5));

// Somma numero inserito e numero random
var sommaNumeri = somma(numero, computer);
console.log(sommaNumeri);

// Stabilisco il vincitore
var controllo = pariDispari(sommaNumeri);
console.log(controllo);

if (pariODispari == controllo){
  console.log('Hai vinto !');
} else {
  console.log('Hai perso !');
}


// Funzioni
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function somma(n1,n2){
  return n1 + n2;
}

function pariDispari(n){
  var risultato = 'dispari';
  if (n % 2 == 0){
    risultato = 'pari';
  }
  return risultato;
}
