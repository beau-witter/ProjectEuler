import {calculateFactors, isPrime} from "./../Shared/EulerFunctions";
import {Project} from "./../Shared/Project";

const targetNumber = 600851475143;

function LargestPrimeFactor(input: number[]) {
    const targetNumber = input[0];

    let factors = calculateFactors(targetNumber);
    let largestPrimeFactor;

    for(var reverseIndex = factors.length - 1; reverseIndex > 0; reverseIndex--) {
        if(isPrime(factors[reverseIndex])) {
            largestPrimeFactor = factors[reverseIndex];
            break;
        }
    }

    return { targetNumber, largestPrimeFactor };
}

function printOutput(input) {
    console.log("The largest prime factor of " + input.targetNumber + " is: " + input.largestPrimeFactor);
}

const project3 = new Project(LargestPrimeFactor, printOutput, [targetNumber]);
project3.execute();