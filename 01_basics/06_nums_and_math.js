const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // toLocaleString() method converts a number into a string, using a local language format

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // Math object
// console.log(Math.abs(-4)); // absolute value
console.log(Math.round(4.6)); // round off
console.log(Math.ceil(4.2)); // round up
console.log(Math.floor(4.9)); // round down
// console.log(Math.min(4, 3, 6, 8)); // minimum value
// console.log(Math.max(4, 3, 6, 8)); // maximum value

console.log(Math.random()); // random number between 0 and 1
console.log((Math.random()*10) + 1); // random number between 1 and 10
console.log(Math.floor(Math.random()*10) + 1); // random number between 1 and 10

const min = 10 
const max = 20 
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // random number between 10 and 20