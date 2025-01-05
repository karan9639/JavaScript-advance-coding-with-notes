// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // (....code.....)() IIFE (Immediately Invoked Function Expression) it is a function which is called immediately after the declaration

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('karan'); // anonymous IIFE 

