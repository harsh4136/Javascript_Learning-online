// Methods in object's
// funtion in an object 

// Object methods are actions that can be performed on objects.
// A method is a function definition stored as a property value.

const person = {
    first_name: 'harsh',
    last_name: 'patel',
    age: 17,
    id: 236040307098,
    fullName: function () {
        return this.first_name + " " + this.last_name;
    }
};
let person_data = person;

console.log(person_data.age)
console.log(person_data.fullName())
// In the example above, this refers to the person object.
// this.firstName means the firstName property of person.
// this.lastName means the lastName property of person.

// below we have create an object in which we have add function outside the object , from line 22th.
const food = {
    item_1: "pizza",
    item_2: "burger",
    item_3: "french fries",
}
food.special = function () {
    return "In Just 199 rs full party platter , which contains " + this.item_1 + " , " + this.item_2 + " and " + this.item_3 + " . ";
}
console.log(food.special())