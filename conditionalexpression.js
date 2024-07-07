// prompt and alert  can be used repleit and directly from brower.
// Whenever you use prompt it stores the value in the form of string
// and the prompt is like, it will ask you the value and store that value to an particular variable.
// prompt is used to take values from user , like in c++ we use cin for taking values form user.

//There are total three types of consitional expression.
// 1. if else
// 2. else..if
// 3.else.. if else..if ladder

//let a = prompt("What is your age?")  
// a = Number.parseInt(a) , this is used for converting the string to a number -->  *********************

//* IMP *//     // if you write that let a =+prompt("What is your age?")  , then it will automatically converted in number form.

//console.log(typeof a)

let a = 19;
if (a < 0) {
    console.log("This is an invalid age ");    //alert("This is a valid age");
}
else if (a < 9) {
    console.log("You are a kid and you can cannot think of driving");
}
else if (a < 18 && a >= 9) {
    console.log("You are a kid and you can think of driving after 18");
}
else if (a > 18) {
    console.log("You are now adult and you can drive");
}
else {
    console.log("This is an invalid age ");  //alert("This is an invalid age");
}


