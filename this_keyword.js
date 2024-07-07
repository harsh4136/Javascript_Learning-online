//The this keyword in JavaScript refers to the object that is currently executing the code. 
// It allows you to access and manipulate the properties and methods of that object.


/* 
-> In an object method, this refers to the object.
-> Alone, this refers to the global object.
-> In a function, this refers to the global object.
-> In a function, in strict mode, this is undefined.
-> In an event, this refers to the element that received the event.
-> Methods like call(), apply(), and bind() can refer this to any object. */

const person = {
    firstName: "Harsh",
    lastName : "Patel",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName())
/*When used in an object method, this refers to the object.
In the example on top of this page, this refers to the person object.
Because the fullName method is a method of the person object. */

let x = this;
console.log(x) /* When used alone, this refers to the global object.
Because this is running in the global scope.
In a browser window the global object is [object Window]:  */

"use strict";
function myFunction() {   
  return this;
}/* JavaScript strict mode does not allow default binding.
So, when used in a function, in strict mode, this is un  */
