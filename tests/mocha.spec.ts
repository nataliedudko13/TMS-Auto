import  assert  from "assert"
import { Methods } from "../src/methods"
import { calculate } from "../src/calculate";
//import { notEqualMessage } from "../const/const.ts"

describe("Adding two numbers", () => {
   
 it("Correct sum", () => {
   assert.deepEqual(calculate(2, 3, '+'), 5);
 });
 it("Correct sum", () => {
    assert.deepEqual(calculate(0, 3, '+'), 3);
  });
});

describe("Division of two numbers", () => {
   
    it("Correct divide", () => {
      assert.deepEqual(calculate(2, 3, '/'), 0.6666666666666666);
    });
    it("Correct divide", () => {
       assert.deepEqual(calculate(3, 3, '/'), 1);
     });
   });

   describe("Subtracting two numbers", () => {
   
    it("Correct minus", () => {
      assert.deepEqual(calculate(2, 3, '-'), -1);
    });
    it("Correct minus", () => {
       assert.deepEqual(calculate(3, 3, '-'), 0);
     });
   });