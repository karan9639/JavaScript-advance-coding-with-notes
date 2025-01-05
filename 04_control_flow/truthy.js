const userEmail = []

if (userEmail) { // userEmail => [] => true because it is an empty array so it is truthy
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) { // userEmail.length => 0 => 0 === 0 => true
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // Object.keys(emptyObj) => [] => 0 === 0 => true 
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20 // 10



console.log(val1); 

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")