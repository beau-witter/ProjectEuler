const calculateTriangleNumber = function(nthTriangleNumber) {
    return nthTriangleNumber * ((nthTriangleNumber + 1) / 2);
}

const calculateTriangleFactors = function(triangleNumber) {
    let factorCount = 1;
    let factor = 2;
    let triangleSqrt = Math.sqrt(triangleNumber);
    while(factor < triangleSqrt) {
        if(triangleNumber % factor === 0) {
            factorCount++;
        }

        factor++;
    }

    if(factor - 1 === triangleSqrt || factor === triangleSqrt) {
        factorCount = ((factorCount - 1) * 2) + 1;
    }
    else {
        factorCount *= 2;
    }

    return factorCount;
}

let largestFactorCount = 0;
let nthLargestFactorCountTriangleNumber = 0;
let nthTriangleNumber = 1;
let startTime = Date.now();


// main loop
while(largestFactorCount < 500) {
    let triangleNumber = calculateTriangleNumber(nthTriangleNumber);
    let triangleFactorCount = calculateTriangleFactors(triangleNumber);
    if(triangleFactorCount > largestFactorCount) {
        largestFactorCount = triangleFactorCount;
        nthLargestFactorCountTriangleNumber = nthTriangleNumber;
    }
    nthTriangleNumber++;
}




let endTime = Date.now();
console.log("Nth Triangle Number with largest number of factors: " + nthLargestFactorCountTriangleNumber);
console.log("Triangle Number with largest number of factors: " + calculateTriangleNumber(nthTriangleNumber));
console.log("Number of factors: " + largestFactorCount);

console.log("Time it took (ms): " + (endTime - startTime));
console.log("Time it took (s): " + (endTime - startTime) / 1000);