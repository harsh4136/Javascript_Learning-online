function sayhello (){
    console.log("Hello World")
}

let call_Function = setInterval(sayhello,1000);

// clear the interval after 10 second.
setTimeout(function(){
    clearInterval(call_Function);
    console.log("Interval cleared")
},10000)