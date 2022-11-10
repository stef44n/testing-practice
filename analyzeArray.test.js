const analyzeArray = require("./analyzeArray");

describe("analyzeArray", () => {
    test("computes the lengths of the input array", () => {
        expect(
            analyzeArray.analyzeArray().length([1, 2, 3, 4, 5, 6, 7, 8])
        ).toBe(8);
    });

    test("computes the average from the input array", () => {
        expect(analyzeArray.analyzeArray().average([10, 15, 25, 30])).toBe(20);
    });

    test("returns the smallest number from the input array", () => {
        expect(analyzeArray.analyzeArray().min([44, 8, 462, 52, 16, 3])).toBe(
            3
        );
    });

    test("returns the largest number from the input array", () => {
        expect(analyzeArray.analyzeArray().max([44, 8, 462, 52, 16, 3])).toBe(
            462
        );
    });

    test("returns the object with properties of average, min, max, and length", () => {
        expect(analyzeArray.analyzeArray().object([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });
});
