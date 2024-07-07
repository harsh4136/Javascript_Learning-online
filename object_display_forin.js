// Create an Object. <-- using this we can print key of an object also.   *********************************
const person = {
    name: "harsh",
    age: 17,
    city: "anad"
  };
  
  // Build a Text
  let text = "";
  for (let x in person) {     // using for in loop
    text += person[x] + " ";
    //console.log(x). using this we can print key's which is included;
  };
  console.log(text)

  let obj = {
    harsh : 99,
    rohan : 92,
    rahul : 80
  }
  
  for (let a in obj){          // here, a is variable used to stored keys of an object
    console.log("Marks of " + a + " are " + obj[a])  // We cannot do obj.a because we are not accessing an properties of an object
                                                     //  here we are accessing the key values stored in a .   
  }