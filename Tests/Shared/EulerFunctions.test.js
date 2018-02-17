import {assert} from "chai";
import {calculateTriangleNumber, calculateFactorCount} from "./../../Shared/EulerFunctions";

describe("calculateTriangleNumber", () => {
    it("generates the expected triangle number", () => {
        //arrange
        const expectedResult = 36;
        const inputNthNumber = 8;

        //act
        const result = calculateTriangleNumber(inputNthNumber);
        
        //assert
        assert.equal(result, expectedResult);
    });

    it("does not attempt to compute invalid triangle numbers", () => {
        //arrange
        const expectedResult = undefined;
        const inputNthNumber = -1;
        
        //act
        const result = calculateTriangleNumber(inputNthNumber);

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
        const result = calculateFactorCount(inputNumber);

        //assert
        assert.equal(result, expectedResult);
    });

    it("calculates the correct count for square numbers", () => {
        //arrange
        const expectedResult = 7;
        const inputNumber = 36;

        //act
        const result = calculateFactorCount(inputNumber);

        //assert
        assert.equal(result, expectedResult);
    });

    it("calculates the correct count for general case", () => {
        //arrange
        const expectedResult = 6;
        const inputNumber = 75;

        //act
        const result = calculateFactorCount(inputNumber);

        //assert
        assert.equal(result, expectedResult);
    });
});