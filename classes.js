// Creating an class
class Car {
  constructor(name, year) {
    this.name = name; // 'this' refers to the new instance
    this.year = year; // 'this' refers to the new instance
  }
}

class Car1 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  
    // Method to display car details
    displayInfo() {
      console.log(this.name + " was made in " + this.year);
    }
  }
  
  let myCar = new Car1("Toyota", 2021);
  myCar.displayInfo(); // Output: Toyota was made in 2021
  
  class Car2 {
    constructor(name) {
      this.name = name;
    }
  
    display() {
      console.log("Car name is " + this.name);
    }
  }
  
  const myCar2 = new Car2("Toyota");
  myCar2.display(); // "Car name is Toyota"
  