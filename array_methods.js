let food = ["pizza","burger","french fries"]
let person = ["Harsh","Rahul","Rohan"]
let fruit = ["Mango","Orange","Banana"]
let number = [[1,2],[3,4],[4,5]];
console.log(food.length);      // for measuring the lenght of an array.

console.log(food.toString());  // The JavaScript method 'toString()' converts an array to a string of (comma separated) array values.

console.log(food.at(2))  // value at index 2.

console.log(food.join("*"));           //   The join() method also joins all array elements into a string.
              //It behaves just like toString(), but in addition you can specify the separator:

food.push("Frankie");      // The push() method adds a new element to an array (at the end):
console.log(food)

 food.pop();    // The pop() method removes the last element from an array:   *******************************
console.log(food)       // here we can see the last element has been removed.  

console.log(food.shift())   // The shift() method removes the first array element 
console.log(food)        //and "shifts" all other elements to a lower index.

food.unshift("pizza");  // The unshift() method adds a new element to an array (at the beginning), and
console.log(food)      //  "unshifts" older elements:

console.log(food.concat(person));  // concat is used to connect two or more array .
console.log(food.concat(person,fruit))  // merrging of three array.
console.log(food.concat("Frankie"));  // Merging an Array with Values

//console.log(food.copyWithin(1,2));  // The copyWithin() method copies array elements to another position 
//it will we more clear after watching output,    // ^ in an array:

console.log(number.flat()); // The flat() method creates a new array with sub-array elements concatenated to a specified depth

// splicing

console.log(food.slice(1)) // The slice() method slice the element untill that we have set an limit .

