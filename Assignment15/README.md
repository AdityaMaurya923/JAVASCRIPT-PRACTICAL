# Assignment 15: Promises and async/await with Local Data

**Name:** Aditya Kumar Maurya
**Roll No:** 2510303042

## 1. Experiment Title

Promises, async/await with try / catch, and loading local data as a Promise.

## 2. Aim

To create a Promise that resolves or rejects, use `async`/`await` with `try` and `catch`, and load local data as a Promise.

## 3. Software / Tools Required

- Programming Language: JavaScript
- Node.js (to run `.js` files from the terminal)
- Web browser (Chrome / Edge / Firefox) with DevTools console (F12)
- Editor: VS Code / any text editor

## 4. Theory

The following concepts are used in this experiment:

**1. Promise:**
An object for a value that will be available later. It is either *resolved* with a value or *rejected* with an error.

**2. then / catch:**
`.then()` handles the resolved value and `.catch()` handles the error.

**3. async / await:**
An `async` function always returns a Promise. `await` waits for a Promise inside it. Errors are caught with `try` / `catch`.

**4. Local data as a Promise:**
A function can return a Promise that resolves with local data after a delay (using `setTimeout`).

## 5. Algorithm / Procedure

### Task 1: Resolved Promise

1. Start.
2. Define `checkMarks(marks)` that returns a Promise.
3. Resolve with the marks if they are from 0 to 100, otherwise reject with `Error("Marks out of range")`.
4. Call `checkMarks(80)` and print the value in `.then`.
5. Stop.

### Task 2: Rejected Promise

1. Start.
2. Define `checkMarks(marks)` that returns a Promise.
3. Call `checkMarks(120)`.
4. In `.catch`, print the error message.
5. Stop.

### Task 3: async / await with try / catch

1. Start.
2. Define `checkMarks(marks)` that returns a Promise.
3. Define `async function run()`.
4. In `try`, print `await checkMarks(65)` and then `await checkMarks(-5)`.
5. In `catch`, print `Caught: ` and the error message.
6. Call `run()`.
7. Stop.

### Task 4: getUsers with a delay

1. Start.
2. Define `getUsers()` that returns a Promise resolving after 100 ms with three local users.
3. Define an `async` function that awaits `getUsers()`.
4. Print each user's name.
5. Call the function.
6. Stop.

## 6. Input

The following values are used in the experiment:

**Task 1:**

marks = 80

**Task 2:**

marks = 120

**Task 3:**

marks = 65 and -5

**Task 4:**

Users: Asha, Rohan, Meera

## 7. Output

**Task 1:**

```
80
```

**Task 2:**

```
Marks out of range
```

**Task 3:**

```
65
Caught: Marks out of range
```

**Task 4:**

```
Asha
Rohan
Meera
```

---

**Result:** All 4 JavaScript programs of Assignment 15 were successfully written and executed, and the outputs were verified.
