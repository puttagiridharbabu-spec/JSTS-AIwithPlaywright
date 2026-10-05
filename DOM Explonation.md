# DOM (Document Object Model) — QA & Playwright Notes

## 1. What Is the DOM?
**DOM = Document Object Model**

In simple words:

> The DOM is the browser's representation of an HTML page as a tree of objects/elements that JavaScript and automation tools can interact with.

For example:

```html
<html>
  <body>
    <h1>Amazon</h1>
    <input id="search" placeholder="Search products">
    <button id="searchBtn">Search</button>
  </body>
</html>
```

The browser converts this HTML into something like:

```text
Document
└── html
    └── body
        ├── h1
        │   └── "Amazon"
        ├── input
        └── button
            └── "Search"
```

That tree is the **DOM**.

---

## 2. Real-World Example
Think about a restaurant:

```text
Restaurant
├── Entrance
├── Menu
│   ├── Starters
│   ├── Main Course
│   └── Desserts
└── Billing
    ├── Amount
    └── Pay Button
```

A website works similarly:

```text
Web Page
├── Header
├── Navigation
├── Main Content
│   ├── Form
│   ├── Input
│   └── Button
└── Footer
```

The DOM represents this hierarchy.

---

## 3. HTML vs. DOM
This is very important.

### HTML
HTML is the markup/source used to define the structure of a web page:

```html
<button id="login">Login</button>
```

### DOM
The browser reads the HTML and creates a live object representation of the page. JavaScript can access it:

```js
document.getElementById("login");
```

The flow is:

```text
HTML
  ↓
Browser parses HTML
  ↓
DOM is created
  ↓
JavaScript / Playwright interacts with the page
```

### Remember
- **HTML = markup/source**
- **DOM = browser's live representation of that document**

---

## 4. Why Does a QA Tester Need to Understand the DOM?
This is especially important for **Playwright**.

Suppose we have:

```html
<input id="username">
```

Playwright can locate it:

```js
page.locator("#username")
```

And interact with it:

```js
await page.locator("#username").fill("Giridhar");
```

Another example:

```html
<button id="loginBtn">Login</button>
```

Playwright:

```js
await page.getByRole("button", { name: "Login" }).click();
```

> **The DOM is the structure that UI automation needs to understand to locate and interact with web elements.**

---

## 5. DOM Elements
Every HTML element becomes a DOM element/node.

Example:

```html
<input id="email" type="email" placeholder="Email">
```

Here:

```text
<input>                → Tag
id="email"             → Attribute
 type="email"          → Attribute
placeholder="Email"    → Attribute
```

Another example:

```html
<button class="login-button" id="login">
  Login
</button>
```

Here:

```text
button          → Tag
class           → Attribute
login-button    → Attribute value
id              → Attribute
login           → Attribute value
Login           → Text
```

These attributes are often used to identify elements.

---

## 6. DOM Tree
Suppose we have:

```html
<div class="login-form">
  <label>Email</label>
  <input id="email">

  <label>Password</label>
  <input id="password">

  <button>Login</button>
</div>
```

The DOM structure looks like:

```text
login-form
├── label
├── input
├── label
├── input
└── button
```

---

## 7. Parent, Child, and Sibling

### Parent
`login-form` is the parent.

### Children
The `label`, `input`, `label`, `input`, and `button` elements are children of `login-form`.

### Siblings
Elements that have the same parent are siblings. For example, the Email label and email input are siblings because both are children of `login-form`.

Understanding these relationships becomes useful when creating locators.

---

## 8. DOM vs. Browser UI
What you see:

```text
--------------------------------
| Welcome Back                 |
|                              |
| Email                        |
| [________________________]   |
|                              |
| Password                     |
| [________________________]   |
|                              |
|       [ Login ]              |
--------------------------------
```

Internally, the browser has a structure more like:

```text
Document
└── html
    └── body
        └── div.login-form
            ├── h1
            ├── label
            ├── input
            ├── label
            ├── input
            └── button
```

> **The user sees the UI. The browser maintains the DOM representation.** Automation tools interact with the browser and its page structure to locate and operate on elements.

---

## 9. JavaScript and the DOM
JavaScript can access and modify the DOM.

HTML:

```html
<h1 id="title">Welcome</h1>
```

JavaScript:

```js
document.getElementById("title");
```

It can also change the text:

```js
document.getElementById("title").textContent = "Hello Giridhar";
```

