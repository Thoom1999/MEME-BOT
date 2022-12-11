const { findNumber } = require("../helper/findNumber");
const assert = require("assert");

describe("Find Numbers Tests", () => {
    it("Find one number in sentence", () => {
        assert.equal(findNumber("J'ai 10000€"), "10000")
    });

    it("return 0 if no number in sentence", () => {
        assert.equal(findNumber("coucou"), 0)
    });
});
