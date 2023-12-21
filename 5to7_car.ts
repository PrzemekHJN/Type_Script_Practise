/* Task 5-7
    The program demonstrates the creation of class objects, inheritance, use of constructors and methods.
    Defines two classes: car and truck.
    It ends by displaying information about cars.
*/

// Applies to Task 5 - defining the car class
class Car 
{
    brand: string;
    model: string;
    year: number;

    // Applies to Task 6 - adding a constructor to the car class
    constructor(brand: string, model: string, year: number) 
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Applies to Task 6 - displaying the object description
    displayInfo(): string 
    {
        return `${this.year} ${this.brand} ${this.model}`;
    }

    displayDescription(): string 
    {
        return `This is a ${this.year} ${this.brand} ${this.model}.`;
    }
}

// Applies to Task 7 - defining truck class that inherits from the car class, using super operator
class Truck extends Car 
{
    colour: string;

    // adding a constructor to the car class
    constructor(brand: string, model: string, year: number, colour: string) 
    {
        super(brand, model, year);
        this.colour = colour;
    }

    // displaying the object description
    displayInfo(): string 
    {
        return `${super.displayInfo()} of colour ${this.colour}`;
    }
}

// Applies to Task 5 - creation of 3 objects that are instances of the car class
const car1: Car = new Car("Chevrolet", "Camaro ZL1", 1969);
const car2: Car = new Car("Ford", "Mustang Shelby GT500", 1967);
const car3: Car = new Car("Dodge", "Challenger", 1970);

// creation of object that is instance of the car class
const truck1: Truck = new Truck("Chevrolet", "Epica", 2008, "black");

console.log("----------------------------------")
console.log(car2.displayDescription());

console.log("----------------------------------")
console.log(car3.displayDescription());

console.log("----------------------------------")
console.log(car1.displayDescription());

console.log("----------------------------------")
console.log(truck1.displayDescription());
console.log(truck1.displayInfo());
console.log("----------------------------------")
