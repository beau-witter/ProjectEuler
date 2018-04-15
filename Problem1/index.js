import {getMultiplesOfXLessThanY} from "./../Shared/EulerFunctions";
import {Project} from "./../Shared/Project";

function MultiplesOfThreeAndFive(input, output) {
    const upperLimit = input[0];
    const multiplesOfThree = getMultiplesOfXLessThanY(3, upperLimit);
    const multiplesOfFive = getMultiplesOfXLessThanY(5, upperLimit);
    
    // Taken from https://stackoverflow.com/a/23080662/7636764
    const mixedMultiples = multiplesOfThree.concat(
        multiplesOfFive.filter(
            function (item) {
                return multiplesOfThree.indexOf(item) < 0;
            }
        )
    );

    let sum = 0;
    mixedMultiples.forEach(function(multiple) {
        sum += multiple;
    });

    output.upperLimit = upperLimit;
    output.sum = sum;

    return output;
}

function printOutput(input) {
    console.log("The sum of all multiples of either 3 or 5 less than " + input.upperLimit + " is: " + input.sum);
}

Project(MultiplesOfThreeAndFive, printOutput, 10000);