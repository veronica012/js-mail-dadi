//chiedi di inserire un numero intero tra 1 e 6
var numero_inserito_da_utente = prompt('Inserisci un numero intero da 1 a 6!');
console.log("numero inserito dall'umano: "  + numero_inserito_da_utente);
//il computer deve restituire un numero casuale tra 1 e 6
var numero_random_computer = Math.floor((Math.random() * 6) +1);
console.log("numero random dal computer: " + numero_random_computer);
//se il numero inserito dall'utente è > 6
if (numero_inserito_da_utente > 6) {
    console.log('Ritenta, il numero non può essere maggiore di 6!')
} //se il numero inserito dall'utente > numero random restituito dal computer
else if (numero_inserito_da_utente > numero_random_computer) {
    console.log('Hai Vinto!');
} //se il numero inserito dall'utente < numero restituito dal computer
else {
    console.log('Hai Perso! Computer ha vinto!');
}
