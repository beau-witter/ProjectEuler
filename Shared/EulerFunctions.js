// Triangle Numbers are defined as adding all natural numbers up to and including the
// nth Triangle Number you are looking for. 
// E.G. the 6th triangle number is 1 + 2 + 3 + 4 + 5 + 6, which is 21
// There is another way to calculate triangle numbers, which is faster
// and is what is used here. The nth triangle number can be found by
// n * ((n+1)/2)
export function calculateTriangleNumber(nthTriangleNumber) {
    // Triangle numbers are not well defined below 1
    if(nthTriangleNumber < 1) {
        return;
    }

    return nthTriangleNumber * ((nthTriangleNumber + 1) / 2);
}

export function calculateFactorCount(number) {
    let factorCount = 1;
    let factor = 2;
    let numberSqrt = Math.sqrt(number);

    while(factor < numberSqrt) {
        if(number % factor === 0) {
            factorCount++;
        }
        factor++;
    }

    // square numbers are a special case
    if(factor - 1 === numberSqrt || factor === numberSqrt) {
        factorCount = ((factorCount - 1) * 2) + 1;
    }
    // general case
    else {
        factorCount *= 2;
    }

    return factorCount;
}