# JavaScript ke Important Points with Code Examples

JavaScript is an essential language for web development, offering features for both client-side and server-side programming. Below are key points with examples to help you understand JavaScript better:

## 1. Variables and Constants

Use `let`, `const`, and `var` to declare variables.

```javascript
let name = "Karan"; // Block-scoped, can be reassigned
const age = 25;     // Block-scoped, cannot be reassigned
var city = "Delhi"; // Function-scoped (avoid using var if possible)
```

## 2. Data Types

JavaScript has dynamic typing:

- Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt.
- Non-Primitive: Object, Array, Function.

Example:

```javascript
let num = 10;               // Number
let str = "Hello";          // String
let isTrue = true;          // Boolean
let obj = { key: "value" }; // Object
let arr = [1, 2, 3];        // Array
```

## 3. Functions

### Function Declaration:

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Karan")); // Output: Hello, Karan!
```

### Arrow Function:

```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
```

## 4. Loops

### For Loop:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### While Loop:

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### For...of (for iterables):

```javascript
let arr = [10, 20, 30];
for (let num of arr) {
    console.log(num);
}
```

### For...in (for objects):

```javascript
let obj = { name: "Karan", age: 25 };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
```

## 5. Arrays

### Basic Operations:

```javascript
let arr = [1, 2, 3, 4];
arr.push(5);   // Add at the end
arr.pop();     // Remove last element
arr.shift();   // Remove first element
arr.unshift(0); // Add at the start
console.log(arr); // Output: [0, 2, 3, 4]
```

### Higher-Order Methods:

```javascript
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]
```

## 6. Objects

### Create and Access:

```javascript
let user = { name: "Karan", age: 25 };
console.log(user.name); // Access property
user.city = "Delhi";    // Add property
delete user.age;        // Delete property
console.log(user);
```

## 7. DOM Manipulation

### Access and Modify Elements:

```javascript
let para = document.querySelector("#myPara");
para.textContent = "Text Updated!";
para.style.color = "blue";
```

## 8. Events

### Adding Event Listeners:

```javascript
let button = document.querySelector("#btn");
button.addEventListener("click", () => {
    alert("Button Clicked!");
});
```

## 9. Promises and Async/Await

### Promise:

```javascript
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
});
promise.then(result => console.log(result)); // Output: Done!
```

### Async/Await:

```javascript
async function fetchData() {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
}
fetchData();
```

## 10. Error Handling

### Try-Catch:

```javascript
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error("Error occurred:", error.message);
}
```

## 11. Template Literals

Use backticks (``) for multi-line strings and variable interpolation:

```javascript
let name = "Karan";
console.log(`Hello, ${name}! Welcome.`);
```

## 12. ES6+ Features

### Destructuring:

```javascript
let user = { name: "Karan", age: 25 };
let { name, age } = user;
console.log(name, age);
```

### Spread Operator:

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]
```

### Default Parameters:

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
```

## 13. Local Storage

### Set and Get Data:

```javascript
localStorage.setItem("key", "value");
let value = localStorage.getItem("key");
console.log(value);
```

## 14. Callback Functions

### Functions passed as arguments:

```javascript
function process(num, callback) {
    let result = num * 2;
    callback(result);
}
process(5, (res) => console.log(res)); // Output: 10
```

## 15. Fetch API

### Fetching Data:

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## 16. Classes

### Creating and Using Classes:

```javascript
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
let user = new User("Karan", 25);
user.greet(); // Output: Hello, Karan
```

## Example: A Complete Application

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript App</title>
</head>
<body>
    <p id="text">Hello, World!</p>
    <button id="btn">Change Text</button>
    <script>
        let button = document.querySelector("#btn");
        button.addEventListener("click", () => {
            let para = document.querySelector("#text");
            para.textContent = "Text Changed!";
            para.style.color = "red";
        });
    </script>
</body>
</html>
```