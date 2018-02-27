import {isPalindrome} from "./../Shared/EulerFunctions";

let largestPalindrome = 0;
let largestFactor = 999;
let foundLargestPalindome = false;

function identifyPalindrome(potentialPalindrome) {
    if(isPalindrome(potentialPalindrome)) {
        foundLargestPalindome = true;
        largestPalindrome = potentialPalindrome;
    }
}

const startTime = Date.now();
let numbersToCalc = 1;
let calculatedNumbers;
let currentMainNumber = largestFactor;
while(!foundLargestPalindome) {
    calculatedNumbers = 0;
    let maxDifference = Math.floor(numbersToCalc / 2);

    // Asymmetrical
    let currentDifference = 1;
    while(calculatedNumbers < Math.floor(numbersToCalc / 2)) {
        identifyPalindrome((currentMainNumber + currentDifference) * (currentMainNumber - Math.max(0, currentDifference - 1)));
        
        currentDifference++;
        calculatedNumbers++;
    }

    identifyPalindrome(currentMainNumber * currentMainNumber);
    calculatedNumbers++;
    
    // Symmetrical
    currentDifference = 1;
    while(calculatedNumbers < numbersToCalc) {
        identifyPalindrome((currentMainNumber + currentDifference) * (currentMainNumber - currentDifference));

        currentDifference++;
        calculatedNumbers++;
    }
    numbersToCalc += 2;
    currentMainNumber--;
}
const endTime = Date.now();

console.log("The largest palindrome number made from the product of 2 " + largestFactor.toString().length + "-digit numbers is: " + largestPalindrome);
console.log("Time is took (ms): " + (endTime - startTime));
console.log("Time is took (s): " + ((endTime - startTime) / 1000));