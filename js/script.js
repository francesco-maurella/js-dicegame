// Dices variables
const dice = document.getElementById('dice');
const button = document.getElementById('button');
let playerUsr;
let playerPc;

// Launch dice funtion
button.addEventListener('click',
function() {
    playerUsr = Math.floor((Math.random() * 6) + 1); // user dice
    playerPc = Math.floor((Math.random() * 6) + 1); // pc dice

    dice.className = 'launched';  // new class after function

    // dices in html
    const diceOne = document.getElementById('dice-one');
    const diceTwo = document.getElementById('dice-two');

    // result status
    diceOne.innerHTML = '<img src="img/0' + playerUsr + '.jpg"><br>Tu';
    diceTwo.innerHTML = '<img src="img/0' + playerPc + '.jpg"><br>Avversario';

    let result = document.getElementById('result');

    result.innerHTML = 'Loading<br />...'
    diceOne.style.opacity = '1';
    diceTwo.style.opacity = '1';

    setTimeout(function(){

      if (playerUsr > playerPc) {
        result.innerHTML = 'Hai Vinto!<br>&#128512;'
        diceTwo.style.opacity = '0.55';
      } else if (playerUsr < playerPc) {
        diceOne.style.opacity = '0.55';
        result.innerHTML = 'Hai Perso.<br>&#128532'
      } else if (playerUsr === playerPc) {
        result.innerHTML = 'Hai Pareggiato.<br>&#128528'
      }

    }, 400)

  }
);
