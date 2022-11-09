const calculator = require("./calculator");

describe("add", () => {
    test("adds 0 and 0", () => {
        expect(calculator.calculator().add(0, 0)).toBe(0);
    });

    test("adds 2 and 2", () => {
        expect(calculator.calculator().add(2, 2)).toBe(4);
    });

    test("adds positive numbers", () => {
        expect(calculator.calculator().add(2, 6)).toBe(8);
    });
});

describe("subtract", () => {
    test("subtracts numbers", () => {
        expect(calculator.calculator().subtract(10, 4)).toBe(6);
    });
});

describe("sum", () => {
    test("computes the sum of an empty array", () => {
        expect(calculator.calculator().sum([])).toBe(0);
    });

    test("computes the sum of an array of one number", () => {
        expect(calculator.calculator().sum([7])).toBe(7);
    });

    test("computes the sum of an array of two numbers", () => {
        expect(calculator.calculator().sum([7, 11])).toBe(18);
    });

    test("computes the sum of an array of many numbers", () => {
        expect(calculator.calculator().sum([1, 3, 5, 7, 9])).toBe(25);
    });
});

describe("multiply", () => {
    test("multiplies two numbers", () => {
        expect(calculator.calculator().multiply([2, 4])).toBe(8);
    });

    test("multiplies several numbers", () => {
        expect(calculator.calculator().multiply([2, 4, 6, 8, 10, 12, 14])).toBe(
            645120
        );
    });
});
