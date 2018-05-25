import {isPalindrome} from "./../Shared/EulerFunctions";
import {Project} from "./../Shared/Project";

const largestNDigitNumber = 999;

function LargestPalindomeProduct(input: number[]) {
    function identifyPalindrome(potentialPalindrome) {
        if(isPalindrome(potentialPalindrome)) {
            foundLargestPalindome = true;
            largestPalindrome = potentialPalindrome;
        }
    }
        
    let largestFactor = input[0];
    let largestPalindrome = 0;
    let foundLargestPalindome = false;

    let numbersToCalc = 1;
    let calculatedNumbers: number;
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
    
    return { largestFactorLength: largestFactor.toString().length, largestPalindrome};
}

function printOutput(input) {
    console.log("The largest palindrome number made from the product of 2 " + input.largestFactorlength + "-digit numbers is: " + input.largestPalindrome);
}

const project4 = new Project(LargestPalindomeProduct, printOutput, [largestNDigitNumber]);
project4.execute();