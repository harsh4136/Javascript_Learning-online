let map = new Map();            // creating of map
map.set("name","harsh");
map.set("age",17);        // using 'set()' setting the key's and values of an map
map.set(1,"one");

console.log(map.get('name'))          // using 'get()' accessing the map's values.
console.log(map.get('age'));   
console.log(map.get(1))   

console.log(map.has('name'));           // using 'has()' we can check wheather the key value pair is avialable or not.
console.log(map.has('address'));  
 

console.log(map.size)           // using 'size' we will able to know the size of an particular map.


let maps = map.values();     // using 'values()'

for (let value of maps){
    console.log(value)          // used in for of loop.
}
let keys = map.keys();
for (let key of keys){
    console.log(key)     
}

console.log(map.keys())                    // directly using 'keys()' for printing all keys presented in map
console.log(map.values())           // directly using 'values()' for printing all values in map .

map.forEach((value, key) => {            // The 'forEach()' method is used to log each key-value pair to the console(output).  log =  print
    console.log(`${key}: ${value}`);  
});

let entries = map.entries();      // The 'entries()' method returns an iterator object with the [key,values] in a map:
for (let add of entries){
    console.log(add)
}
console.log(typeof entries)
console.log(map.entries());    // directly using 'entires()' through console.log .

map.delete(1);                          // using 'delete()' we can delete any key-value pair .
console.log(map.get(1));    // output : undefined.

map.clear();                // using 'clear()' we can delete an map completelly.
console.log(map.size)   
