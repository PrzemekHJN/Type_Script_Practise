/*  Task 8 - for description please see 8_main file.
    File 8_car.ts
*/

export class Car 
{
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) 
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(): string 
    {
        return `${this.year} ${this.brand} ${this.model}`;
    }

    displayDescription(): string 
    {
        return `This is a ${this.year} ${this.brand} ${this.model}.`;
    }
}
