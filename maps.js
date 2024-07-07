let map = new Map();            // creating of map
map.set("name","harsh");
map.set("age",17);        // using 'set()' setting the key's and values of an map
map.set(1,"one");

console.log(map.get('name'))          // using 'get()' accessing the map's values.
console.log(map.get('age'));
console.log(map.get(1))

console.log(map.has('name'));          // using 'has()' we can check wheather the key value pair is avialable or not.
console.log(map.has('address'));
 
map.delete(1);                          // using 'delete()' we can delete any key-value pair .
console.log(map.get(1));    // output : undefined.

console.log(map.size)         // using 'size' we will able to know the size of an particular map.

map.clear();                // using 'clear()' we can delete an map completelly.
console.log(map.size)


