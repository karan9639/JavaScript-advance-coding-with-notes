// switch (key) {
//     case value1:       
//         break;
//     case value2:
//         break;
//     case value3:
//         break;
//     default:
//         break;
// } // key is compared with value1, value2, value3 and so on. If key matches with any value then the code block inside that case will be executed
//  otherwise the code block inside default will be executed.

const month = "march"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}