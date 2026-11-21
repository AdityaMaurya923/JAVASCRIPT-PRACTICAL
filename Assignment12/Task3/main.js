/*
 * Name       : Aditya Kumar Maurya
 * Roll No.   : 2510303042
 * Assignment 12, Task 3 : repeatAction
 */
function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}

repeatAction(3, (round) => console.log("Round " + round));
