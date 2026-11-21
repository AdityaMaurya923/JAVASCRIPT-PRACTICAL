/*
 * Name       : Aditya Kumar Maurya
 * Roll No.   : 2510303042
 * Assignment 8, Task 1 : Inheritance
 */
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hi, I am " + this.name;
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}

const t = new Teacher("Anita", "Maths");
console.log(t.greet());
