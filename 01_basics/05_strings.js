const name = "Karan"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //${} is used to add the variables in the string

const gameName = new String('kvs-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__); //__proto__ is used to get the prototype of the string


// console.log(gameName.length); //length is used to get the length of the string
// console.log(gameName.toUpperCase()); //toUpperCase is used to convert the string to uppercase
console.log(gameName.charAt(2)); //charAt is used to get the character at the given index
console.log(gameName.indexOf('t')); //indexOf is used to get the index of the given character   

const newString = gameName.substring(0, 4) //substring is used to get the string from the start
console.log(newString);

const anotherString = gameName.slice(-8, 4) //slice is used to get the string from the end
console.log(anotherString);

const newStringOne = "   Karan    "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim is used to remove the white spaces from the string

const url = "https://github.com/karan9639"

console.log(url.replace('%20', '-')) //replace is used to replace the given string character with the given character

console.log(url.includes('sundar')) //includes is used to check if the given string is present in the string

console.log(gameName.split('-')); //split is used to split the string based on the given character