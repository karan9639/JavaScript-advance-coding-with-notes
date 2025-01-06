# JavaScript and Classes

## OOP (Object-Oriented Programming)

OOP is a programming paradigm centered around objects that encapsulate data (properties) and behavior (methods). It allows developers to structure and organize code in a more reusable, scalable, and manageable way.

### Object

An object is a collection of properties (key-value pairs) and methods (functions associated with the object).

**Example:**

```javascript
const person = {
    name: "Karan",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

person.greet(); // Output: Hello, my name is Karan.
```

### toLowerCase is a built-in method for strings:

```javascript
let str = "HELLO";
console.log(str.toLowerCase()); // Output: hello
```

## Why Use OOP?

- **Code Reusability:** Promotes reuse of existing code through inheritance and polymorphism.
- **Scalability:** Simplifies managing large codebases.
- **Modularity:** Encapsulation groups related properties and methods together.
- **Maintainability:** Clearer code structure makes debugging and updating easier.

## Parts of OOP

### Object Literal

Directly creates an object using curly braces.

```javascript
const car = {
    brand: "Toyota",
    start() {
        console.log(`${this.brand} car started.`);
    }
};
car.start(); // Output: Toyota car started.
```

### Constructor Function

Used to create multiple objects with similar structures.

```javascript
function Car(brand) {
    this.brand = brand;
    this.start = function () {
        console.log(`${this.brand} car started.`);
    };
}

const car1 = new Car("Toyota");
car1.start(); // Output: Toyota car started.
```

### Prototypes

Add shared methods to objects for memory efficiency.

```javascript
function Car(brand) {
    this.brand = brand;
}

Car.prototype.start = function () {
    console.log(`${this.brand} car started.`);
};

const car2 = new Car("Honda");
car2.start(); // Output: Honda car started.
```

### Classes

A cleaner syntax for defining objects and managing inheritance.

```javascript
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} car started.`);
    }
}

const car3 = new Car("Ford");
car3.start(); // Output: Ford car started.
```

### Instances (new and this)

Objects created from a class or constructor function.

- **new:** Creates an instance.
- **this:** Refers to the current object instance.

```javascript
const car4 = new Car("Tesla");
console.log(car4 instanceof Car); // true
```

## 4 Pillars of OOP

### Abstraction

Hides unnecessary details and shows only essential features.

```javascript
class Phone {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    call() {
        console.log("Making a call...");
    }
}

const phone = new Phone("Apple", "iPhone 13");
phone.call(); // Making a call...
```

### Encapsulation

Bundles data and methods together and restricts access to some parts of the object.

```javascript
class BankAccount {
    #balance; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
```

### Inheritance

Allows a class to inherit properties and methods from another class.

```javascript
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    start() {
        console.log(`${this.type} is starting.`);
    }
}

class Bike extends Vehicle {
    constructor(brand) {
        super("Bike");
        this.brand = brand;
    }

    displayBrand() {
        console.log(`This is a ${this.brand}.`);
    }
}

const myBike = new Bike("Yamaha");
myBike.start(); // Output: Bike is starting.
myBike.displayBrand(); // Output: This is a Yamaha.
```

### Polymorphism

Allows the same method to behave differently depending on the object.

```javascript
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());
// Output:
// Animal speaks
// Dog barks
// Cat meows
```