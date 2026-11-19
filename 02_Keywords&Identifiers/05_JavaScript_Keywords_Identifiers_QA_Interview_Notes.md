# JavaScript Identifiers & Variables — QA Interview + Revision Notes

## 1. The Golden Rule

**Keyword = a reserved/special word JavaScript already understands.**  
**Identifier = a name given by the programmer.**

Example:

```js
let userName = "Giridhar";
```

- `let` → keyword
- `userName` → identifier
- `"Giridhar"` → value

Memory trick:

> **Keyword = JavaScript gave me the word.**  
> **Identifier = I gave the thing a name.**

---

# 2. `var`, `let`, and `const`

## `let`

Use `let` when the variable value may change.

```js
let age = 27;
age = 28;
```

## `const`

Use `const` when the variable binding should not be reassigned.

```js
const browser = "Chrome";
// browser = "Firefox"; // TypeError
```

Important: `const` does **not** mean every object/array inside it becomes immutable.

```js
const users = [];
users.push("Ravi"); // OK
// users = ["Amit"]; // Not OK
```

## `var`

`var` is the older variable declaration style.

```js
var count = 10;
count = 20;
```

For modern JavaScript and Playwright automation, prefer:

```text
const → default choice when reassignment is not needed
let   → when reassignment is needed
var   → generally avoid in modern code
```

Do not memorize percentages such as "let 96%, const 3%, var 1%". The correct rule depends on the code.

---

# 3. Scope — Interview Favorite

## `let` and `const` are block-scoped

```js
if (true) {
    let a = 10;
    const b = 20;
}

// console.log(a); // ReferenceError
// console.log(b); // ReferenceError
```

## `var` is function-scoped

```js
if (true) {
    var c = 30;
}

console.log(c); // 30
```

This is one reason `let` and `const` are preferred.

### Memory

> `let` / `const` → respect the `{ }` block  
> `var` → does not have block scope

---

# 4. Hoisting

JavaScript processes declarations before executing code, but `var`, `let`, and `const` behave differently.

### `var`

```js
console.log(a); // undefined
var a = 10;
```

Conceptually, the declaration is available before the assignment.

### `let` and `const`

```js
// console.log(x); // ReferenceError
let x = 10;
```

They are hoisted too, but cannot be accessed before initialization because of the **Temporal Dead Zone (TDZ)**.

### Interview answer

> `var` is hoisted and initialized with `undefined`. `let` and `const` are hoisted but remain in the Temporal Dead Zone until their declaration is evaluated.

---

# 5. Identifier Rules

A JavaScript identifier can normally contain:

- Letters: `a-z`, `A-Z`
- Digits: `0-9`, but not as the first character
- `_`
- `$`
- Many Unicode identifier characters

Valid:

```js
let userName;
let user1;
let _temp;
let $price;
let a1_b2;
let café;
let 变量;
```

Invalid:

```js
// let 1user = "invalid";
// let my-name = "invalid";
// let my name = "invalid";
// let my@name = "invalid";
```

### Most important rule

```js
let user1;  // valid
let 1user;  // invalid
```

A number can appear **after** the first character, not at the beginning.

---

# 6. Keywords vs Built-in Names

This is an important correction to remember.

Not every JavaScript word that looks "special" is a reserved keyword.

For example:

```js
let Function = "hello";
```

This can be syntactically valid because `Function` is a built-in global constructor name, not a JavaScript reserved keyword.

Similarly, `name` is not a keyword.

### Interview tip

Do not say:

> "Anything JavaScript already has is a keyword."

Instead say:

> "Keywords are reserved words with special syntactic meaning. JavaScript also has built-in global objects/functions that are not necessarily reserved keywords."

Examples of keywords:

```text
let
const
var
if
else
for
while
function
return
class
new
try
catch
throw
async
await
```

---

# 7. Case Sensitivity

JavaScript is case-sensitive.

```js
let Name = "Pramod";
let name = "Amit";

console.log(Name);
console.log(name);
```

`Name` and `name` are two different identifiers.

Best practice: avoid confusing names that differ only by capitalization.

---

# 8. Identifier Naming Conventions

