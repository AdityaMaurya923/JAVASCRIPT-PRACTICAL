/*
 * Name       : Aditya Kumar Maurya
 * Roll No.   : 2510303042
 * Assignment 7, Task 1 : Constructor function
 */
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

const s = new Student("Asha", 88);
console.log(s.name);
console.log(s.marks);
