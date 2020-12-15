// Email user
var emailUsr = prompt('Inserisci la tua e-mail');

//Lista allowed user
var allowUsr = ['email1', 'email2', 'email3'];

for(var i = 0; i < allowUsr.length; i++){
  //Verify email
  if (emailUsr === allowUsr[i]) {
    alert('Ok!')
  } else {
    alert ('Accesso negato.')
  }
}
