import {calculateTriangleNumber, calculateFactorCount} from "./../Shared/EulerFunctions";
import {Project} from "./../Shared/Project";

const largestFactorCount = 500;

function HighlyDivisibleTriangleNumber(input: number[]) {
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

    return { storage};
}

function printOutput(input) {
    console.log("Nth Triangle Number with largest number of factors: " + input.storage.nthLargestFactorCountTriangleNumber);
    console.log("Triangle Number with largest number of factors: " + input.storage.nthTriangleNumber);
    console.log("Number of factors: " + input.storage.largestFactorCount);
}

const project12 = new Project(HighlyDivisibleTriangleNumber, printOutput, [largestFactorCount]);
project12.execute();