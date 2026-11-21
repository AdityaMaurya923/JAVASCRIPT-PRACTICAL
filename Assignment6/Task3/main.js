/*
 * Name       : Aditya Kumar Maurya
 * Roll No.   : 2510303042
 * Assignment 6, Task 3 : Catch invalid JSON
 */
const text = "{name: Rohan}";

try {
  const obj = JSON.parse(text);
  console.log(obj);
} catch (error) {
  console.log("Invalid JSON");
}
