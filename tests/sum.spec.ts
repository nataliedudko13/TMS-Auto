import assert  from "assert"
import {calculate } from "../src/calculate"

describe("Сложение двух чисел", () => {
    it("Correct sum", () => {
        expect(calculate(10, 2,'+')).toBe(12);
    })
    it("Checking sum of 2 decimal numbers", () => {
        expect(calculate(10.5, 2.3, '+')).toBe(12.8);
    })
    it("Checking sum from 0", () => {
        expect(calculate(3, 0, '+')).toBe(3);
    })
   
});












// assert.equal(calculate([1, 2]), [3] , "Error")
