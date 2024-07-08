import assert  from "assert"
import {calculate } from "../src/calculate"

describe("Деление двух чисел", () => {
    it("Сhecking division of 2 integers", () => {
        expect(calculate(10, 2,'/')).toBe(5);
    })
    it("Checking division of 2 decimal numbers", () => {
        expect(calculate(10.5, 2.3, '/')).toBe(4.565217391304349);
    })
    it("Error division by 0", () => {
        expect(() => calculate(3, 0, '/')).toThrow();
    })
    it("Error division by 0", () => {
        expect(() => calculate(0, 2, '/')).toThrow();
     })
});