# Assignment 14: Timers and Intervals

**Name:** Aditya Kumar Maurya
**Roll No:** 2510303042

## 1. Experiment Title

setTimeout, clearTimeout, setInterval and clearInterval.

## 2. Aim

To run code after a delay with `setTimeout`, cancel a timer, and repeat code with `setInterval`.

## 3. Software / Tools Required

- Programming Language: JavaScript
- Node.js (to run `.js` files from the terminal)
- Web browser (Chrome / Edge / Firefox) with DevTools console (F12)
- Editor: VS Code / any text editor

## 4. Theory

The following concepts are used in this experiment:

**1. setTimeout:**
Runs a function once after a delay in milliseconds. Even with a delay of 0 it runs only after the current code has finished.

**2. clearTimeout:**
Cancels a timer using the id returned by `setTimeout`.

**3. setInterval / clearInterval:**
`setInterval` runs a function again and again after every delay. `clearInterval` stops it.

## 5. Algorithm / Procedure

### Task 1: setTimeout order

1. Start.
2. Print `Start`.
3. Schedule `Timer done` with `setTimeout` and a delay of 0.
4. Print `End`.
5. The timer callback runs after the main code, so the order is Start, End, Timer done.
6. Stop.

### Task 2: clearTimeout

1. Start.
2. Schedule `Not shown` with a delay of 1000 ms and keep the id in `id`.
3. Cancel the timer with `clearTimeout(id)`.
4. Print `Cancelled`.
5. Stop.

### Task 3: setInterval and clearInterval

1. Start.
2. Set `count` to 0.
3. Use `setInterval` every 200 ms: add 1 to `count` and print `Tick` and the count.
4. When `count` reaches 3, stop the interval with `clearInterval`.
5. Stop.

## 6. Input

The following values are used in the experiment:

**Task 1:**

No input required.

**Task 2:**

delay = 1000 ms

**Task 3:**

interval = 200 ms, stop at count = 3

## 7. Output

**Task 1:**

```
Start
End
Timer done
```

**Task 2:**

```
Cancelled
```

**Task 3:**

```
Tick 1
Tick 2
Tick 3
```

---

**Result:** All 3 JavaScript programs of Assignment 14 were successfully written and executed, and the outputs were verified.
