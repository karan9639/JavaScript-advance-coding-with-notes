// singleton object
// Object.create -> Object.prototype
// object literals -> object.create -> class

const mySym = Symbol("key1");
const JsUser = {
    name: "Karan", // property
    "full name": "Karan Singh", // property
    [mySym]: "mykey1", // computed property
    age: 18, // property
    location: "Jaipur", // property
    email: "Karan@google.com", // property
    isLoggedIn: false, // boolean
    lastLoginDays: ["Monday", "Saturday"] // array
} // object literal 

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) 

JsUser.email = "Karan@chatgpt.com"
// Object.freeze(JsUser) // freeze the object and make it immutable 
JsUser.email = "Karan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
} // method and function both are same
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
} // method and function both are same 

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());