The page can change from `Welcome` to `Hello Giridhar`. This demonstrates that the DOM can change dynamically.

---

## 10. Dynamic DOM
Modern websites frequently change the DOM after the page loads.

Example:

```html
<button id="loadUsers">Load Users</button>
<div id="users"></div>
```

Initially:

```text
button
└── Load Users

users
└── empty
```

After a user clicks **Load Users**, JavaScript may call an API. Suppose the API returns:

```json
[
  { "name": "Rahul" },
  { "name": "Priya" }
]
```

JavaScript then updates the DOM:

```text
users
├── Rahul
└── Priya
```

So elements can appear or change after the initial page load.

---

## 11. DOM + API Testing Connection
This is especially useful for a QA engineer who works with both UI and API testing.

A typical flow:

```text
Frontend
   ↓
API
   ↓
Backend / Database
   ↓
API Response
   ↓
JavaScript
   ↓
DOM Update
   ↓
UI
```

Example API response:

```json
{
  "name": "Rahul",
  "status": "Active"
}
```

The frontend may display:

```text
Customer
Rahul

Status
Active
```

Playwright can validate:

```js
await expect(page.getByText("Rahul")).toBeVisible();
await expect(page.getByText("Active")).toBeVisible();
```

Mental model:

```text
API response
      ↓
JavaScript
      ↓
DOM update
      ↓
UI
      ↓
Playwright validation
```

---

## 12. DOM Inspector
In Chrome, right-click a page and select **Inspect**. You can see the page's DOM.

For example:

```html
<button id="loginBtn" class="btn primary">
  Login
</button>
```

You can use this information to understand the element and identify a suitable locator:

```js
page.locator("#loginBtn")
```

Or, when appropriate:

```js
page.getByRole("button", { name: "Login" })
```

Don't blindly use a long CSS or XPath selector generated by DevTools. Prefer stable and meaningful locators.

---

## 13. What Is an Event?
An **event is something that happens on a web page**.

Examples:

- A user clicks a button.
- A user types into a textbox.
- A user selects an option.
- A user submits a form.
- A user presses a keyboard key.
- The mouse moves over an element.
- A page loads.
- A user scrolls.

Think about a doorbell:

```text
Person presses doorbell
        ↓
      EVENT
        ↓
System detects it
        ↓
Action happens
```

Web example:

```text
User clicks Login
        ↓
    click EVENT
        ↓
JavaScript detects it
        ↓
Login function executes
        ↓
API request happens
        ↓
UI changes
```

---

## 14. Common DOM Events

| Event | Meaning | Example |
|---|---|---|
| `click` | Element clicked | Click Login |
| `dblclick` | Double-click an element | Double-click an item |
| `input` | Input value changes while typing | Search suggestions |
| `change` | Value changes | Select a country |
| `focus` | Element receives focus | Click a textbox |
| `blur` | Element loses focus | Leave a textbox |
| `keydown` | Keyboard key pressed | Press Enter |
| `keyup` | Keyboard key released | Release a key |
| `submit` | Form submitted | Submit a login form |
| `mouseover` | Mouse moves over an element | Hover over a menu |
| `mouseout` | Mouse leaves an element | Leave a menu |
| `load` | Resource/page loaded | Page finishes loading |
| `scroll` | Page is scrolled | Scroll down |

For now, focus mainly on:

```text
click
input
change
focus
blur
keydown
submit
```

---

## 15. Event Listener
An **event listener waits for a particular event to happen**.

Example:

```js
const button = document.getElementById("loginBtn");

button.addEventListener("click", function() {
  console.log("Login button clicked");
});
```

Here:

```text
addEventListener()
       │
       ├── Event → click
       │
       └── Function → execute when event occurs
```

In simple English:

> "Browser, keep watching this button. If somebody clicks it, execute this function."

---

## 16. Event Handler
An **event handler is the function/code that handles the event when it occurs**.

Example:

```js
function handleClick() {
  console.log("Button clicked");
}

button.addEventListener("click", handleClick);
```

Here:

```text
click
  ↓
Event
  ↓
addEventListener()
  ↓
Event Listener
  ↓
handleClick()
  ↓
Event Handler
```

---

## 17. Event vs. Event Listener vs. Event Handler
This is important for interviews.

```js
button.addEventListener("click", handleClick);

function handleClick() {
  console.log("Login clicked");
}
```

