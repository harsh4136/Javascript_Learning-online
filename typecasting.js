let a = "1232";
// a = Number(a);           we can also convert it from string to number using this formula.
a = Number.parseFloat(a);   // Converting of data type from string to number .
console.log(typeof a)

let b = 1231;
console.log(a+b)

//b = String(b)              // converting of datatype from number to string .
b = b.toString();           // using this formula we can also convert it from number to string
console.log(typeof b)
// console.log(a+b)

if (a){
    console.log("This is true.") // This will run because "1232" is truthy  ?
}

let str = "hello";   // -->  True
//let str = 0;      //  -->  False
str = Boolean(str);
console.log(str)
console.log(typeof str)