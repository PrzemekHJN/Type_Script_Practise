/*  Task 10
    Arrow function has been implemented in the program.
    Function is taking a competitor and route, and returning a description of the mountain/trail run.
*/

interface TrailRunner 
{
    name: string;
    age: number;
    experienceLevel: string;
}

// arrow function
const describeMountainRun = (runner: TrailRunner, trail: string): string => {
    return `${runner.name}, ${runner.age}-year-old ${runner.experienceLevel} runner, completes the ${trail} trail.`;
};


const runner1: TrailRunner = { name: "Przemyslaw", age: 28, experienceLevel: "Intermediate" };
const trail1: string = "Lesnik";
console.log(describeMountainRun(runner1, trail1));
