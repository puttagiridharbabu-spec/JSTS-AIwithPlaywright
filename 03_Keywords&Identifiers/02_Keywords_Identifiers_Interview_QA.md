# JavaScript Keywords & Identifiers — Interview Practice

## Quick Questions

### 1. What is a keyword?

A keyword is a reserved/special word with predefined syntactic meaning in JavaScript.

Examples:
`let`, `const`, `var`, `if`, `return`, `function`, `class`.

### 2. What is an identifier?

An identifier is a name assigned by the programmer to variables, functions, classes, parameters, etc.

Example:

```js
let userName = "Ravi";
```

`let` is the keyword and `userName` is the identifier.

### 3. Can an identifier start with a number?

No.

```js
let user1; // valid
// let 1user; // invalid
```

### 4. Can `$` and `_` be used?

Yes.

```js
let $price = 100;
let _temp = 20;
```

### 5. Is JavaScript case-sensitive?

Yes.

```js
let name = "A";
let Name = "B";
```

These are different identifiers.

### 6. Is Function a keyword?

No. `Function` is a built-in global constructor, not a reserved keyword.

### 7. Difference between var, let and const?

- `var` → function-scoped, older style
- `let` → block-scoped, can be reassigned
- `const` → block-scoped, cannot be reassigned

### 8. What is TDZ?

TDZ means Temporal Dead Zone. It is the period between entering a scope and the point where a `let` or `const` declaration is initialized. Accessing it during this period causes a ReferenceError.

### 9. Why prefer let/const over var?

They provide block scope and make variable behavior more predictable. Modern JavaScript generally prefers `const` and `let`.

### 10. What naming convention is common for JavaScript variables?

camelCase.

```js
let userName;
let totalPrice;
let isLoggedIn;
```

---

# Interview Traps

## Trap 1

```js
const arr = [];
arr.push(10);
```

Valid. The array can be mutated; the variable cannot be reassigned.

## Trap 2

```js
if (true) {
    let x = 10;
}

// console.log(x);
```

ReferenceError because `x` is block-scoped.

## Trap 3

```js
if (true) {
    var x = 10;
}

console.log(x);
```

Works because `var` is function-scoped rather than block-scoped.

## Trap 4

```js
console.log(a);
var a = 10;
```

Prints `undefined`.

```js
// console.log(b);
let b = 10;
```

Throws ReferenceError because of the TDZ.

---

# Rapid-Fire Revision

1. Keyword → JavaScript's reserved/special word.
2. Identifier → programmer-defined name.
3. Number cannot be the first identifier character.
4. `$` is allowed.
5. `_` is allowed.
6. Spaces are not allowed.
7. JavaScript is case-sensitive.
8. `let` and `const` are block-scoped.
9. `var` is function-scoped.
10. `const` prevents reassignment, not all mutation.
11. camelCase is standard for variables/functions.
12. PascalCase is common for classes.
13. SCREAMING_SNAKE_CASE is commonly used for fixed constants.
14. Comments are not executed.
15. `Function` is a built-in name, not a reserved keyword.
