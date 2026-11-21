# Assignment 11: Scope and Closures

**Name:** Aditya Kumar Maurya
**Roll No:** 2510303042

## 1. Experiment Title

Block scope, global scope and closures.

## 2. Aim

To explain block scope and global scope, and to use a function that returns a function that keeps a value between calls.

## 3. Software / Tools Required

- Programming Language: JavaScript
- Node.js (to run `.js` files from the terminal)
- Web browser (Chrome / Edge / Firefox) with DevTools console (F12)
- Editor: VS Code / any text editor

## 4. Theory

The following concepts are used in this experiment:

**1. Block scope:**
Variables declared with `let` and `const` inside `{ }` exist only inside that block. A variable with the same name outside is a different variable.

**2. Global scope:**
A variable declared outside any function can be used inside functions.

**3. Closure:**
An inner function remembers the variables of the function it was created in, even after the outer function has finished.

## 5. Algorithm / Procedure

### Task 1: Block scope

1. Start.
2. Declare `level` with the value `outer`.
3. Inside a block declare `level` with the value `inner` and print it.
4. After the block print `level` again.
5. Stop.

### Task 2: Closure counter

1. Start.
2. Define `makeCounter` that sets `count` to 0.
3. Return a function that adds 1 to `count` and returns it.
4. Call the returned function twice and print each result.
5. Stop.

### Task 3: Global scope

1. Start.
2. Declare `school` with the text `Sample College` outside any function.
3. Define `showSchool` that prints `Welcome to` and the value of `school`.
4. Call `showSchool`.
5. Stop.

## 6. Input

The following values are used in the experiment:

**Task 1:**

No input required.

**Task 2:**

No input required.

**Task 3:**

school = "Sample College"

## 7. Output

**Task 1:**

```
inner
outer
```

**Task 2:**

```
1
2
```

**Task 3:**

```
Welcome to Sample College
```

---

**Result:** All 3 JavaScript programs of Assignment 11 were successfully written and executed, and the outputs were verified.
