import assert  from "assert"
import {calculate } from "../src/calculate"

describe("Возведение в степень", () => {
    it("Checking exponentiation", () => {
        expect(calculate(32, 2,'**')).toBe(1024);
    })
    it("Error division by 0", () => {
         expect(() => calculate(5, -6, '**')).toThrow();
    })
    it("Error division by 0", () => {
        expect(() => calculate(-5, 6, '**')).toThrow();
   })
});