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


/* Challenge Task:
Create a while loop that logs the current value of count to the console 26 times. Use the count variable to track the number of times the loop runs. Don't forget to increment count by one each time through the loop.
*/

let count = 0;

while(count < 26 ){
  console.log(count);
  count ++
}
