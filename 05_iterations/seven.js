const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 ) // .map() Returns a New Array, Callback Function is Required, Length of the New Array Matches Original, Does Not Mutate the Original Array, Chainable
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

/*
.map() is used to transform elements in an array. It applies a callback function to each element and returns a new array with the same length as the original, where each element is the transformed result.
.filter() is used to filter elements based on a condition. The callback function returns true for elements to be included in the new array and false for elements to be excluded. The length of the new array may vary depending on how many elements satisfy the condition.
*/