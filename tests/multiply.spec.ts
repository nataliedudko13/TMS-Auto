import assert  from "assert"
import {calculate } from "../src/calculate"

describe("Умножение двух чисел", () => {
    it("Сhecking multiplication of 2 integers", () => {
        expect(calculate(10, 2,'*')).toBe(20);
    })
    it("Checking multiplication of 2 decimal numbers", () => {
        expect(calculate(10.5, 2.3, '*')).toBe(24.15);
    })
    it("Checking multiplication by 0", () => {
        expect(calculate(3, 0, '*')).toBe(0);
    })
});