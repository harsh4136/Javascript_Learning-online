let a = prompt("Enter the first number");
a = Number.parseFloat(a);     //converting this value in a from string to float ;
let b = prompt("Enter the second number");
b = Number.parseInt(b);       // converting the value in b from string to integer
let c = prompt("Enter the arithmetic operator ");    // we have not convert c in an number because our case 
                                                    // in switch's are in string . therefore, we have not convertedit.

switch(c){
    case '+':
        console.log("The addition on two number is : ", a+b)
        break;

    case '-':
        console.log("The subtraction of two number is :", a-b);
        break;
    
    case '*':
        console.log("The multiplication of two number is :", a*b);
        break;

    deafult:
        console.log("You have inserted an wrong arithmetic operator");
}
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

