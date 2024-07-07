// JSON is a format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.
// JSON data is written as key/value pairs, where the keys are strings, and the values can be strings, numbers, objects, arrays, booleans, or null.

// JSON stands for JavaScript Object Notation   ---> full form.

// JavaScript provides two main methods to work with JSON: JSON.stringify() and JSON.parse().

// JavaScript object
const jsObject = {
    name: "John",
    age: 30,
    sayHello: function() { console.log("Hello"); }, // Functions are not allowed in JSON
    address: {
      city: "New York",
      zip: undefined // Undefined values are not allowed in JSON
    }
  };
  
  // Converting to JSON will omit the function and undefined value
  const jsonString = JSON.stringify(jsObject);
  console.log(jsonString);
  // Output: '{"name":"John","age":30,"address":{"city":"New York"}}'
  