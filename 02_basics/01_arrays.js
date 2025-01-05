// array

const myArr = [0, 1, 2, 3, 4, 5] 
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // new Array() constructor is used to create an array
// console.log(myArr[1]); 

// Array methods

// myArr.push(6) // add element at the end
// myArr.push(7) // add element at the end
// myArr.pop() // remove element from the end

// myArr.unshift(9) // add element at the start
// myArr.shift() // remove element from the start

// console.log(myArr.includes(9)); // check if element is present in the array
// console.log(myArr.indexOf(3)); // get the index of the element

// const newArr = myArr.join() // join the array elements

// console.log(myArr); 
// console.log( newArr);


// slice, splice

console.log("A ", myArr); 
const myn1 = myArr.slice(1, 3) // slice(start, end) - end is exclusive
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // splice(start, count) - count is inclusive
console.log("C ", myArr);
console.log(myn2);

let mystr = "hello world from javascript" 
mystr = mystr.split(" ") // split the string into array
console.log(mystr);