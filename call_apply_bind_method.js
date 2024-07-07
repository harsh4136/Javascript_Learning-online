// The call() method calls a function with a given this value and arguments provided individually.

function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
  }
  
  const person = { name: "Alice" };
  
  greet.call(person, "Hello","!"); // Output: Hello, Alice!
