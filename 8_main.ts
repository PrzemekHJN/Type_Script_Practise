/*  Task 8
    File 8_main.ts
    Task 8 is to rewrite the classes from the 5to7_car file into module form and import them. 
    This task is divided into 3 files: 8_main, 8_car and 8_truck. 
    Each class is in a separate file and then imported in the 8_main file.
*/

import { Car } from './8_car';
import { Truck } from './8_truck';

const car1: Car = new Car("Chevrolet", "Camaro ZL1", 1969);
console.log("----------------------------------")
console.log(car1.displayDescription());

const car2: Car = new Car("Ford", "Mustang Shelby GT500", 1967);
console.log("----------------------------------")
console.log(car2.displayDescription());

const car3: Car = new Car("Dodge", "Challenger", 1970);
console.log("----------------------------------")
console.log(car3.displayDescription());

const truck1: Truck = new Truck("Chevrolet", "Epica", 2008, "black");
console.log("----------------------------------")
console.log(truck1.displayDescription());
console.log(truck1.displayInfo());

console.log("----------------------------------")
console.log("And all this using reworking the classes into a module and importing them!")
console.log("----------------------------------")