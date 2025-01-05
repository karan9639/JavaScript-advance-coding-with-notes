// const tinderUser = new Object() // object constructor syntax 
const tinderUser = {} // object literal syntax 

// {} and new Object() are same creating object in javascript 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Karan",
            lastname: "Singh"
        }
    }
} // nested object

// console.log(regularUser.fullname.userfullname.firstname); // . is used to access object properties 

const obj1 = {1: "a", 2: "b"} // key value pair
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // this will not work
// const obj3 = Object.assign({}, obj1, obj2, obj4) // this will work and merge all objects (Object.assign is used to merge objects)

const obj3 = {...obj1, ...obj2} // this will work and merge all objects (spread(...) operator is used to merge objects)
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
] // array of objects

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // keys of object
// console.log(Object.values(tinderUser)); // values of object
// console.log(Object.entries(tinderUser)); // entries of object (key value pair)

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Karan"
} // object literal

// course.courseInstructor

const {courseInstructor: instructor} = course // destructuring object

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Karan",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {} 
] 

