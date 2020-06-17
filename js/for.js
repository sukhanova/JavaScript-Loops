/*
The `for` loop is a more compact variation of the while loop, with similar parts, and it's useful when you know how many times you want to repeat an action.
*/

function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }

  for (let i = 0; i < 10; i++) {
    console.log(`The random number is ${getRandomNumber(10)}`)
  }

  /*
  Challenge:
  Create a for loop that logs the numbers 5 to 100 to the console. Use the console.log() method to log a value to the console.
  */

  for (let i = 5; i <=100; i++){
      console.log(i);
  }