import {calculateEvenFibonacciNumbers} from "./../Shared/EulerFunctions";

const upperLimit = 4000000;
let evenFibSum = 0;

const startTime = Date.now();
const evenFibs = calculateEvenFibonacciNumbers(upperLimit);

evenFibs.forEach(evenFib => {
    evenFibSum += evenFib;
});
const endTime = Date.now();

console.log("The sum of all even fibonacci numbers less than " + upperLimit + " is: " + evenFibSum);
console.log("Time is took (ms): " + (endTime - startTime));
console.log("Time is took (s): " + ((endTime - startTime) / 1000));