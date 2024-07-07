console.log(myVar); // undefined
var myVar = 10;

myFunction(); // "Hello, world!"
function myFunction() {
  console.log("Hello, world!");
}

// For `let` and `const`
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
