# Assignment 7: Constructor Functions and Classes

**Name:** Aditya Kumar Maurya
**Roll No:** 2510303042

## 1. Experiment Title

Constructor functions, ES6 classes and prototype methods.

## 2. Aim

To create objects with a constructor function and with an ES6 class, and to add a method through the prototype.

## 3. Software / Tools Required

- Programming Language: JavaScript
- Node.js (to run `.js` files from the terminal)
- Web browser (Chrome / Edge / Firefox) with DevTools console (F12)
- Editor: VS Code / any text editor

## 4. Theory

The following concepts are used in this experiment:

**1. Constructor function:**
A function used with `new` to create objects. `this` refers to the new object.

**2. ES6 class:**
`class` gives a cleaner syntax with a `constructor` and methods.

**3. Prototype:**
Methods added to `Constructor.prototype` are shared by all objects created from it.

## 5. Algorithm / Procedure

### Task 1: Constructor function Student

1. Start.
2. Define the constructor `Student(name, marks)` that saves both on `this`.
3. Create `new Student("Asha", 88)`.
4. Print the name and the marks, one on each line.
5. Stop.

### Task 2: ES6 class Book

1. Start.
2. Define class `Book` with a constructor taking `title` and `pages`.
3. Add method `summary` returning `title has pages pages`.
4. Create the book `Algorithms` with 320 pages and print its summary.
5. Stop.

### Task 3: Prototype method

1. Start.
2. Define the constructor `Student(name, marks)`.
3. Add `result` to `Student.prototype`: return `Pass` for marks of 40 or more, otherwise `Fail`.
4. Create the student Asha with marks 88 and print her result.
5. Stop.

## 6. Input

The following values are used in the experiment:

**Task 1:**

name = "Asha", marks = 88

**Task 2:**

title = "Algorithms", pages = 320

**Task 3:**

name = "Asha", marks = 88

## 7. Output

**Task 1:**

```
Asha
88
```

**Task 2:**

```
Algorithms has 320 pages
```

**Task 3:**

```
Pass
```

---

**Result:** All 3 JavaScript programs of Assignment 7 were successfully written and executed, and the outputs were verified.
