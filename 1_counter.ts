/*  Task 1
    Function implements a counter using var and let
    Variable Let - available only in the current block
    Variable var - available throughout the function
*/
let letCounter: number = 0; 

function incrementCounter(): void 
{
    var varCounter: number = 0; 

    letCounter++;
    varCounter++;

    console.log("Let variable is now: " + letCounter);
    console.log("Var variable is now: " + varCounter);
}

// Call the function several times to see how let and var variables change after each call
incrementCounter();
console.log("-----------------------")
incrementCounter();
console.log("-----------------------")
incrementCounter();
console.log("-----------------------")
incrementCounter();
console.log("-----------------------")
incrementCounter();
console.log("-----------------------")