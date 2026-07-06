# If / Else

## What is an if statement?

An `if` statement allows us to execute a block of code only if a condition is true.

Syntax:

```javascript
if (condition) {
    // code to execute
}
```

---

## Example

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}
```

If the condition is true, the code inside the curly braces will be executed.

---

# if...else

Use `else` when you want to execute another block of code if the condition is false.

Syntax:

```javascript
if (condition) {
    // executed if the condition is true
} else {
    // executed if the condition is false
}
```

Example:

```javascript
let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

## Comparison Operators

These operators are commonly used in conditions.

| Operator | Meaning |
|----------|---------|
| `==` | Equal (loose equality) |
| `===` | Strictly equal |
| `!=` | Not equal |
| `!==` | Strictly not equal |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

---

## Code Blocks

The code inside `{}` is called a **code block**.

```javascript
if (age >= 18) {
    console.log("Adult");
    console.log("Welcome!");
}
```

Both lines are executed if the condition is true.