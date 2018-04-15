import {calculateFactors, isPrime} from "./../Shared/EulerFunctions";
import {Project} from "./../Shared/Project";

const targetNumber = 600851475143;

function LargestPrimeFactor(input, output) {
    const targetNumber = input[0];

    let factors = calculateFactors(targetNumber);
    let largestPrimeFactor;

    for(var reverseIndex = factors.length - 1; reverseIndex > 0; reverseIndex--) {
        if(isPrime(factors[reverseIndex])) {
            largestPrimeFactor = factors[reverseIndex];
            break;
        }
    }

    output.targetNumber = targetNumber;
    output.largestPrimeFactor = largestPrimeFactor;

    return output;
}

function printOutput(input) {
    console.log("The largest prime factor of " + input.targetNumber + " is: " + input.largestPrimeFactor);
}

Project(LargestPrimeFactor, printOutput, targetNumber);