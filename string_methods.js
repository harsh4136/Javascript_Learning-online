let name = "Harsh";
console.log(name.valueOf())  // It represent the value inside the string .
console.log(name.length)  // It has 5 character , therefore it's lenght should 5 .
console.log(name.charAt(2))   // use to watch the value which is presented at that particular index.
//console.log(name.at(3)) // also name[3]; , it is an another example of the upper method of string .
console.log(name.toUpperCase())   // It convert's the value of string into uppercase('capital letter').
console.log(name.toLowerCase())   // It convert's the value of string into lowercase('small letter').
console.log(name.slice(2, 5))   // It is based on index value , from which we can slice the value in that particular index.
console.log(name.slice(3))    //  It should be more clear after watching it practically in the terminal.
//console.log(name.substr(3))   // It works same as above command .
console.log(name.substring(1,5))   // It will only represent the character between index 1 and 5.
console.log(name.indexOf("H"))    // You can also use 'indexOf()' to search for a single character within a string.
console.log(name.replace("Ha", "A")) // It is used to replace character presented in string.
console.log(name.repeat(5))      // It will repeat the string many times as we wish.
console.log(name.padStart(10,"^"))   // It's like setfill in c++
                     // basically it add's the character before the string till the limit which we have set
console.log(name.padEnd(10,"^")) // It is basically opposite of the padstart, it add's the character after the string.
let friend = "Rohan";
console.log(name.concat(" is a friend of " , friend))  // It is used for Joining two or more strings and returns a new string.

console.log(name.charCodeAt(4)) // The charCodeAt() method returns the code of the character at a specified index in a string:
                                //The method returns a UTF-16 code (an integer between 0 and 65535).

let name1 = "          harsh             ";
console.log(name1.length)
console.log(name1.trim())   // Used from removing space inside the string .
console.log(name1.trimStart())   // It will remove the space from star ting.
console.log(name1.trimEnd())     // It will remove the space which is located in end of the particular string.  As you can see it in output screen.

let text = "I love cats. cats are very easy to love. cats are very popular";
console.log(text.replaceAll("cats","dogs"))   // It will replace the that particular word from an particular paragraph.

let str = " BMW , Lamborghini , Ferrari "
console.log(str.split(","))   // by using split method we can split string into array using an character like space, comma, fullstop , etc.
console.log(str.split(",",2))  // You can limit the number of splits by providing a limit argument.
// console.log(str.split(" ")) // using space for converting the string into array