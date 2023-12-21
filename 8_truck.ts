/*  Task 8 - for description please see 8_main file.
    File 8_truck.ts
*/

import { Car } from './8_car';

export class Truck extends Car 
{
    colour: string;

    constructor(brand: string, model: string, year: number, colour: string) 
    {
        super(brand, model, year);
        this.colour = colour;
    }

    displayInfo(): string 
    {
        return `${super.displayInfo()} of colour ${this.colour}`;
    }
}