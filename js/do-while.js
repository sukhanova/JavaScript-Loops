/* `do..while` creates a loop that executes code until the test condition evaluates to false 
  !!! Do while will ALWAYS execute the code block once before the condition is checked. That's because the condition isn't tested until after the code block
  */

function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }

  let counter = 0;
  do {
    console.log(`The random number is ${getRandomNumber(10)}`);
    counter ++;
  } while (counter < 20);
