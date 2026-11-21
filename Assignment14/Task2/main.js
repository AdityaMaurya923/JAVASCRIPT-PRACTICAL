/*
 * Name       : Aditya Kumar Maurya
 * Roll No.   : 2510303042
 * Assignment 14, Task 2 : clearTimeout
 */
const id = setTimeout(() => {
  console.log("Not shown");
}, 1000);

clearTimeout(id);
console.log("Cancelled");
