// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.



// DATI PRESENTI *numeri da 1 a 100

// DATI DA RACCOGLIERE

// OPERAZIONI LOGICHE

// iterazioni da 1 a 100
    // SE multiplo di 3, stampa FIZZ
    // ALTRIMENTI SE multiplo di 5, stampa BUZZ
    // ALTRIMENTI multiplo di 3 e 5, stampa FIZZBUZZ
    //ripeti fino a raggiungere 100


let message = "";

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 ===0)
        console.log("BuzzFizz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else if (i % 5 === 0)
        console.log("Buzz");
} 
// OUTPUT

