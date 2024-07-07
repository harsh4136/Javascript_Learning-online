function add(a,b){
    // let a = 10;
    // let b = 20;
    let c = a + b;
    return c;              // can also do like that , return a+b;
}
console.log(add(40,50))                 // passing values to the function

function add(a=4,b=5){               // if there isn't any parametirized value passed then the by default values
    let c = a+b                      // will be used which is a=4, b=5;
    return c;  //return a+b;  isn't require to take an another variable like we have taken  let c.
}
console.log(add(212,21))     // parametirized values



function myFunction() {
    let carName = "BMW";
    return carName;
    // code here CAN use carName
  }
  console.log(myFunction())



// const person = {
//     firstName: "John",
//     lastName: "Doe"
//   };
  
//   alert(person.firstName);         // this will throw's error because we cannot use alert or prompt in vscode.