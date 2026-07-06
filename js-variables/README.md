# Data Types

JavaScript has two main categories of data types:

## Primitive Data Types

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

Examples:

```javascript
const firstName = "Iva";    // String
const age = 26;             // Number
const isStudent = true;     // Boolean
let address;                // Undefined
const car = null;           // Null
```

---

# Type Conversion

Sometimes we need to convert a value from one data type to another.

## Convert to Number

Use `Number()`.

```javascript
const age = "25";

const convertedAge = Number(age);

console.log(convertedAge);        // 25
console.log(typeof convertedAge); // number
```

---

## Convert to String

Use `String()`.

```javascript
const age = 25;

const text = String(age);

console.log(text);        // "25"
console.log(typeof text); // string
```

---

## Convert to Boolean

Use `Boolean()`.

```javascript
const value = 1;

const result = Boolean(value);

console.log(result); // true
```

Examples:

```javascript
Boolean(0);        // false
Boolean(1);        // true
Boolean("");       // false
Boolean("Hello");  // true
Boolean(null);     // false
Boolean(undefined);// false
```

---

# typeof

Use `typeof` to check the data type of a value.

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 25);      // number
console.log(typeof true);    // boolean
console.log(typeof undefined); // undefined
```