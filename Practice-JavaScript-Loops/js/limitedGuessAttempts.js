const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;
let message;

// Keep track of the number of guess attempts
let attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

do {
  guess = prompt('Please guess a number between 1 and 10.');
  attempts++;
  if (parseInt(guess) === randomNumber){
    message = `You guessed the number! It took you ${attempts} tries to guess number ${randomNumber}.`;
    break;
  } else{
    message = `You did not guess the number. It was ${randomNumber}`;

  }
} while ( attempts < 10);


main.innerHTML = `<h1>${message}</h1>`;

