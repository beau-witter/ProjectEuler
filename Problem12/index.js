import {calculateTriangleNumber, calculateFactorCount} from "./../Shared/EulerFunctions";

let storage = {
    largestFactorCount: 0,
    nthLargestFactorCountTriangleNumber: 0,
    nthTriangleNumber: 1
}
const startTime = Date.now();

// main loop
while(storage.largestFactorCount < 500) {
    let triangleNumber = calculateTriangleNumber(storage.nthTriangleNumber);
    let triangleFactorCount = calculateFactorCount(triangleNumber);
    if(triangleFactorCount > storage.largestFactorCount) {
        storage.largestFactorCount = triangleFactorCount;
        storage.nthLargestFactorCountTriangleNumber = storage.nthTriangleNumber;
    }
    storage.nthTriangleNumber++;
}

const endTime = Date.now();
console.log("Nth Triangle Number with largest number of factors: " + storage.nthLargestFactorCountTriangleNumber);
console.log("Triangle Number with largest number of factors: " + calculateTriangleNumber(storage.nthTriangleNumber));
console.log("Number of factors: " + storage.largestFactorCount);

console.log("Time it took (ms): " + (endTime - startTime));
console.log("Time it took (s): " + (endTime - startTime) / 1000);