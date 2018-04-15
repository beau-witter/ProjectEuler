import {calculateTriangleNumber, calculateFactorCount} from "./../Shared/EulerFunctions";
import {Project} from "./../Shared/Project";

const largestFactorCount = 500;

function HighlyDivisibleTriangleNumber(input, output) {
    let storage = {
        largestFactorCount: 0,
        nthLargestFactorCountTriangleNumber: 0,
        nthTriangleNumber: 1
    }
    
    while(storage.largestFactorCount < input[0]) {
        let triangleNumber = calculateTriangleNumber(storage.nthTriangleNumber);
        let triangleFactorCount = calculateFactorCount(triangleNumber);
        if(triangleFactorCount > storage.largestFactorCount) {
            storage.largestFactorCount = triangleFactorCount;
            storage.nthLargestFactorCountTriangleNumber = storage.nthTriangleNumber;
        }
        storage.nthTriangleNumber++;
    }

    storage.nthTriangleNumber = calculateTriangleNumber(storage.nthTriangleNumber);
    output.storage = storage;

    return output;
}

function printOutput(input) {
    console.log("Nth Triangle Number with largest number of factors: " + input.storage.nthLargestFactorCountTriangleNumber);
    console.log("Triangle Number with largest number of factors: " + input.storage.nthTriangleNumber);
    console.log("Number of factors: " + input.storage.largestFactorCount);
}

Project(HighlyDivisibleTriangleNumber, printOutput, largestFactorCount);