# DOM Basics

**Definition:** The DOM is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of objects.

**Purpose:** It allows developers to access, manipulate, and update the structure, style, and content of a webpage dynamically.

## 2. Accessing Elements

You can access DOM elements using JavaScript in various ways:

**By ID:**
```javascript
const element = document.getElementById("myId");
```

**By Class Name:**
```javascript
const elements = document.getElementsByClassName("myClass");
```

**By Tag Name:**
```javascript
const elements = document.getElementsByTagName("div");
```

**Using querySelector:**
```javascript
const element = document.querySelector(".myClass"); // Selects the first match
```

**Using querySelectorAll:**
```javascript
const elements = document.querySelectorAll(".myClass"); // Selects all matches
```

## 3. Modifying Elements

**Changing Content:**
```javascript
element.innerHTML = "New Content";
// or
element.textContent = "New Content";
```

**Changing Attributes:**
```javascript
element.setAttribute("src", "image.jpg");
```

**Changing Styles:**
```javascript
element.style.color = "red";
element.style.fontSize = "20px";
```

## 4. Creating and Removing Elements

**Creating Elements:**
```javascript
const newElement = document.createElement("div");
newElement.textContent = "Hello, DOM!";
document.body.appendChild(newElement);
```

**Removing Elements:**
```javascript
const element = document.getElementById("myId");
element.remove();
```

## 5. Event Handling

**Adding Event Listeners:**
```javascript
element.addEventListener("click", () => {
  alert("Element clicked!");
});
```

**Inline Event Handling (not recommended):**
```html
<button onclick="alert('Clicked!')">Click Me</button>
```

## 6. Traversing the DOM

**Parent Node:**
```javascript
const parent = element.parentNode;
```

**Child Nodes:**
```javascript
const children = element.childNodes;
```

**First/Last Child:**
```javascript
const firstChild = element.firstChild;
const lastChild = element.lastChild;
```

**Sibling Nodes:**
```javascript
const nextSibling = element.nextSibling;
const prevSibling = element.previousSibling;
```

## 7. Dynamic Classes

**Add a Class:**
```javascript
element.classList.add("newClass");
```

**Remove a Class:**
```javascript
element.classList.remove("oldClass");
```

**Toggle a Class:**
```javascript
element.classList.toggle("toggleClass");
```

## 8. Performance Tips

**Use documentFragment for inserting multiple elements:**
```javascript
const fragment = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
  const newDiv = document.createElement("div");
  newDiv.textContent = `Item ${i}`;
  fragment.appendChild(newDiv);
}
document.body.appendChild(fragment);
```

**Minimize DOM Manipulations:** Batch updates together for better performance.

## 9. Important Methods

**append vs appendChild:**
- `append` can append multiple or text nodes.
- `appendChild` is strictly for appending a single node.

**cloneNode:**
```javascript
const clonedElement = element.cloneNode(true); // true = deep clone
```

## 10. Debugging DOM

Use browser developer tools to inspect and modify the DOM dynamically.

**Example Code:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
  <style>
    .highlight { color: red; }
  </style>
</head>
<body>
  <div id="container">
    <p id="para">Hello, World!</p>
    <button id="changeButton">Change Text</button>
  </div>
  <script>
    // Access elements
    const para = document.getElementById("para");
    const button = document.getElementById("changeButton");

    // Add event listener
    button.addEventListener("click", () => {
      para.textContent = "Text changed!";
      para.classList.toggle("highlight");
    });
  </script>
</body>
</html>
```