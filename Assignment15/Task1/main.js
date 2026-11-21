/*
 * Name       : Aditya Kumar Maurya
 * Roll No.   : 2510303042
 * Assignment 15, Task 1 : Promise resolve
 */
function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

checkMarks(80).then((value) => console.log(value));
