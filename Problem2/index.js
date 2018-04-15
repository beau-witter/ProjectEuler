import {calculateEvenFibonacciNumbers} from "./../Shared/EulerFunctions";
import {Project} from "./../Shared/Project";

const upperLimit = 4000000;

function EvenFibonacciNumbers(input, output) {
    const upperLimit = input[0];
    let evenFibSum = 0;

    const evenFibs = calculateEvenFibonacciNumbers(upperLimit);

    evenFibs.forEach(evenFib => {
        evenFibSum += evenFib;
    });

    output.upperLimit = upperLimit;
    output.evenFibSum = evenFibSum;

    return output;
}

function printOutput(input) {
    console.log("The sum of all even fibonacci numbers less than " + input.upperLimit + " is: " + input.evenFibSum);
}

Project(EvenFibonacciNumbers, printOutput, upperLimit);