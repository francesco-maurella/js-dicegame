// Welecome message
alert('Benvenuto su TWO OR MORE.\nEffettua l\'accesso per iniziare a giocare.');

// Email Request
var emailUsr = prompt('Inserisci la tua e-mail\n(Suggerimento: user02@gmail.com)');

//Allowed list user
var allowList = ['user01@gmail.com', 'user02@gmail.com', 'user03@gmail.com', 'user04@gmail.com'];

var allowUsr;

//Verify Email
for(var i = 0; i <= allowList.length - 1 && !allowUsr; i++){
  if (emailUsr === allowList[i]) {
    allowUsr = true;
  }
}

//Result verification
if (allowUsr){
  alert('Accesso effettuato.\nPuoi iniziare a giocare!');
} else {
  alert('Accesso negato.');
  location.reload();
}

// Dices vars
var dice = document.getElementById('dice');
var button = document.getElementById('button');
var playerUsr;
var playerPc;

// Launch dice funtion
button.addEventListener('click',
function() {
    playerUsr = Math.floor((Math.random() * 6) + 1); // user dice
    playerPc = Math.floor((Math.random() * 6) + 1); // pc dice

    dice.className = 'launched';  // new class after funtion

    // dices in html
    var diceOne = document.getElementById('dice-one');
    var diceTwo = document.getElementById('dice-two');

    // result status
    diceOne.innerHTML = '<img src="img/0' + playerUsr + '.jpg"><br>Tu';
    diceTwo.innerHTML = '<img src="img/0' + playerPc + '.jpg"><br>Avversario';

    var result = document.getElementById('result');

    // result message
    if (playerUsr > playerPc) {
      result.innerHTML = 'Hai Vinto!<br>&#128512;'
      diceOne.style.opacity = '1';
      diceTwo.style.opacity = '0.55';
    } else if (playerUsr < playerPc) {
      diceOne.style.opacity = '0.55';
      diceTwo.style.opacity = '1';
      result.innerHTML = 'Hai Perso.<br>&#128532'
    } else if (playerUsr === playerPc) {
      diceOne.style.opacity = '1';
      diceTwo.style.opacity = '1';
      result.innerHTML = 'Hai Pareggiato.<br>&#128528'
    }
  }
);