### Event
`click` — something happened.

### Event Listener
`addEventListener()` — it listens/waits for the event.

### Event Handler
`handleClick()` — the function that handles the event.

Remember:

```text
EVENT
↓
Something happened

EVENT LISTENER
↓
Watches for the event

EVENT HANDLER
↓
Handles the event
```

---

## 18. Real-World Login Example
HTML:

```html
<button id="loginBtn">Login</button>
```

JavaScript:

```js
const button = document.getElementById("loginBtn");

button.addEventListener("click", handleLogin);

function handleLogin() {
  console.log("Login started");
}
```

Flow:

```text
User
 ↓
Clicks Login
 ↓
click EVENT
 ↓
Event Listener detects it
 ↓
handleLogin() executes
 ↓
Application performs login logic
```

---

## 19. Click Event
HTML:

```html
<button id="pay">Pay Now</button>
```

JavaScript:

```js
const payButton = document.getElementById("pay");

payButton.addEventListener("click", function() {
  console.log("Payment initiated");
});
```

Flow:

```text
User clicks Pay Now
        ↓
    click event
        ↓
Event listener
        ↓
Handler executes
        ↓
Payment logic
        ↓
API request
        ↓
Payment result
```

### QA Perspective
You might test:

```text
Click Pay Now
      ↓
API request sent?
      ↓
Payment processed?
      ↓
Success message displayed?
      ↓
Transaction status updated?
```

---

## 20. Input Event
HTML:

```html
<input id="username">
```

When the user types, the browser can generate `input` events as the value changes:

```text
G
Gi
Gir
Giri
Giri...
```

Example:

```js
username.addEventListener("input", function() {
  console.log("User entered something");
});
```

Common use cases:

- Search suggestions
- Username validation
- Password strength
- Real-time validation
- Autocomplete

Example:

```text
User types "Ind"
       ↓
input event
       ↓
API request
       ↓
Suggestions
       ↓
India
Indonesia
Indianapolis
```

---

## 21. Change Event
Example:

```html
<select id="country">
  <option>India</option>
  <option>USA</option>
  <option>UK</option>
</select>
```

JavaScript:

```js
country.addEventListener("change", function() {
  console.log("Country changed");
});
```

Flow:

```text
India selected
      ↓
User selects USA
      ↓
change event
      ↓
Application reacts
      ↓
State/City dropdown may update
```

This is common in forms.

---

## 22. Focus and Blur Events
These are especially useful for form validation.

### Focus
When an element receives focus:

```text
User clicks Email textbox
        ↓
     focus event
```

### Blur
When an element loses focus:

```text
User clicks Email textbox
        ↓
Email receives focus
        ↓
User clicks Password
        ↓
Email loses focus
        ↓
blur event
```

Example:

```text
Email textbox
      ↓
Invalid email entered
      ↓
User clicks Password
      ↓
blur event
      ↓
Validation
      ↓
"Invalid email address"
```

### QA Test Case
> Verify that the email validation message is displayed when the email field loses focus with an invalid value.

---

## 23. Keyboard Events
Consider:

```html
<input id="search">
```

Keyboard interactions can generate events such as:

```text
keydown
   ↓
input
   ↓
keyup
```

If the user presses Enter:

```text
keydown → Enter
        ↓
Application detects Enter
        ↓
Search executes
```

In Playwright:

```js
await page.locator("#search").press("Enter");
```

---

## 24. Submit Event
Forms can generate a `submit` event.

Example:

```html
<form id="loginForm">
  <input id="email">
  <input id="password">
  <button type="submit">Login</button>
</form>
```

JavaScript:

```js
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Login form submitted");
});
```

Flow:

```text
User submits form
       ↓
submit event
       ↓
Event listener
       ↓
Handler
       ↓
Validation / API request
       ↓
Response
       ↓
DOM/UI update
```

---

## 25. Events + DOM + JavaScript
This is the key connection.

HTML:

```html
<button id="login">Login</button>
<p id="message"></p>
```

JavaScript:

```js
document.getElementById("login")
  .addEventListener("click", function() {
    document.getElementById("message").textContent = "Login successful";
  });
```

Before clicking:

```text
button
└── Login

message
└── empty
```

The user clicks, and JavaScript modifies the DOM:

```text
Login
 ↓
click event
 ↓
event listener
 ↓
handler executes
 ↓
JavaScript modifies DOM
```

