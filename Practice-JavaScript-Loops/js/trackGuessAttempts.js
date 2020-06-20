const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}


do {
  guess = prompt('Please guess a number between 1 and 10.');
} while (parseInt(guess) !== randomNumber);

main.innerHTML = `<h1>You guessed the number! It was ${randomNumber}.</h1>`;

