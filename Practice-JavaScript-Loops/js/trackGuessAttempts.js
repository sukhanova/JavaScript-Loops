const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;

// Keep track of the number of guess attempts

let attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}


do {
  guess = prompt('Please guess a number between 1 and 10.');
  attempts++;
} while (parseInt(guess) !== randomNumber);


main.innerHTML = `<h1>You guessed the number! It took you ${attempts} tries to guess number ${randomNumber}.</h1>`;

