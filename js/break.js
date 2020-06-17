const secretWord = 'tomato';
let message = 'Access denied :(';

for ( let i = 5; i >= 1; i-- ) {
  let guess = prompt(`Enter the secret word. You have ${i} tries.`);
  if ( guess === secretWord ) {
    message = 'Welcome to the secret loop world!';
  }
}

alert(message);

/*
  Challenge:
  The for loop in script.js runs as many times as the length value of the string assigned to the message variable. It logs the current value of i to the console, and the rest of the program continues when the loop completes.

Add the statement that immediately terminates the for loop if the value of i is equal to message / 2 (half the length value).
  */

 let message = "supercalifragilisticexpialidocious";
message = message.length;

for ( let i = 1; i < message; i++ ) {
  if ( i === message / 2 ) {
    console.log('The loop has terminated...');
  break;
  }
  console.log(`Logging the number ${i}`);
}

console.log('The program continues...');
