// Using Object.entries(). <-- makes it simple to use objects in loops:

const marks = {
harsh : 92,
rohan : 90,
rahul : 85
}; 

let text = "";
for (let [key, value] of Object.entries(marks)) {
  text += key + " : " + value + "\n";
}
console.log(text)
