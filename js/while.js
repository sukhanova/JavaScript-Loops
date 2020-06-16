function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

/* `while` loop executes code as long as a condition evaluates to true
If you do nt know how many times the code should run, you can use a while loop */

let counter = 0;
while (counter < 10) {
  console.log(`The random number is ${getRandomNumber(10)}`);
  counter ++;
}