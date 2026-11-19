// JavaScript Keywords & Identifiers
// QA / Playwright Practice File

// ============================================================
// 1. KEYWORD vs IDENTIFIER
// ============================================================

let userName = "Giridhar";
// ^^^ keyword
//     ^^^^^^^^ identifier

const browserName = "Chrome";
//    ^^^^^^^^^^^ identifier

function loginUser(page) {
    // function = keyword
    // loginUser = identifier
    // page = parameter + identifier

    return page;
    // return = keyword
}


// ============================================================
// 2. let
// ============================================================

let age = 27;
age = 28;

console.log(age);


// ============================================================
// 3. const
// ============================================================

const baseURL = "https://example.com";

// baseURL = "https://google.com"; // TypeError


// const object/array can still be mutated
const users = [];
users.push("Ravi");

console.log(users);


// ============================================================
// 4. var
// ============================================================

var oldStyle = 10;
oldStyle = 20;

console.log(oldStyle);


// ============================================================
// 5. SCOPE
// ============================================================

if (true) {
    let blockLet = "inside";
    const blockConst = "inside";

    console.log(blockLet);
    console.log(blockConst);
}

// console.log(blockLet);   // ReferenceError
// console.log(blockConst); // ReferenceError

if (true) {
    var functionScoped = "visible outside the block";
}

console.log(functionScoped);


// ============================================================
// 6. IDENTIFIER RULES
// ============================================================

let validName = "valid";
let user1 = "valid";
let _temp = "valid";
let $price = 100;
let a1_b2 = "valid";

// Invalid examples:
// let 1user = "invalid";
// let my-name = "invalid";
// let my name = "invalid";
// let my@name = "invalid";


// ============================================================
// 7. CASE SENSITIVITY
// ============================================================

let Name = "Pramod";
// let  name = "Amit"; This is valid because JS is Case senstive

console.log(Name);
console.log(name);


// ============================================================
// 8. NAMING CONVENTIONS
// ============================================================

// camelCase
let userName2 = "Ravi";
let totalPrice = 99.99;
let isLoggedIn = true;

function verifyLogin() {
    return true;
}

// PascalCase
class UserProfile {
}

// snake_case - valid but less common in normal JS
let user_name = "Ravi";

// SCREAMING_SNAKE_CASE
const MAX_RETRIES = 3;
const BASE_URL = "https://example.com";


// ============================================================
// 9. HUNGARIAN NOTATION
// ============================================================

// Older style:
let strName = "Ravi";
let bActive = true;
let nCount = 5;
let arrItems = [];

// Modern style:
let name = "Ravi";
let isActive = true;
let count = 5;
let items = [];


// ============================================================
// 10. UNICODE IDENTIFIERS
// ============================================================

let café = "coffee";
let 变量 = "value";


// ============================================================
// 11. COMMENTS
// ============================================================

// Single-line comment

/*
Multi-line comment
*/

console.log("Comments are ignored by JavaScript execution");


// ============================================================
// 12. HOISTING
// ============================================================

console.log(hoistedVar); // undefined
var hoistedVar = 10;

// let/const:
// console.log(hoistedLet); // ReferenceError
// let hoistedLet = 20;


// ============================================================
// 13. QA / PLAYWRIGHT STYLE EXAMPLE
// ============================================================

const loginURL = "https://example.com/login";
const testUsername = "testuser";
const testPassword = "Password123";

async function login(page) {
    await page.goto(loginURL);
    await page.locator("#username").fill(testUsername);
    await page.locator("#password").fill(testPassword);
    await page.locator("#login").click();
}


// ============================================================
// 14. PRACTICE
// ============================================================

const testName = "Login Test";
let retryCount = 3;

function executeTest(page) {
    if (retryCount > 0) {
        return page;
    }
}

// Identify:
// Keywords  -> const, let, function, if, return
// Identifiers -> testName, retryCount, executeTest, page
