// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow{
  // Declare properties of the Truck class and is a subclass of Vehicle that can impliment AbleToTow.
  // The properties include vin, color, make, model, year, weight, top speed, wheels, and towing capacity.
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  //  Constructor that accepts the truck details along with vehicle details
    constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
    super();
    
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      this.wheels = wheels;
      if (this.wheels.length !== 4) {
        this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
      }
      else {
        this.wheels = wheels;
      }
      this.towingCapacity = towingCapacity;
    }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    //  Get the make an model of the vehicle if it exists
    //  Check if the vehicle's weight is less than or equal to the truck's towing capacity
    //  If it is, log that the vehicle is being towed
    //  If it is not, log that the vehicle is too heavy to be towed
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicle.make} ${vehicle.model}`);
    }
    else {
      console.log(`${vehicle.make} ${vehicle.model} is too heavy to tow`);
    }
    
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // The method calls the printDetails method of the parent class
    super.printDetails();
    //  The method log the details of the Truck
    //  The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.length} wheels`);
    console.log("two motorcyles with a little house in the middle?"); //  A little "I think you should leave" reference
}
}
// Export the Truck class as the default export
export default Truck;
