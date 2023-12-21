/* Task 3
    File contains examples of variables available in type script
    At the end, a function is added that displays the declared types
*/

// string
let firstname: string = "PawelJumper";
let greeting: string = "Sieemanko!";
const maxim = "Ala, rzeczywiscie.";

// number
var age: number = 20;
const PI = 3.14;

// boolean
let isDone: boolean;
let dynamicBoolean: any = true;

// object
interface Person 
{
    name: string;
    age: number;
    email: string;
}

let person: Person = 
{
    name: "PawelJumper",
    age: 20,
    email: "ala.rzeczywiscie@practisepurpose.com"
};

// array
let breakfast: any[]

const food = 
{
    breakfast: ["Eggs", "Sausage"],
}

let numbers: Array<number> = [1, 2, 3, 4, 5];

//variable with non-standard/custom type 
let student: { name: string, age: number, grade: string } = { name: "Przemyslaw", age: 25, grade: "A" };

//variable declared without a specific type (dynamic typing)
let dynamicVariable: any = "Delicious!";

// variable with default value
function greet(message: string = "Hi, I'm variable with default value, and I'm ending this!"): void 
{
    console.log(message);
}


// Function to display all declared variables
function displayVariables(): void 
{
    console.log("String variables:");
    console.log("firstname:", firstname);
    console.log("greeting:", greeting);
    console.log("maxim:", maxim);

    console.log("\nNumber variables:");
    console.log("age:", age);
    console.log("PI:", PI);

    console.log("\nBoolean variables:");
    console.log("isDone:", isDone);
    console.log("dynamicBoolean:", dynamicBoolean);

    console.log("\nObject variables:");
    console.log("person:", person);

    console.log("\nArray variables:");
    console.log("breakfast:", breakfast);
    console.log("numbers:", numbers);

    console.log("\nCustom type variable:");
    console.log("student:", student);

    console.log("\nDynamic typing variable:");
    console.log("dynamicVariable:", dynamicVariable);
}

console.log("--------------------")
// call function to display variables
displayVariables();
console.log("--------------------")
// call greet function
greet();
console.log("--------------------")