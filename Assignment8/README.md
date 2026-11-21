# Assignment 8: Inheritance, Methods and Composition

**Name:** Aditya Kumar Maurya
**Roll No:** 2510303042

## 1. Experiment Title

extends, methods that check a value, and composition of objects.

## 2. Aim

To use `extends` to make a child class, write a method that checks a value, and place one object inside another.

## 3. Software / Tools Required

- Programming Language: JavaScript
- Node.js (to run `.js` files from the terminal)
- Web browser (Chrome / Edge / Firefox) with DevTools console (F12)
- Editor: VS Code / any text editor

## 4. Theory

The following concepts are used in this experiment:

**1. Inheritance:**
`class Child extends Parent` lets the child use the parent's methods. `super(...)` calls the parent constructor.

**2. Methods that check a value:**
A method can compare an input with a stored value and return `true` or `false`.

**3. Composition:**
One object can hold another object as a property (a Car *has an* Engine).

## 5. Algorithm / Procedure

### Task 1: Person and Teacher (extends)

1. Start.
2. Define `Person` with a `name` and a method `greet` that returns `Hi, I am` and the name.
3. Define `Teacher` that extends `Person` and adds `subject`.
4. Create Anita who teaches Maths and print her greeting.
5. Stop.

### Task 2: Locker checkPin

1. Start.
2. Define `Locker` that stores a `pin`.
3. Add `checkPin(number)` that returns `true` if the number equals the pin, otherwise `false`.
4. Create a Locker with pin 1234 and print `checkPin(1111)` and `checkPin(1234)`.
5. Stop.

### Task 3: Engine and Car (composition)

1. Start.
2. Define `Engine` that stores a `power`.
3. Define `Car` that creates an `Engine` from the given power.
4. Add `start()` that returns `Car starts with`, the power and `HP`.
5. Create a Car with power 150 and print `start()`.
6. Stop.

## 6. Input

The following values are used in the experiment:

**Task 1:**

name = "Anita", subject = "Maths"

**Task 2:**

pin = 1234, tried = 1111 and 1234

**Task 3:**

power = 150

## 7. Output

**Task 1:**

```
Hi, I am Anita
```

**Task 2:**

```
false
true
```

**Task 3:**

```
Car starts with 150 HP
```

---

**Result:** All 3 JavaScript programs of Assignment 8 were successfully written and executed, and the outputs were verified.
