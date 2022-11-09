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
});
