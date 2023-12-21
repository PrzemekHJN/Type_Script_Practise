/* Task 2
    Function has a variable number of attributes.
    The result of a function is the sum of it's parameters.
    The rest (...args) operator is used which captures all the arguments passed to the function (stores them in args array).
    Then reduce is used to sum all the elements of the array, starting from 0.
*/

function sum(...args: number[]): number 
{
    return args.reduce((acc, current) => acc + current, 0);
}

// Calling function with different number of parameters given
console.log(sum(2));  
console.log("-------------")
console.log(sum(3, 4)); 
console.log("-------------")
console.log(sum(1, 2, 3));   
console.log("-------------")
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log("-------------")
console.log(sum(15, 99, 8));
console.log("-------------")