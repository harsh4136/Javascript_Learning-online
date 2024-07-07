let number = 10;
let num = number.toString();
console.log(num)             // Used to convert the number 10 from number to string data types.
console.log(typeof num) // string.

/* The toExponential() method in JavaScript is used to return a string representing a number in exponential
 notation.This notation is useful when you want to represent very large or very small numbers more compactly. */
let largeNumber = 1234567890;
let smallNumber = 0.0000012345;
console.log(largeNumber.toExponential()); // Output: "1.23456789e+9"
console.log(smallNumber.toExponential()); // Output: "1.2345e-6"

// Basically it is used for round off the amount , for eg : for round off the salary for an employee.
console.log("toFixid method in number")
let x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));

console.log("toPrecision method in number");
let y = 9.656;
console.log(y.toPrecision());      // the limit which we have set , will be show on the output screen with automatically round offing.  WESDRFTGYHJKL;'

console.log(y.toPrecision(2));
console.log(y.toPrecision(4));
console.log(y.toPrecision(6));

let digit = 42;
console.log(digit.valueOf())   // it basically show the value inside the variable.