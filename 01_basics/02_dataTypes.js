"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

// number => Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER (2 to power 53-1 and -2 to power 53-1)
console.log(Number.MAX_SAFE_INTEGER)
// bigint => 2 to power 53 -1 above and -2 to power 53 -1 below
let bigInt = 1234567890123456789012345678901234567890n
console.log(bigInt)
// string => "" or ''
let str = "Karan"
console.log(str)
// boolean => true/false 
let bool = true
console.log(bool)
// null => standalone value 
let nullValue = null
console.log(nullValue)
// undefined =>  undefined value
let undefinedValue = undefined
console.log(undefinedValue)
// symbol => unique identifier
let id = Symbol("id")
console.log(id)

console.log(typeof undefined); // undefined 
console.log(typeof null); // object
