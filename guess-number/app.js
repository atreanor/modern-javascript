/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Plauer gets a certain of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3
    won = false; // might remove

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message')
      resultImg = document.querySelector('.result-img');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// hide champ gif
resultImg.style.display = 'none';

// Play again event listener
game.addEventListener('mousedown', function(e){
  // if event is play-again reload the window 
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
  console.log(1);
})

// Add Event Listener for guess
guessBtn.addEventListener('click', function(e){
  let guess = parseInt(guessInput.value);
  
  setMessage(`you have ${guessesLeft} guesses remaining`);
  // Validate guess - not NaN, less than min or greater than max
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Invalid input - enter a number between ${min} and ${max}`, 'red');
  } 

  if (guess === winningNum) {
    // Game Over - won
    gameOver(true, `Congratulations - ${winningNum} is correct, you win!`);
    resultImg.style.display = 'none';
  } else {

    guessesLeft--;
    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(false, `Game over - winning number was ${winningNum}, you lost!`);
    } else {
      // Game continues - answer wrong

      // Change border color
      guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

      setMessage(`${guess} is incorrect, ${guessesLeft} guesses left.`, 'red');
    }
  }
  console.log(guess);
})

// -----  setMessage  ------
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;

  // Clear error after 3 seconds
  setTimeout(clearError, 10000);
}

// Clear error
function clearError(){
  message.textContent = '';
}

// -----  gameOver function  -----
function gameOver(won, msg) {
  let color;
  won === true ? coler = 'green' : color = 'red';
  // disable input
  guessInput.disabled = true;
  // change border & message color
  guessInput.style.borderColor = color;
  message.style.color = color;
  // Set message 
  setMessage(msg, color);
  // resetGameValues();

  // Play Again??
  guessBtn.value = 'Play Again?';
  guessBtn.className += 'play-again';
}

// ---- resetGameValues -----
function resetGameValues() {
  guessesLeft = 3;
  guessInput.value = '';
  guessInput.disabled = false;

}

// -----  getWinningNum  -----
function getRandomNum(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
}