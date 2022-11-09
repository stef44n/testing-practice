const caesarCipher = require("./caesarCipher");

describe("caesarCipher", () => {
    test("shifts letters across a-z (lowercase)", () => {
        expect(caesarCipher("zebra")).toMatch("ejgwf");
    });

    test.skip("shifts letters across a-z (uppercase)", () => {
        expect(caesarCipher("Zebra")).toMatch("Ejgwf");
    });
});
