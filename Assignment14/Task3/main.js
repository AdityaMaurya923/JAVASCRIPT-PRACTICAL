/*
 * Name       : Aditya Kumar Maurya
 * Roll No.   : 2510303042
 * Assignment 14, Task 3 : setInterval
 */
let count = 0;

const timer = setInterval(() => {
  count++;
  console.log("Tick " + count);

  if (count === 3) {
    clearInterval(timer);
  }
}, 200);
