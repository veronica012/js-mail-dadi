var email_utente = prompt('Inserisci la tua email, grazie!');
console.log(email_utente);
//creare una lista di email= creare un array che constiene n indirizzi email
var lista_email = ['vincentvangogh@fakemail.com', 'andywarhol@fakemail.com', 'salvadordali@fakemail.com', 'picasso@fakemail.com', 'claudemonet@fakemail.com', 'raffaellosanzio@fakemail.com', 'gauguinpaul@fakemail.com', 'leonardodavinci@fakemail.com', 'renoir@fakemail.com', 'paulcezanne@fakemail.com'];
console.log(lista_email);

//controllo
var controllo= false;
for(var i = 0; i < lista_email.lenght; i++) {
    if (email_utente == lista_email[i])  {
        controllo=true;
    }
}
if (controllo) {
    console.log('Sei nella lista');
} else {
    console.log('Non sei nella lista');
}
