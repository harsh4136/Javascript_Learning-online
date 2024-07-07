/* Strict mode is a useful feature in JavaScript that helps to write more secure, cleaner, 
 and less error-prone code by: */

 // Catches Common Coding Mistakes: By throwing errors for actions that are usually silent errors.
 // Prevents the Use of Undeclared Variables: Helps to avoid accidental global variable declarations.

 "use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}


x = 3.14;       // This will not cause an error.
myFunction();
function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

// *********  Imp : in a function, in strict mode, 'this' keyword  is undefined.