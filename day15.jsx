// function coinToss() {
//   // Generate a random number between 0 and 1
//   const randomNumber = Math.random();

//   // Use Math.round() to round the random number to 0 or 1
//   const result = Math.round(randomNumber);

//   // Check the result and display the outcome
//   if (result === 0) {
//     alert("Heads");
//   } else {
//     alert("Tails");
//   }
// }

// alert(<button onClick={coinToss}>Toss the Coin</button>);

function coinToss() {
  // Generate a random number between 0 and 1
  const randomNumber = Math.random();

  // Use Math.round() to round the random number to 0 or 1
  const result = Math.round(randomNumber);

  // Check the result and display the outcome
  if (result === 0) {
    alert("Heads");
  } else {
    alert("Tails");
  }
}

function showButtonInAlert() {
  const button = document.createElement("button");
  button.innerText = "Toss the Coin";
  button.onclick = coinToss;
  document.body.appendChild(button);
  //   alert("Click the button below to toss the coin:");
  //   document.body.removeChild(button);
}

document.addEventListener("DOMContentLoaded", showButtonInAlert);
