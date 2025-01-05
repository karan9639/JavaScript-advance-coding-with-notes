const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"] // Array of strings

for (const key in programming) {
    //console.log(programming[key]);
}

// `new` is used to create an instance of a class or object. `new Map()` specifically creates a new independent empty Map object, not a copy of another object.
//const map = new Map(); 
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) { // Error: map is not iterable because it is an object not an array or string
//     console.log(key);
// }