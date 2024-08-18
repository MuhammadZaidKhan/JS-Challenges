let randomNum = parseInt(Math.random() * 100 + 1);

// const guessField = document.querySelector('#guess');
const userInput = document.querySelector("#guessField");
const submitForm = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remGuesses = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitForm.addEventListener("click", function (e) {
    e.preventDefault();
    const val = parseInt(userInput.value);
    console.log(val);
    validateGuess(val);
    userInput.value = "";
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid Number");
  } else if (guess < 1) {
    alert("please enter a Number more than 1");
  } else if (guess > 100) {
    alert("please enter a valid Number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage("Ahaa you guessed it right");
  } else if (guess < randomNum) {
    displayMessage("too low :(");
  } else if (guess > randomNum) {
    displayMessage("too high :(");
  }
}

function displayGuess(guess) {
  userInput.val = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remGuesses.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame(guess) {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add(".button");
  p.innerHTML = `<h2 id="newGame">Start new Game here</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remGuesses.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    lowOrHi.innerHTML = "";
    playGame = true;
  });
}