## camelCase — recommended for variables/functions

```js
let userName = "Ravi";
let totalPrice = 99.99;
let isLoggedIn = true;

function loginUser() {}
```

## PascalCase — commonly used for classes

```js
class UserProfile {}

class ShoppingCart {}
```

Constructor functions traditionally may also use PascalCase:

```js
function Person() {}
```

## snake_case

Technically valid JavaScript:

```js
let user_name = "Ravi";
```

But camelCase is the usual JavaScript convention.

## SCREAMING_SNAKE_CASE

Commonly used for constants representing fixed configuration/business values:

```js
const MAX_RETRIES = 3;
const API_KEY = "abc123";
const BASE_URL = "https://example.com";
```

Do not confuse naming convention with the `const` keyword itself.

```js
const maxRetries = 3;
```

This is also perfectly valid.

---

# 9. Hungarian Notation

Older style:

```js
let strName = "Ravi";
let bActive = true;
let nCount = 5;
let arrItems = [];
```

The prefix tries to describe the data type.

Modern JavaScript usually does **not** require this.

Prefer:

```js
let name = "Ravi";
let isActive = true;
let count = 5;
let items = [];
```

The name should communicate meaning rather than type.

---

# 10. Identifier Examples

```js
var a = 10;
var $ = 10;
var _a = 23;
var pp = 34;
var ab123 = 23;
var _ = 10;

var Name = "Pramod";
var name = "Amit";

var pramod_dutta = "hello";
var pramod$dutta = "hello";
var pramodu1232 = "hello";
```

All of the above identifier forms are syntactically possible.

However, **valid does not mean good style**.

For production/QA automation code:

```js
let userName = "Pramod";
let testCaseName = "Login Test";
let retryCount = 3;
```

are much clearer than:

```js
let pp = "Pramod";
let tc = "Login Test";
let x = 3;
```

---

# 11. Unicode Identifiers

JavaScript supports many Unicode identifier characters:

```js
let café = "coffee";
let 变量 = "value";
```

Unicode escapes can also represent identifier characters:

```js
let \u0041 = "A";
```

This is valid syntax, but normal QA automation code should generally use clear English identifiers for team readability.

---

# 12. Comments

Comments are ignored by JavaScript execution.

## Single-line comment

```js
// This line is a comment
let age = 27;
```

## Multi-line comment

```js
/*
  Author: Giridhar
  Topic: JavaScript Basics
*/
```

## Documentation-style comment

```js
/**
 * Logs in the user.
 * @param {string} username
 */
function login(username) {
    // implementation
}
```

Important:

> Comments are not executed as JavaScript statements.

VS Code shortcut:

```text
Windows/Linux: Ctrl + /
Mac: Cmd + /
```

---

# 13. Hot Code / Performance Example

A loop like this can execute a huge number of operations:

```js
for (let a = 0; a < 100000; a++) {
    console.log(a);
    badCodeFn();
}

function badCodeFn() {
    console.log("Hello");
}
```

This is useful for understanding execution, but repeated `console.log()` calls can make code slow/noisy.

For QA automation, avoid unnecessary logging inside very large loops.

---

# 14. QA / Playwright Example

```js
const baseURL = "https://example.com";
const username = "testuser";
const password = "password123";

async function login(page) {
    await page.goto(baseURL);

    await page.locator("#username").fill(username);
    await page.locator("#password").fill(password);

    await page.locator("#login").click();
}
```

Identify the parts:

```text
const       → keyword
async       → keyword
function    → keyword
await       → keyword

baseURL     → identifier
username    → identifier
password    → identifier
login       → identifier
page        → parameter/identifier
```

QA mindset:

> **Keywords tell you what JavaScript is doing.**
> **Identifiers tell you what the programmer named.**

---

# 15. Common QA Automation Identifiers

Good:

```js
const page;
const loginButton;
const usernameInput;
const passwordInput;
const expectedTitle;
const actualTitle;

function loginUser() {}
function verifyPageTitle() {}
function createTestData() {}
```

Bad/unclear:

```js
const x;
const abc;
const pp;
function test1() {}
```

A good identifier should answer:

> "What is this?"

---

