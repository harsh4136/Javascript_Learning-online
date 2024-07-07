const person = {
    name: "harsh",
    age: 17,

}

console.log(person.name = "Harsh patel")    // by using '.' we have access to change the value inside the object
// alert(person.name);   --> 
{
    console.log(person["name"])      // in 7 line we have directly change the value of name in oject 'person'
}                                   //  therefore, wherever yoy will try to print person.name there will be same value as it is in 7th line.



// *************************************************************************************************** //


// const food = {};   // we also write this instead of new object();
const food = new Object();     /*   there's no need to write new object(); , but for more readability and
                                   it is good programming pratice;                  */
food.item_1 = "pizza" ;
food.item_2 = "Burger";
food.item_3 = "french fries" ;

console.log(food["item_1"])