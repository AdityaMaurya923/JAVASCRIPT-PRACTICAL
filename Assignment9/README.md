# Assignment 9: DOM, Validation, Storage and Quiz

**Name:** Aditya Kumar Maurya
**Roll No:** 2510303042

## 1. Experiment Title

Changing a page with a click, form validation, localStorage and a small quiz.

## 2. Aim

To change a page with a click, check form values in code, save text in local storage, and build a small quiz.

## 3. Software / Tools Required

- Programming Language: JavaScript
- Node.js (to run `.js` files from the terminal)
- Web browser (Chrome / Edge / Firefox) with DevTools console (F12)
- Editor: VS Code / any text editor

## 4. Theory

The following concepts are used in this experiment:

**1. DOM:**
The DOM is the page as objects. `document.getElementById()` finds an element and `textContent` changes its text.

**2. Events:**
`addEventListener("click", fn)` runs a function when an element is clicked.

**3. Validation:**
Checking values in code (for example an empty name) and collecting error messages in an array.

**4. localStorage:**
`localStorage.setItem(key, value)` saves text in the browser and `localStorage.getItem(key)` reads it back, even after the page is reloaded.

**5. Radio buttons:**
Radio buttons with the same `name` allow only one choice. The chosen one is found with `querySelector('input[name="..."]:checked')`.

## 5. Algorithm / Procedure

### Task 1: Change heading on click

1. Start.
2. Create a heading `Welcome` and a button `Change text`.
3. Add a click listener to the button.
4. In the listener, set the heading text to `Button clicked`.
5. Stop.

### Task 2: validateForm

1. Start.
2. Define `validateForm(name)` with an empty `errors` array.
3. If the name is empty, add `Name is required` to the array.
4. Return the array.
5. Print `validateForm("Asha")` and then `validateForm("")`.
6. Stop.

### Task 3: Save text in localStorage

1. Start.
2. Create a text box and a `Save` button.
3. On click of Save, store the text box value in `localStorage` under the key `note`.
4. When the page opens, read the key `note` and show it in the box.
5. Stop.

### Task 4: Quiz with radio buttons

1. Start.
2. Create the question, three radio buttons (4, 5, 6) and a `Check answer` button.
3. On click, find the chosen radio button.
4. If the chosen value is 5 show `Correct`, otherwise show `Try again`.
5. Stop.

## 6. Input

The following values are used in the experiment:

**Task 1:**

Click on the Change text button

**Task 2:**

name = "Asha" and name = "" (empty)

**Task 3:**

Text typed in the box: Remember to submit the lab file

**Task 4:**

Chosen answers: 4 and then 5

## 7. Output

**Task 1:**

- Before clicking: Welcome | Change text
- After clicking the button: Button clicked | Change text

**Task 2:**

```
[]
[ 'Name is required' ]
```

**Task 3:**

- Page opened first time (empty box): Save | input = ''
- Text typed and Save clicked: Save | input = 'Remember to submit the lab file'
- Page reloaded - saved text is shown: Save | input = 'Remember to submit the lab file'

**Task 4:**

- Answer 4 chosen: What is 2 + 3? |  |  4 |  5 |  6 |  | Check answer |  | Try again
- Answer 5 chosen: What is 2 + 3? |  |  4 |  5 |  6 |  | Check answer |  | Correct

---

**Result:** All 4 JavaScript programs of Assignment 9 were successfully written and executed, and the outputs were verified.
