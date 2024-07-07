// properties of objects;

const jack = {
    fullName : "Jack sidhpie",
    age : 19,
    eyeColour : "blue",
    wanted : false
}

const Person_data = jack;
console.log(Person_data["age"])

    delete jack.age              // from this 'delete' keyword we can delete the value of properites as well as 
                                // properites itself from the object .
    console.log(jack["age"])   // Therefore, the ouput of this is undefined.

// **********************   Objects inside an objects    ********************** //

const myName = {
    Fullname : "Harsh patel",
    age : 17,
    myCars : {
        car_1 : "BMW",
        car_2 : "Lamborghini",
        car_3 : "ferrari"
    }
};
console.log(myName["myCars"]["car_2"])
/* There are many other way to access the object inside an object ,
    1. myName ["mycars"]["car_2"]
    2. myName.mycars.car_2
    3. myName.mycars["car_2"]
*/

// There's another way ;
let a1 = "myCars" ;        
let a2 = "car_1" ;
console.log(myName[a1][a2])


/* {
    async function Fetching (){
        let response = await fetch("api.weatherapi.com/v1/current.json?key=46122bfca2404410a8190215242806&q=surat&aqi=no");
        console.log(response);
        let data = await response.json();

        console.log(data);
    }
    Fetching();
} */
