// Using switch case making an simple calculator

// here we write let a =+prompt("Enter your first number :"); , because it will automatically convert that date type into number from string.
// otherwise that value given by user will be stored in value in the form of string.

let a =+ prompt("Enter your first number : ")
let b =+ prompt("Enter your second number :")
let o =+ prompt("Which arithmetic problem would you like to solve : \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Modules \n 6. **")

switch (o) {
    case 1:
        console.log("The addition of two number is : ");
        console.log(a + b);
        break;

    case 2:
        console.log("The subtraction of two number is : ");
        console.log(a - b);
        break;

    case 3:
        console.log("The multiplication of two number is : ");
        console.log(a * b);
        break;

    case 4:
        console.log("The division of two number is : ");
        console.log(a / b);
        break;

    case 5:
        console.log("The modules of two number is : ");
        console.log(a % b);
        break;

    case 6:
        console.log("The ** of two number is : ");    // the meaning of  a**b is that the b will be the power of a .  ex: a=2 and b=3  then, answer will be 8
        console.log(a ** b)                           // becuase the number is like 2 * 2 * 2 which is equal to 8. because b is 3 then a will be multiplly by 3 times
        break;
    default:
    alert("You have inserted wrong arithmetic operator")
}