After clicking:

```text
button
└── Login

message
└── Login successful
```

The key flow:

```text
DOM
 ↓
Event
 ↓
JavaScript
 ↓
DOM modification
 ↓
UI changes
```

---

## 26. Events + API + DOM
Modern applications often work like this:

```text
User Action
    ↓
DOM Event
    ↓
Event Listener
    ↓
JavaScript
    ↓
API Request
    ↓
Backend
    ↓
API Response
    ↓
JavaScript
    ↓
DOM Update
    ↓
UI Change
```

### Login Example

```text
User clicks Login
       ↓
click event
       ↓
event listener
       ↓
login handler
       ↓
POST /login
       ↓
Backend validates credentials
       ↓
Response received
       ↓
JavaScript processes response
       ↓
DOM changes
       ↓
Dashboard / error message displayed
```

This is an important QA mental model.

---

## 27. Events and Playwright
When you write:

```js
await page.getByRole("button", { name: "Login" }).click();
```

you are simulating a user interaction.

When you write:

```js
await page.getByLabel("Email").fill("test@gmail.com");
```

you are simulating entering data into a form control.

When you write:

```js
await page.getByLabel("Search").press("Enter");
```

you are simulating a keyboard interaction.

Then Playwright can verify the result:

```js
await expect(page.getByText("Login successful")).toBeVisible();
```

Conceptually:

```text
Playwright
    ↓
User-like interaction
    ↓
Browser
    ↓
DOM event / application behavior
    ↓
JavaScript
    ↓
API / application logic
    ↓
DOM update
    ↓
UI
    ↓
Playwright assertion
```

---

## 28. Event Bubbling
This is a more advanced DOM concept.

Consider:

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

When the button is clicked, the event can propagate upward through its ancestors.

Conceptually:

```text
Button
  ↓
Parent
  ↓
Body
  ↓
HTML
  ↓
Document
```

This is called **event bubbling**.

---

## 29. Event Delegation
Event delegation uses event propagation to handle events for multiple child elements from a parent element.

Example:

```html
<div id="menu">
  <button>Home</button>
  <button>Products</button>
  <button>Contact</button>
</div>
```

Instead of attaching separate handlers to every button, JavaScript can listen on the parent and determine which child triggered the event.

Conceptually:

```text
Menu container
      │
      ├── Home
      ├── Products
      └── Contact
      │
      ▼
One event listener on parent
```

This is common in modern web applications.

---

## 30. DOM + Locator Connection
This is especially important for Playwright.

DOM:

```html
<input id="email">
```

Locator:

```js
page.locator("#email")
```

Action:

```js
await page.locator("#email").fill("test@gmail.com");
```

Assertion:

```js
await expect(page.locator("#email")).toHaveValue("test@gmail.com");
```

Think:

```text
DOM
 ↓
Element exists
 ↓
Locator identifies element
 ↓
Playwright interacts
 ↓
Application responds
 ↓
DOM may change
 ↓
Assertion verifies result
```

---

## 31. DOM vs. Locator
Don't confuse these.

### DOM
The DOM represents the page and its elements.

### Locator
A locator tells Playwright how to identify an element.

Example:

```html
<button id="loginBtn">Login</button>
```

The DOM contains the button. The Playwright locator is:

```js
page.getByRole("button", { name: "Login" })
```

The locator tells Playwright:

> "Find the button that the user recognizes as Login."

---

## 32. QA Mental Model
Suppose the requirement is:

> "When the user selects a country, the state dropdown should be updated."

Don't think only about the UI. Think:

```text
Country dropdown
       ↓
change event
       ↓
Event listener
       ↓
JavaScript handler
       ↓
API / application logic
       ↓
Response
       ↓
DOM update
       ↓
State dropdown populated
       ↓
Playwright validates result
```

This is the level of understanding useful for a modern QA engineer.

---

## 33. Complete DOM + Events Flow
Remember this:

