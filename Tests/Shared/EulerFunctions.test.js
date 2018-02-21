import {assert} from "chai";
import * as EulerFunctions from "./../../Shared/EulerFunctions";

describe("calculateTriangleNumber", () => {
    it("generates the expected triangle number", () => {
        //arrange
        const expectedResult = 36;
        const inputNthNumber = 8;

        //act
        const result = EulerFunctions.calculateTriangleNumber(inputNthNumber);
        
        //assert
        assert.equal(result, expectedResult);
    });

    it("does not attempt to compute invalid triangle numbers", () => {
        //arrange
        const expectedResult = undefined;
        const inputNthNumber = -1;
        
        //act
        const result = EulerFunctions.calculateTriangleNumber(inputNthNumber);

        //assert
        assert.equal(result, expectedResult);
    });
});

describe("calculateFactorCount", () => {
    it("calculates the correct count for prime numbers", () => {
        //arrange
        const expectedResult = 2;
        const inputNumber = 13;

        //act
        const result = EulerFunctions.calculateFactorCount(inputNumber);

        //assert
        assert.equal(result, expectedResult);
    });

    it("calculates the correct count for square numbers", () => {
        //arrange
        const expectedResult = 7;
        const inputNumber = 36;

        //act
        const result = EulerFunctions.calculateFactorCount(inputNumber);

        //assert
        assert.equal(result, expectedResult);
    });

    it("calculates the correct count for general case", () => {
        //arrange
        const expectedResult = 6;
        const inputNumber = 75;

        //act
        const result = EulerFunctions.calculateFactorCount(inputNumber);

        //assert
        assert.equal(result, expectedResult);
    });
});

describe("getMultiplesOfXLessThanY", () => {
    it("returns an empty array if no multiples exist", () => {
        //arrange
        const expectedLength = 0;
        const inputX = 13;
        const inputY = 5;

        //act
        const result = EulerFunctions.getMultiplesOfXLessThanY(inputX, inputY);

        //assert
        assert.equal(result.length, expectedLength);
    });

    it("returns the correct array for valid input", () => {
        //arrange
        const expectedArray = [3, 6, 9];
        const inputX = 3;
        const inputY = 10;

        //act
        const result = EulerFunctions.getMultiplesOfXLessThanY(inputX, inputY);

        //assert
        assert.equal(result.length, expectedArray.length);
        assert.equal(result[0], expectedArray[0]);
        assert.equal(result[1], expectedArray[1]);
        assert.equal(result[2], expectedArray[2]);
    });
});

describe("calculateEvenFibonacciNumbers", () => {
    it("returns the expected numbers less than the limit given", () => {
        //arrange
        const expectedFibs = [2, 8];
        const inputLimit = 10;

        //act
        const result = EulerFunctions.calculateEvenFibonacciNumbers(inputLimit);

        //assert
        assert.equal(result.length, expectedFibs.length);
        assert.equal(result[0], expectedFibs[0]);
        assert.equal(result[1], expectedFibs[1]);
    });

    it("returns empty array if no numbers were found", () => {
        //arrange
        const expectedFibs = [];
        const inputLimit = 1;

        //act
        const result = EulerFunctions.calculateEvenFibonacciNumbers(inputLimit);

        //assert
        assert.equal(result.length, expectedFibs.length);
    })
});

describe("calculateFactors", () => {
    it("returns one factor for 1", () => {
        //arrange
        const expectedFactors = [1];
        const inputNumber = 1;

        //act
        const result = EulerFunctions.calculateFactors(inputNumber);

        //assert
        assert.equal(result.length, expectedFactors.length);
        assert.equal(result[0], expectedFactors[0]);
    });

    it("returns two factors for prime numbers", () => {
        //arrange
        const expectedFactors = [1, 29];
        const inputNumber = 29;

        //act
        const result = EulerFunctions.calculateFactors(inputNumber);

        //assert
        assert.equal(result.length, expectedFactors.length);
        assert.equal(result[0], expectedFactors[0]);
        assert.equal(result[1], expectedFactors[1]);
    });

    it("returns correct factors for the general case", () => {
        //arrange
        const expectedFactors = [1, 2, 4, 5, 10, 20, 25, 50, 100];
        const inputNumber = 100;

        //act
        const result = EulerFunctions.calculateFactors(inputNumber).sort(compareNumbers);

        //assert
        assert.equal(result.length, expectedFactors.length);
        assert.equal(result[0], expectedFactors[0]);
        assert.equal(result[1], expectedFactors[1]);
        assert.equal(result[2], expectedFactors[2]);
        assert.equal(result[3], expectedFactors[3]);
        assert.equal(result[4], expectedFactors[4]);
        assert.equal(result[5], expectedFactors[5]);
        assert.equal(result[6], expectedFactors[6]);
        assert.equal(result[7], expectedFactors[7]);
        assert.equal(result[8], expectedFactors[8]);
    });
});

describe("isPrime", () => {
    it("returns true for prime numbers", () => {
        //arrange
        const inputNumber = 13;

        //act
        const result = EulerFunctions.isPrime(inputNumber);

        //assert
        assert.isTrue(result);
    });

    it("returns false for non-prime numbers", () => {
        //arrange
        const inputNumber = 12;

        //act
        const result = EulerFunctions.isPrime(inputNumber);

        //assert
        assert.isFalse(result);
    });
});