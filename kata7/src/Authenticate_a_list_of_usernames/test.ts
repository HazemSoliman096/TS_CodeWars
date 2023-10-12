import { assert } from "chai";
import { authList } from "./kata";

describe("solution", () => {
  it("fixed tests", () => {
    const usernames1 = ['john123', 'alex222', 'sandra1'];
    const usernames2 = ['john123', 'alex222', 'sandraW'];
    const usernames3 = ['john_123', 'alex222', 'sandra1'];
    const usernames4 = [''];
    const usernames5 = ['123456'];
    const usernames6 = ['abcdef'];
    const usernames0 = ['qqUMV.TB&jp'];
    const usernames9 = ['86C0', 'O.@Y0xPXCjv3jE9', 'tWaQ'];
    const usernames8 = ['keHItJnR@a7', 'BdUsMNnxmC2k49g_'];
    const usernames7 = ['xtiZ00xJ#._I'];

    assert.equal(authList(usernames1), true);
    assert.equal(authList(usernames2), false);
    assert.equal(authList(usernames3), false);
    assert.equal(authList(usernames4), false);
    assert.equal(authList(usernames5), false);
    assert.equal(authList(usernames6), false);
    assert.equal(authList(usernames0), false);
    assert.equal(authList(usernames9), false);
    assert.equal(authList(usernames8), false);
    assert.equal(authList(usernames7), false);
  });
});
