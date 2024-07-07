let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(e){
    console.log(e.name)   // A RangeError is thrown if you use a number that is outside the range of legal values.

}

// ReferenceError
let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err){
    console.log(err.name);
}

// SyntaxError
try {
    eval("alert('Hello')");   // Missing ' will produce an error
  }
catch(err){
    console.log(err.name)
}

// typeError
let number = 1;
try {
  Number.toUpperCase();   // You cannot convert a number to upper case
}
catch(err){
    console.log(err.name)
}

// URI (Uniform Resource Identifier) Error
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
    console.log(err.name);
  }