# JavaScript Inheritance: Easy Revision Notes

> **Memory trick:** A child can use what its parent provides, and can add or change its own behavior.

## 1. What is inheritance?
Inheritance lets an object access properties and methods from another object. In JavaScript, this works through the **prototype chain**. `class` and `extends` provide easier syntax for working with it.

**Why use it?** Reuse common code and avoid repeating methods.

```js
class Animal {
  eat() { console.log('Eating'); }
}
class Dog extends Animal {
  bark() { console.log('Barking'); }
}
const dog = new Dog();
dog.eat();  // from Animal
dog.bark(); // from Dog
```

## 2. Five patterns to recognize

| Pattern | Picture | Remember |
|---|---|---|
| Single | A → B | One child extends one parent |
| Multilevel | A → B → C | Inheritance in a chain |
| Hierarchical | A → B and A → C | Siblings share one parent |
| Multiple | A + B → C | **Not supported directly** with `class extends` |
| Hybrid | Combination | Mix of the patterns above, not a special JS feature |

**Important:** These are ways to describe class relationships. **Prototypal inheritance** is the underlying JavaScript mechanism.

## 3. Keywords you must remember

- `class`: blueprint for objects.
- `extends`: makes one class inherit from another.
- `constructor`: sets up a new instance.
- `super()`: calls the parent constructor. In a derived constructor, call it before using `this`.
- `super.method()`: calls a parent method.
- `this`: refers to the current instance in a normal instance method.
- `new`: creates an instance.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() { console.log(`Hi, ${this.name}`); }
}

class Tester extends Person {
  constructor(name, tool) {
    super(name); // initialize parent part first
    this.tool = tool;
  }
  greet() {
    super.greet(); // reuse parent method
    console.log(`I test with ${this.tool}`);
  }
}

const qa = new Tester('Sam', 'Playwright');
qa.greet();
// Hi, Sam
// I test with Playwright
```

## 4. Method overriding
If a child defines a method with the same name as its parent's method, the child's version is used.

```js
class Parent { say() { console.log('Parent'); } }
class Child extends Parent { say() { console.log('Child'); } }
new Child().say(); // Child
```

**Memory trick:** Same method name, child behavior wins. Use `super.say()` if you also want the parent's behavior.

## 5. Prototypal inheritance: the JavaScript foundation

```js
const parent = { greet() { return 'Hello'; } };
const child = Object.create(parent);
console.log(child.greet()); // Hello
```

JavaScript checks `child` first. If `greet` is missing, it looks up the prototype chain. `class` inheritance also uses prototypes underneath.

## 6. What about multiple inheritance?

```js
const canLog = { log() { console.log('Logged'); } };
const canSave = { save() { console.log('Saved'); } };
const helper = Object.assign({}, canLog, canSave);
helper.log();
helper.save();
```

This **copies methods**; it is **not** multiple class inheritance. JavaScript classes can extend only one superclass directly. Mixins or composition can combine behavior.

## 7. Playwright Page Object Model example (TypeScript)

```ts
import { Page } from '@playwright/test';

class BasePage {
  constructor(protected page: Page) {}
  async open(url: string) {
    await this.page.goto(url);
  }
}

class LoginPage extends BasePage {
  async login(username: string, password: string) {
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}

// Example use inside a Playwright test:
// const loginPage = new LoginPage(page);
// await loginPage.open('https://www.saucedemo.com/');
// await loginPage.login('standard_user', 'secret_sauce');
```

**Why inheritance here?** `LoginPage` gets `open()` from `BasePage`. Other page classes can reuse it too. `protected` is a **TypeScript** access modifier, not a JavaScript keyword.

## 8. Common interview traps

1. **Is JavaScript class-based underneath?** No. It uses prototypes; `class` is syntax built on that model.
2. **Can a class extend two classes?** No, not directly.
3. **Is `Object.assign()` inheritance?** No. It copies properties.
4. **Does `super()` always have to be written?** Only when you define a constructor in a derived class; the default derived constructor handles it otherwise.
5. **Inheritance vs overriding?** Inheritance reuses parent behavior; overriding replaces a parent method's behavior in a child.
6. **Should every page object extend a base class?** No. Use inheritance when pages truly share behavior; otherwise simple helpers or composition may be clearer.

## 9. 30-second interview answer

> Inheritance allows a child class to reuse properties and methods of a parent class. In JavaScript, we use `extends` to inherit and `super` to access the parent constructor or methods. JavaScript uses prototypes internally. In Playwright, I can create a `BasePage` with common navigation methods and reuse them in page objects like `LoginPage`.

## 10. Quick self-test

1. A → B → C is which pattern? **Multilevel**.
2. A → B and A → C is which pattern? **Hierarchical**.
3. What keyword inherits from a class? **`extends`**.
4. What calls the parent constructor? **`super()`**.
5. What happens when child and parent have the same method? **Child overrides it**.
6. What is JavaScript's underlying inheritance mechanism? **Prototype chain**.
7. Can `class C extends A, B` work? **No**.

### One-line memory formula

**Inheritance = reuse (`extends`) + parent access (`super`) + child customization (overriding) + prototype chain underneath.**
