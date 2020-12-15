// Email user
var emailUsr = prompt('Inserisci la tua e-mail');

//Lista allowed user
var allowList = ['email1', 'email2', 'email3'];

var allowUsr = false;

//Verify email
for(var i = 0; i <= allowList.length - 1; i++){
  if (emailUsr === allowList[i]) {
    allowUsr = true;
  }
}

if (allowUsr){
  alert('Ok!')
} else {
  alert('Accesso negato.')
}
