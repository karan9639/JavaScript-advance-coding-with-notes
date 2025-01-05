const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // 2d array

// const allHeros = marvel_heros.concat(dc_heros) // old way
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // new way using spread operator (...) to merge arrays 

// spread operator(...) : it is use to inside the array , string, object, function, nested structure to spread the elements and diffrent properties 
// like Copying an Array, Merging Arrays, Adding Elements, Copying an Object, Merging Objects, Splitting a String, Passing Function Arguments,
// Shallow Copy Issue , Cloning Arrays or Objects, Concatenating Arrays, Using Math Functions, Using an Object as a Map, Using an Object as a Set

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // nested array

const real_another_array = another_array.flat(Infinity) // flat method used to flat the nested array to single array
console.log(real_another_array);



console.log(Array.isArray("Karan")) // isArray method used to check the array or not 
console.log(Array.from("Karan")) // convert string to array

console.log(Array.from({name: "Karan"})) // neither iterable nor array-like. So, it will return empty array

const obj = { name: "Karan" }; // object
const keyValuePairs = Object.entries(obj); // convert object to array
console.log(keyValuePairs); // Output: [ [ 'name', 'Karan' ] ]
console.log(Object.keys(obj)); // Output: ['name']
console.log(Object.values(obj)); // Output: ['Karan']

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // convert multiple variables to array