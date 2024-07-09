function getUserInput() {
    let userInput;
    let isNumber = false;
  
    while (!isNumber) {
      try {
        userInput = prompt("Please enter a number:");
  
        if (isNaN(userInput) || userInput.trim() === "") {
          throw new Error("Input is not a valid number.");
        }
  
        userInput = Number(userInput);
        isNumber = true;
        alert("Thank you! You entered a valid number: " + userInput);
      } catch (error) {
        alert("The given value is in term of string. Therefore, please retry and enter the value in terms of number.");
      }
    }
  
    return userInput;
  }
  
  getUserInput();
  