// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  // The properties should include vin, color, make, model, year, weight, top speed, and wheels
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  //  Create a constructor that accepts the properties of the Motorbike class
    // The constructor calls the constructor of the parent class, Vehicle
    //  The constructor initialize the properties of the Motorbike class
    // The constructor check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    }
    else {
      this.wheels = wheels;
    }
  }

  // Implement the wheelie method
    // The method should log the message "Motorbike [make] [model] is doing a wheelie!"
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  } 

  //  Override the printDetails method from the Vehicle class
  //  The method should log the details of the Motorbike class method calls the printDetails method of the parent class.
  // The details include the VIN, make, model, year, weight, top speed, color, and wheels
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`make: ${this.make}`);
    console.log(`model: ${this.model}`);
    console.log(`year: ${this.year}`);
    console.log(`weight: ${this.weight} lbs`);
    console.log(`top speed: ${this.topSpeed} mph`);
    console.log(`color: ${this.color}`);
    console.log(`wheels: ${this.wheels.length}`);
    console.log("that's a nice motorcycle!"); //  A little "I think you should leave" reference.
  }
  
  
  
}

// Export the Motorbike class as the default export
export default Motorbike;
