const capitalize = require("./capitalize");

describe("capitalize", () => {
    test("capitalizes first character", () => {
        expect(capitalize("hello")).toMatch("Hello");
    });

    test("capitalizes first character in a sentence", () => {
        expect(capitalize("this should be capitalized")).toMatch(
            "This should be capitalized"
        );
    });
});
