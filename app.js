// // traffic light
// let color = "red";
// if (color === "red" ){
//     console.log("stop");
// }
// else if (color === "yellow"){
//     console.log("slow down");
// }
// else if (color === "green"){
//     console.log("go");
// }
// console.log("end of the program");

// let age = 12;
// if (age >= 18){
//     console.log("you can vote");
// }
// else if (age <18){
//     console.log("you are a teenager");
// }

// // popcorn size

// let popcornSize = "medium";
// if (popcornSize === "xlarge"){
//     console.log("The price is Rs. 250");
// }
// else if (popcornSize === "large"){ 
//     console.log("The price is Rs. 200");
// }
// else if (popcornSize === "medium"){
//     console.log("The price is Rs. 150");
// }
// else if (popcornSize === "small"){
//     console.log("The price is Rs. 100");
// }
// else{
//     console.log("Invalid size");
// }

// let marks = 100;
// if (marks >= 90){
//     console.log("You got A grade");
//     if (marks >= 95){
//         console.log("You got A+ grade");
//     }
// }
// else if (marks >= 80){
//     console.log("You got B grade");
// }
// else {
//     console.log("You got C grade");
// }

// 



let str = "HET";
if ((str === str.toUpperCase()) && str.length >2){
    console.log(`${str} good string`);
}
else{
    console.log(`${str}not a  good string`);
}


let num = 7;

if ((num % 2 === 1) && ((num + 2 === 9) || (num - 1 === 5))) {
    console.log("Valid");
} else {
    console.log("Invalid");
}


let name = "RAJA";

if ((name === name.toUpperCase()) && (name.length > 3)) {
    console.log("SHOUT");
} else {
    console.log("whisper");
}


let color = "red";
switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break
        default:
            console.log("invalid color");
}


let day = "7";
switch (day){
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
            console.log("Wednesday");
            break;
    case "4":
            console.log("Thursday");
            break;    case "5":
            console.log("Friday");
            break;
     case "6":
            console.log("Saturday");
            break;    case "7":
            console.log("Sunday");
            break;
    default:
        console.log("Invalid day");
        break;
 

}