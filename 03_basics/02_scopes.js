//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Karan"

    function two(){
        const website = "youtube"
        console.log(username);
    } 
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Karan"
    if (username === "Karan") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//hoisting(we can call before the declaration) is work in function declaration and var declaration and it is not work in function expression, arrow function, let, const  
console.log(addone(5)) // hoisting work in function declaration 
function addone(num){
    return num + 1
}



// addTwo(5) // hoisting not work in function expression because it is not a function declaration 
const addTwo = function(num){
    return num + 2
}
