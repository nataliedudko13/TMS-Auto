import assert  from "assert"
import {calculate } from "../src/calculate"

describe("Вычитание двух чисел", () => {
    it("Сhecking subtraction of 2 integers", () => {
        expect(calculate(10, 2,'-')).toBe(8);
    })
    it("Checking subtraction of 2 decimal numbers", () => {
        expect(calculate(10.5, 2.3, '-')).toBe(8.2);
    })
    it("Checking subtraction from 0", () => {
        expect(calculate(3, 0, '-')).toBe(3);
    })
    
});