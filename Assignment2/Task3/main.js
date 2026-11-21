/*
 * Name       : Aditya Kumar Maurya
 * Roll No.   : 2510303042
 * Assignment 2, Task 3 : Calculator using if and else if
 */
const x = 8;
const y = 4;

let operator = "+";
if (operator === "+") {
  console.log("Sum: " + (x + y));
} else if (operator === "-") {
  console.log("Difference: " + (x - y));
}

// Change the operator and repeat the check
operator = "-";
if (operator === "+") {
  console.log("Sum: " + (x + y));
} else if (operator === "-") {
  console.log("Difference: " + (x - y));
}
