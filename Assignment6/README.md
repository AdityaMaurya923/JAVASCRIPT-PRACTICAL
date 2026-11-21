# Assignment 6: JSON Text

**Name:** Aditya Kumar Maurya
**Roll No:** 2510303042

## 1. Experiment Title

JSON.stringify, JSON.parse and error handling with try / catch.

## 2. Aim

To convert an object to JSON text, convert JSON text back to an object, and catch invalid JSON.

## 3. Software / Tools Required

- Programming Language: JavaScript
- Node.js (to run `.js` files from the terminal)
- Web browser (Chrome / Edge / Firefox) with DevTools console (F12)
- Editor: VS Code / any text editor

## 4. Theory

The following concepts are used in this experiment:

**1. JSON:**
JSON is a text format for data. Keys and text values must be in double quotes.

**2. JSON.stringify():**
Converts an object into JSON text.

**3. JSON.parse():**
Converts JSON text into an object. It throws an error when the text is not valid JSON.

**4. try / catch:**
Code in `try` runs normally; if it throws an error, the `catch` block runs.

## 5. Algorithm / Procedure

### Task 1: JSON.stringify

1. Start.
2. Create an object with `name` Rohan and `marks` array [70, 80].
3. Convert it to JSON text with `JSON.stringify`.
4. Print the text.
5. Stop.

### Task 2: JSON.parse

1. Start.
2. Store the JSON text in a variable.
3. Convert it to an object with `JSON.parse`.
4. Print the `city` property.
5. Stop.

### Task 3: Invalid JSON with try / catch

1. Start.
2. Store the invalid text `{name: Rohan}` in a string variable.
3. In `try`, call `JSON.parse` on the text.
4. In `catch`, print `Invalid JSON`.
5. Stop.

## 6. Input

The following values are used in the experiment:

**Task 1:**

name = "Rohan", marks = [70, 80]

**Task 2:**

Text = {"city":"Pune","pin":411001}

**Task 3:**

Text = {name: Rohan} (keys and values are not in quotes)

## 7. Output

**Task 1:**

```
{"name":"Rohan","marks":[70,80]}
```

**Task 2:**

```
Pune
```

**Task 3:**

```
Invalid JSON
```

---

**Result:** All 3 JavaScript programs of Assignment 6 were successfully written and executed, and the outputs were verified.
