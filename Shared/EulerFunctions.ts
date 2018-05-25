// Triangle Numbers are defined as adding all natural numbers up to and including the
// nth Triangle Number you are looking for. 
// E.G. the 6th triangle number is 1 + 2 + 3 + 4 + 5 + 6, which is 21
// There is another way to calculate triangle numbers, which is faster
// and is what is used here. The nth triangle number can be found by
// n * ((n+1)/2)
export function calculateTriangleNumber(nthTriangleNumber: number): number {
    // Triangle numbers are not well defined below 1
    if(nthTriangleNumber < 1) {
        return;
    }

    return nthTriangleNumber * ((nthTriangleNumber + 1) / 2);
}

export function calculateFactorCount(number: number): number {
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

export function getMultiplesOfXLessThanY(x: number, y: number): number[] {
    const multiples: number[] = [];

    let multiple = x;
    while(multiple < y) {
        multiples.push(multiple);
        multiple += x;
    }

    return multiples;
}

export function calculateEvenFibonacciNumbers(upperLimit: number): number[] {
    let fibAdding = 0;
    let currentEvenFib = 2;
    let evenFibs: number[] = [];

    while(currentEvenFib < upperLimit) {
        evenFibs.push(currentEvenFib);

        const nextFibAdding = currentEvenFib / 2;
        currentEvenFib = ((currentEvenFib * 2) + fibAdding) * 2;
        fibAdding = nextFibAdding;
    }
    
    return evenFibs;
}

const compareNumbers = function (a: number, b: number): number {
    return a - b;
};

export function calculateFactors(numberToFactor: number): number[] {
    let potentialFactor = 1;
    let factors: number[] = [];
    let numberToFactorSqrt = Math.sqrt(numberToFactor);

    while(potentialFactor <= numberToFactorSqrt) {
        if(numberToFactor % potentialFactor === 0) {
            if(potentialFactor === (numberToFactor / potentialFactor)) {
                factors.push(potentialFactor);
            } else {
                factors.push(potentialFactor);
                factors.push(numberToFactor / potentialFactor);
            }
        }
        potentialFactor++;
    }

    return factors.sort(compareNumbers);
}

export function isPrime(potentialPrime: number): boolean {
    let potentialFactor = 2;

    if(potentialPrime === 1) {
        return false;
    }

    while(potentialFactor < potentialPrime) {
        if(potentialPrime % potentialFactor === 0) {
            return false;
        }

        potentialFactor++;
    }

    return true;
}

export function isPalindrome(potentialPalindrome: number): boolean {
    return potentialPalindrome.toString().split("").reverse().join("") == potentialPalindrome.toString();
}