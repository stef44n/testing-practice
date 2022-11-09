const analyzeArray = require("./analyzeArray");

describe("analyzeArray", () => {
    test("computes the lengths of the input array", () => {
        expect(
            analyzeArray.analyzeArray().length([1, 2, 3, 4, 5, 6, 7, 8])
        ).toBe(8);
    });

    // test.skip("capitalizes first character in a sentence", () => {
    //     expect(analyzeArray("this should be capitalized")).toMatch(
    //         "This should be capitalized"
    //     );
    // });
});
