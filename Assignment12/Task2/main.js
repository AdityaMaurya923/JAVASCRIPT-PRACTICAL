/*
 * Name       : Aditya Kumar Maurya
 * Roll No.   : 2510303042
 * Assignment 12, Task 2 : Callback
 */
function formatMarks(marks, callback) {
  return callback(marks);
}

console.log(formatMarks(76, (m) => "Marks: " + m + "/100"));
