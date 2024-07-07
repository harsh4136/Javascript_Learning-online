// displaying the object using object.values().  <-- creates an array from the property vales

const person = {
    name : "Harsh",
    age : 17 ,
    city : "Anad"
};

const myArray = Object.values(person);

console.log(myArray)
// Object.values() can be particularly useful in various scenarios where you need to operate on the 
// values of an object without needing to consider the keys.
console.log(typeof myArray)