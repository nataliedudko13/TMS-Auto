import assert  from "assert"
import {calculate } from "../src/calculate"

describe("Вычесление процента", () => {
    it("Checking percent", () => {
        expect(calculate(32, 2,'%')).toBe(0.64);
    })
});