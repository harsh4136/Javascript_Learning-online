// {"name":"John","age":50,"city":"New York"}" means that the data structure represented within the curly braces
// ({}) is formatted according to JSON (JavaScript Object Notation) syntax. Here's what each part of the JSON 
// string represents:


/*The result will be a string written in JSON notation:
{"name":"John","age":50,"city":"New York"} */

const person = {
    name : "harsh",
    age : 17,
    city : "anad"
}
let object = JSON.stringify(person);
console.log(object)
console.log(typeof object)     // From this you can verify that the ouput will be in string form .