// 1. Block scope
// 2. Function scope
// 3. Global scope

/*Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
ES6 introduced two important new JavaScript keywords: let and const.
These two keywords provide Block Scope in JavaScript.
Variables declared inside a { } block cannot be accessed from outside the block: */

{
    let x = 2;         // x can NOT be used here
  }


  {
    var x = 2;       // x CAN be used here
  }


  // * basically the variable used inside an function can be known as function scope.
  // code here can NOT use carName
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  // code here can NOT use carName
  function myFunction() {
    const carName = "Volvo";   // Function Scope
  }


// * A variable declared outside a function, becomes GLOBAL.
var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope