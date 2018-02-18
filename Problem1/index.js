import {getMultiplesOfXLessThanY} from "./../Shared/EulerFunctions";

// main loop
const startTime = Date.now();
const upperLimit = 10000;
const multiplesOfThree = getMultiplesOfXLessThanY(3, upperLimit);
const multiplesOfFive = getMultiplesOfXLessThanY(5, upperLimit);

// Taken from https://stackoverflow.com/a/23080662/7636764
const mixedMultiples = multiplesOfThree.concat(multiplesOfFive.filter(function (item) {
    return multiplesOfThree.indexOf(item) < 0;
}));

let sum = 0;
mixedMultiples.forEach(function(multiple) {
    sum += multiple;
});
const endTime = Date.now();

console.log("The sum of all multiples of either 3 or 5 less than " + upperLimit + " is: " + sum);
console.log("Time is took (ms): " + (endTime - startTime));
console.log("Time is took (s): " + ((endTime - startTime) / 1000));