//* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// let evenOrOdd = (number) => {
//     if (number % 2 == 0) {
//         console.log(number, " is Even Number");
//     }
//     else if (number % 2 == 1) {
//         console.log(number, " is Odd Number");
//     }
// }
// evenOrOdd(prompt("Enter Number"));
//* OtherSoultion
let evenOrOdd = (number) => {
    (number % 2 == 0) ? console.log("Even") : console.log("Odd");
}
evenOrOdd(prompt("Enter Number"));