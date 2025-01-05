const accountId = 144553 //recommended
let accountEmail = "karan6x@gmail.com" //recommended
var accountPassword = "12345" //not recommended
accountCity = "Agra" //not recommended
let accountState;

//accountId = 2 // const variable can't be reassigned
accountEmail = "kvs@gmail.com"  // let variable can be reassigned
accountPassword = "21212121" // var variable can be reassigned
accountCity = "Bengaluru"  // variable without let, var, const can be reassigned

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) //console.table is used to display the data in the table format

//Prefer not to use var because of issue in block scope and functional scope
if (true) {
    var a = 42;
}
console.log(a); // 42 (accessible outside the block due to function scope)


//var :- function scope, not block scope, can be redeclared and reassigned, hoisted(can be used before declaration) 
function example() {
    console.log(x); // undefined (hoisting)
    var x = 10;
    console.log(x); // 10
}
example();

//let :- block scope, can't be redeclared, can be reassigned, not hoisted
if (true) {
    let b = 10;
    console.log(b); // 10
}
//console.log(b); // ReferenceError: b is not defined

//const :- block scope, can't be redeclared, can't be reassigned, not hoisted
const d = 30;
console.log(d); // 30
// d = 40; // TypeError: Assignment to constant variable
const obj = { key: 'value' };
obj.key = 'newValue'; // Allowed: Modifying object properties
console.log(obj); // { key: 'newValue' }


