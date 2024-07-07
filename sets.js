const letters = new Set(["a","b","c"]);    // another syntax for creating a set directly.


let char = new Set();
char.add("a");         // using 'add()' we are arranging it in set.
char.add("b");
char.add("c");

console.log(char.size)       // using '.size' we can see how many values are in set.

console.log(char.has("a"))    // true         // using 'has()' we can analize that it is in the set or not
console.log(char.has("d"))    // false

console.log(char.keys());       // using keys() and values() we can watch what's inside the set.
console.log(char.values());

let a = char.keys();
for (let x of a){
    console.log(x)          // another example using for-of loop
}
let c =char.entries();
console.log(c);

char.delete('a');         // delete an particular value from the set
console.log(char)  

char.clear();        // clear all values from the set.
console.log(char)

