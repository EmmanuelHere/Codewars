// Description:
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = number => (number % 2 == 0) ? number * 8 : number * 9

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }

// function simpleMultiplication(value) {

//     if (value % 2 === 0) {
//         return value * 8
//     } else {
//         return value * 9;
//     }
// }