/*
 * Name       : Aditya Kumar Maurya
 * Roll No.   : 2510303042
 * Assignment 11, Task 1 : Block scope
 */
let level = "outer";

{
  let level = "inner";
  console.log(level);
}

console.log(level);
