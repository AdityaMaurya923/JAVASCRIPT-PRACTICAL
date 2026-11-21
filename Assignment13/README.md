# Assignment 13: Reduce, Some, Every and Map

**Name:** Aditya Kumar Maurya
**Roll No:** 2510303042

## 1. Experiment Title

reduce, some, every and map on arrays.

## 2. Aim

To use `reduce`, `some`, `every` and `map` on arrays, and to keep the original array unchanged.

## 3. Software / Tools Required

- Programming Language: JavaScript
- Node.js (to run `.js` files from the terminal)
- Web browser (Chrome / Edge / Firefox) with DevTools console (F12)
- Editor: VS Code / any text editor

## 4. Theory

The following concepts are used in this experiment:

**1. reduce:**
Combines all items into one value, starting from an initial value: `arr.reduce((total, x) => total + x, 0)`.

**2. some:**
Returns `true` if at least one item passes the test.

**3. every:**
Returns `true` only if all items pass the test.

**4. map:**
Returns a new array with each item changed. The original array stays unchanged.

## 5. Algorithm / Procedure

### Task 1: reduce total

1. Start.
2. Store 120, 45 and 300 in `prices`.
3. Use `reduce` starting from 0 to add all prices.
4. Print the total.
5. Stop.

### Task 2: some and every

1. Start.
2. Store 72, 85, 30 and 90 in `marks`.
3. Use `some` to check whether any mark is below 40 and print it.
4. Use `every` to check whether all marks are 35 or more and print it.
5. Stop.

### Task 3: map

1. Start.
2. Store 72, 85, 64 and 90 in `marks`.
3. Use `map` to make a new array where every mark is 5 more.
4. Print the new array and then the original array.
5. Stop.

## 6. Input

The following values are used in the experiment:

**Task 1:**

prices = [120, 45, 300]

**Task 2:**

marks = [72, 85, 30, 90]

**Task 3:**

marks = [72, 85, 64, 90]

## 7. Output

**Task 1:**

```
465
```

**Task 2:**

```
true
false
```

**Task 3:**

```
[ 77, 90, 69, 95 ]
[ 72, 85, 64, 90 ]
```

---

**Result:** All 3 JavaScript programs of Assignment 13 were successfully written and executed, and the outputs were verified.