```text
                    WEB PAGE
                       │
                       ▼
                      HTML
                       │
                       ▼
                    BROWSER
                       │
                       ▼
                      DOM
                       │
             ┌─────────┴─────────┐
             │                   │
          Elements          Relationships
             │              Parent/Child
             │              Siblings
             │              Attributes
             ▼
          LOCATORS
             │
             ▼
        USER ACTION
             │
      ┌──────┼───────┐
      │      │       │
    Click   Input   Submit
      │      │       │
      └──────┼───────┘
             ▼
           EVENT
             │
             ▼
      EVENT LISTENER
             │
             ▼
       EVENT HANDLER
             │
             ▼
         JAVASCRIPT
             │
       ┌─────┴─────┐
       │           │
    API Call    DOM Change
       │           │
       ▼           ▼
   Backend        UI
       │
       ▼
  API Response
       │
       ▼
    JavaScript
       │
       ▼
    DOM Update
       │
       ▼
    UI Changes
       │
       ▼
 Playwright Assertion
```

---

## 34. Interview Questions

### Q1. What is the DOM?

> DOM stands for Document Object Model. It is the browser's in-memory representation of an HTML document as a tree of objects/elements. JavaScript can access and modify the DOM, and browser automation tools such as Playwright can locate and interact with elements represented in the DOM.

### Q2. Is the DOM the same as HTML?

> No. HTML is the markup used to define the structure of a page, while the DOM is the browser's live object representation of that document. The DOM can be modified dynamically using JavaScript.

### Q3. What is a DOM event?

> A DOM event represents something that happens on a web page, such as a click, keyboard input, form submission, or change to an input.

### Q4. What is an event listener?

> An event listener is registered code that waits for a particular event and invokes the appropriate handler when that event occurs.

### Q5. What is an event handler?

> An event handler is the function or code that executes in response to an event.

### Q6. What is the difference between an event, event listener, and event handler?

```text
Event
→ Something happened.

Event Listener
→ Watches for that event.

Event Handler
→ Code/function that handles the event.
```

Example:

```js
button.addEventListener("click", handleClick);
```

```text
click              → Event
addEventListener   → Listener registration
handleClick        → Handler
```

### Q7. What is event bubbling?

> Event bubbling is the process where an event triggered on a child element propagates upward through its parent elements in the DOM hierarchy.

### Q8. Why should a Playwright tester understand the DOM?

> Understanding the DOM helps a tester understand how elements are structured, how locators identify elements, how dynamic UI changes occur, and how user actions can trigger JavaScript, API calls, and DOM updates.

---

## 35. Quick Revision Cheat Sheet

```text
DOM
→ Document Object Model
→ Browser's representation of HTML
→ Tree structure

Element
→ Individual HTML element

Attribute
→ Additional information about an element

Parent
→ Element containing another element

Child
→ Element inside another element

Sibling
→ Elements sharing the same parent

Event
→ Something that happens

Event Listener
→ Listens for an event

Event Handler
→ Function/code that handles an event

Event Bubbling
→ Event propagates from child toward ancestors

Event Delegation
→ Parent handles events from multiple children

JavaScript
→ Can read/change the DOM and respond to events

Playwright
→ Locates/interacts with elements and validates application behavior

Locator
→ Mechanism used by Playwright to identify elements

Assertion
→ Verifies expected application behavior/state
```

---

## 36. One-Line Mental Model

> **HTML creates the structure → Browser creates the DOM → User performs an action → Event occurs → Listener detects it → Handler/JavaScript executes → API/application logic may run → DOM changes → UI changes → Playwright validates the result.**

---

## 37. What to Study Next
After these DOM fundamentals, continue in this order:

```text
1. DOM
   ↓
2. Elements & Attributes
   ↓
3. Parent / Child / Sibling
   ↓
4. DOM Events
   ↓
5. Event Listener
   ↓
6. Event Handler
   ↓
7. Event Bubbling
   ↓
8. Event Delegation
   ↓
9. CSS Selectors
   ↓
10. XPath
   ↓
11. Shadow DOM
   ↓
12. iframe
   ↓
13. Dynamic DOM
   ↓
14. Playwright Locators
   ↓
15. Playwright Actions
   ↓
16. Playwright Assertions
```

---

## Final QA Perspective
Don't learn DOM only as JavaScript theory. For a QA engineer, connect everything:

```text
Requirement
     ↓
UI Element
     ↓
DOM
     ↓
User Action
     ↓
Event
     ↓
Event Listener
     ↓
Event Handler / JavaScript
     ↓
API / Backend
     ↓
Response
     ↓
DOM Update
     ↓
UI Result
     ↓
Playwright Assertion
```

Once this flow becomes clear, **locators, Playwright actions, waits, assertions, dynamic elements, API-to-UI testing, and debugging become much easier to understand.**
