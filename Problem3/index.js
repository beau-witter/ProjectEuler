import {calculateFactors, isPrime} from "./../Shared/EulerFunctions";

let targetNumber = 600851475143;

const startTime = Date.now();
let factors = calculateFactors(targetNumber);
let largestPrimeFactor;

for(var reverseIndex = factors.length - 1; reverseIndex > 0; reverseIndex--) {
    if(isPrime(factors[reverseIndex])) {
        largestPrimeFactor = factors[reverseIndex];
        break;
    }
}

const endTime = Date.now();

console.log("The largest prime factor of " + targetNumber + " is: " + largestPrimeFactor);
console.log("Time it took (ms): " + (endTime - startTime));
console.log("Time is took (s): " + ((endTime - startTime) / 1000));