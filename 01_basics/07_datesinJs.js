// Dates

let myDate = new Date() // current date and time
console.log(myDate.toString()); //Day Mon DD YYYY HH:MM:SS GMT+TimeZoneOffset (TimeZoneName)
// console.log(myDate.toDateString()); //Day Mon DD YYYY
// console.log(myDate.toLocaleString()); //Day Mon DD YYYY HH:MM:SS
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23) // 23 Jan 2023 00:00:00
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 23 Jan 2023 5:03:00
// let myCreatedDate = new Date("2023-01-14") // 14 Jan 2023 00:00:00
let myCreatedDate = new Date("01-14-2023") // 14 Jan 2023 00:00:00
// console.log(myCreatedDate.toLocaleString()); // 14 Jan 2023 00:00:00
 
let myTimeStamp = Date.now() // timestamp se समय का पता लगाने के लिए इसे JavaScript के Date ऑब्जेक्ट में बदलना होगा।
console.log(myTimeStamp); // Hardcoded number of milliseconds  (Static, based on the time when the code is executed)
console.log(myCreatedDate.getTime()); // Calculated from Date object (Dynamic, based on the Date object)
// console.log(Math.floor(Date.now()/1000)); // timestamp in seconds 

let newDate = new Date() 
console.log(newDate);  
console.log(newDate.getMonth() + 1); 
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

