# Assignment 12: Callbacks and Higher-Order Functions

**Name:** Aditya Kumar Maurya
**Roll No:** 2510303042

## 1. Experiment Title

Passing a function as an argument to another function.

## 2. Aim

To pass a function as an argument to another function and call it.

## 3. Software / Tools Required

- Programming Language: JavaScript
- Node.js (to run `.js` files from the terminal)
- Web browser (Chrome / Edge / Firefox) with DevTools console (F12)
- Editor: VS Code / any text editor

## 4. Theory

The following concepts are used in this experiment:

**1. Higher-order function:**
A function that takes another function as an argument or returns a function.

**2. Callback:**
The function that is passed in and called by the other function.

## 5. Algorithm / Procedure

### Task 1: applyTwice

1. Start.
2. Define `applyTwice(fn, value)` that calls `fn` on the value and then on the result.
3. Define `addTen` that adds 10 to a number.
4. Print `applyTwice(addTen, 5)`.
5. Stop.

### Task 2: formatMarks with callback

1. Start.
2. Define `formatMarks(marks, callback)` that returns `callback(marks)`.
3. Call it with 76 and an arrow function that returns `Marks: ` + marks + `/100`.
4. Print the result.
5. Stop.

### Task 3: repeatAction

1. Start.
2. Define `repeatAction(times, action)` with a loop from 1 to `times`.
3. In each round call `action(round)`.
4. Call it with 3 and an arrow function that prints `Round` and the round number.
5. Stop.

## 6. Input

The following values are used in the experiment:

**Task 1:**

fn = addTen, value = 5

**Task 2:**

marks = 76

**Task 3:**

times = 3

## 7. Output

**Task 1:**

```
25
```

**Task 2:**

```
Marks: 76/100
```

**Task 3:**

```
Round 1
Round 2
Round 3
```

---

**Result:** All 3 JavaScript programs of Assignment 12 were successfully written and executed, and the outputs were verified.
