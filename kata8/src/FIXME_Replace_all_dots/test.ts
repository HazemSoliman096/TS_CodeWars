import { assert } from "chai";
import { replaceDots } from "./kata";

describe("FIXME: Replace all dots", () => {
  it("Fixed tests", () => {
    assert.strictEqual(replaceDots(""), "");
    assert.strictEqual(replaceDots("no dots"), "no dots");
    assert.strictEqual(replaceDots("one.two.three"), "one-two-three");
    assert.strictEqual(replaceDots("..."), "---");
  });
});
