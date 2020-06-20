const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let message;


function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for(let i = 1; i <=10; i++) {
  let guess = prompt('Please guess a number between 1 and 10.');
  if (parseInt(guess) === randomNumber){
    message = `You guessed the number! It took you ${i} tries to guess number ${randomNumber}.`;
    break;
  } else{
    message = `You did not guess the number. It was ${randomNumber}`;
  }
}

main.innerHTML = `<h1>${message}</h1>`;

