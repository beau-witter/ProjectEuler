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