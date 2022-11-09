const caesarCipher = require("./caesarCipher");

describe("caesarCipher", () => {
    test("shifts letters across a-z (lowercase)", () => {
        expect(caesarCipher("zebra")).toMatch("ejgwf");
    });

    test("shifts letters across a-z (uppercase)", () => {
        expect(caesarCipher("Zebra")).toMatch("Ejgwf");
    });

    test("shifts letters and keeps the same punctuation", () => {
        expect(caesarCipher("We-are_here to FIGHT!")).toMatch(
            "Bj-fwj_mjwj yt KNLMY!"
        );
    });
});