# 16. Common Interview Questions

## Q1. What is an identifier?

**Answer:**

> An identifier is a name assigned by the programmer to program entities such as variables, functions, classes, and parameters.

---

## Q2. What is a keyword?

**Answer:**

> A keyword is a reserved word that has a predefined syntactic meaning in JavaScript and cannot normally be used as an identifier.

---

## Q3. Can an identifier start with a number?

No.

```js
let user1; // valid
// let 1user; // invalid
```

---

## Q4. Can `$` be used in an identifier?

Yes.

```js
let $price = 100;
```

---

## Q5. Can `_` be used in an identifier?

Yes.

```js
let _temp = 10;
```

---

## Q6. Is JavaScript case-sensitive?

Yes.

```js
let name = "A";
let Name = "B";
```

These are different identifiers.

---

## Q7. Is `Function` a keyword?

No. `Function` is a built-in global constructor, not a reserved keyword.

---

## Q8. Difference between `let`, `const`, and `var`?

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function | Block | Block |
| Reassignment | Yes | Yes | No |
| Redeclaration in same scope | Yes | No | No |
| Modern preferred choice | Usually no | Yes | Yes |

---

# 17. Interview Trap Questions

### Trap 1

```js
const x = 10;
x = 20;
```

❌ TypeError because `x` cannot be reassigned.

---

### Trap 2

```js
const arr = [];
arr.push(10);
```

✅ Valid.

`const` prevents reassignment of the variable binding; it does not make the array immutable.

---

### Trap 3

```js
let user = "A";

{
    let user = "B";
}

console.log(user);
```

Output:

```text
A
```

Because the inner `user` belongs to a different block scope.

---

### Trap 4

```js
var user = "A";

{
    var user = "B";
}

console.log(user);
```

Output:

```text
B
```

Because `var` is not block-scoped.

---

# 18. Rapid Revision Card

Before an interview, remember this:

```text
KEYWORD
↓
JavaScript gave the word
↓
let, const, var, if, return, function...

IDENTIFIER
↓
Programmer gives the name
↓
userName, loginUser, price, page...

IDENTIFIER RULES
↓
✓ letters
✓ digits after first character
✓ _
✓ $
✗ cannot start with number
✗ cannot contain spaces
✗ cannot contain normal punctuation such as @, #, !
✗ cannot normally be a reserved keyword

NAMING
↓
camelCase → variables/functions
PascalCase → classes
snake_case → valid, less common in JS
SCREAMING_SNAKE_CASE → common for fixed constants

MODERN JS
↓
const → default when no reassignment
let   → reassignment needed
var   → generally avoid
```

---

# 19. Practice — Identify Everything

Try these without looking at the answer:

```js
const testName = "Login Test";

let retryCount = 3;

function executeTest(page) {
    if (retryCount > 0) {
        return page;
    }
}
```

### Answers

```text
Keywords:
const
let
function
if
return

Identifiers:
testName
retryCount
executeTest
page
```

---

# 20. Final Mental Model

Whenever you open a JavaScript/Playwright file, mentally classify code into:

```text
┌─────────────────────────────────────┐
│          JAVASCRIPT CODE             │
├─────────────────────────────────────┤
│ Keyword     → Language's words      │
│ Identifier  → Programmer's names    │
│ Value       → Actual data            │
│ Operator    → Performs an operation │
│ Comment     → Human-readable notes  │
└─────────────────────────────────────┘
```

### One sentence to remember forever:

> **"Keywords belong to JavaScript; identifiers belong to the programmer."**

---

# 21. Suggested GitHub Structure

For your **JSTS-AIwithPlaywright** repository, I recommend keeping this as:

```text
01_chapter_JS_Basics/
│
├── 01_Keywords_And_Identifiers/
│   ├── README.md
│   ├── 01_Identifiers.js
│   ├── 02_Variables_Let_Const_Var.js
│   ├── 03_Scope_And_Hoisting.js
│   ├── 04_Naming_Conventions.js
│   ├── 05_Comments.js
│   └── 06_Interview_Practice.js
```

This separates **notes**, **executable examples**, and **interview revision** instead of keeping everything in one large file.

