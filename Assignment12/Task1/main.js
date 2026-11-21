/*
 * Name       : Aditya Kumar Maurya
 * Roll No.   : 2510303042
 * Assignment 12, Task 1 : applyTwice
 */
function applyTwice(fn, value) {
  return fn(fn(value));
}

function addTen(n) {
  return n + 10;
}

console.log(applyTwice(addTen, 5));
