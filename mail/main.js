//creare una lista di email= creare un array che constiene n indirizzi email
var lista_email = ['vincentvangogh@fakemail.com', 'andywarhol@fakemail.com', 'salvadordali@fakemail.com', 'picasso@fakemail.com', 'claudemonet@fakemail.com', 'raffaellosanzio@fakemail.com', 'gauguinpaul@fakemail.com', 'leonardodavinci@fakemail.com', 'renoir@fakemail.com', 'paulcezanne@fakemail.com'];
console.log(lista_email);
for(var i = 0; i < lista_email.lenght; i++);
console.log(lista_email[i]);
//Chiedi all’utente la sua email
var email_utente = prompt('Inserisci la tua email, grazie!');
console.log(email_utente);
//verifica che l'email sia presente bela lista
var n = lista_email.includes(email_utente);
console.log(n);
//stampa un messaggio appropriato se l'email è presente o meno
if()
