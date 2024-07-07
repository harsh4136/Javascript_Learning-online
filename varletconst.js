console.log("Hello world");

let a = 5;
const author = "harsh";   // it cannot be change directly because we have use const keyword .
// a = 5; it will work . because you directly changing the value of a .
// let a = 5;   it is not possible . if you want to do this use need to use var .
{
    let a = 1;
    console.log(a);
}
console.log(a);

/*   var a = "harsh";
{
   var a = 1;
   console.log(a);  // if I use var instead of let then the 1 will get printed two times
}                   // but if I use let then the output is different .
console.log(a);   */
let v = null
console.log(typeof v);
