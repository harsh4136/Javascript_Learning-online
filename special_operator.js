let array1 = [1,2,3]
let array2 = [...array1,4,5,6]
console.log(array2)

let obj1 = [1,2,3]
let obj2 = [...obj1,4,5,6]
console.log(obj2)

let user = {
     name: "Alice",
     address: { city: "Wonderland" }
     };
console.log(user?.address?.city); // Wonderland              // '?.' is known as chaining operator.
console.log(user?.contact?.phone); // undefined (no error)
