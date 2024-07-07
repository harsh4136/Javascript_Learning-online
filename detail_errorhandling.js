try{
    let result = someFunction();
}
catch(error){
    console.log("An error occurred")
}

try{
    let age = -6;
    if(age<0){
        throw new Error("harsh error");
    }
}
catch(error){
    console.log("An occurred with name : ",error.message);
}

try{
    console.log(harsh)
}
catch(error){
    console.log("An error occurred")
}
finally{
    console.log("This will always run ")            // it will be run weather there is an error occurred or not .
}