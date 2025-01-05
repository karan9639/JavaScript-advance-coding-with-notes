const user = {
    username: "Karan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // this is window object in browser and global object in nodejs it is used to self reference of object 

// function chai(){
//     let username = "Karan"
//     console.log(this.username);  
// }

// chai()

// const chai = function () {
//     let username = "Karan"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Karan"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Karan"})


console.log(addTwo(3, 4)) 


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() // it is a callback function (callback function is a function which is passed as a argument in another function)

(()=>"hello")() // (....code.....)() IIFE (Immediately Invoked Function Expression) it is a function which is called immediately after the declaration
