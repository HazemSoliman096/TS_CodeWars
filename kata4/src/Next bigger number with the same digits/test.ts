import { assert } from "chai";
import { nextBigger } from "./kata";

describe("Basic tests", () => {
  it("Small numbers", () => {
    assert.strictEqual(nextBigger(12), 21);
    assert.strictEqual(nextBigger(513), 531);
    assert.strictEqual(nextBigger(2017), 2071);
    assert.strictEqual(nextBigger(414), 441);
    assert.strictEqual(nextBigger(144), 414);
    assert.strictEqual(nextBigger(770986), 776089);
    assert.strictEqual(nextBigger(5399984), 5438999);
    assert.strictEqual(nextBigger(33975333), 35333379);
  });
  it("Bigger numbers", () => {
    assert.strictEqual(nextBigger(123456789), 123456798);
    assert.strictEqual(nextBigger(1234567890), 1234567908);
    assert.strictEqual(nextBigger(9876543210), -1);
    assert.strictEqual(nextBigger(9999999999), -1);
    assert.strictEqual(nextBigger(59884848459853), 59884848483559);
    assert.strictEqual(nextBigger(700068127432), 700068132247);
    assert.strictEqual(nextBigger(428090852), 428092058);
    assert.strictEqual(nextBigger(2109468031964), 2109468034169);
    assert.strictEqual(nextBigger(390304155915521), 390304155921155);
    assert.strictEqual(nextBigger(8586910976), 8586916079);
    assert.strictEqual(nextBigger(428063530431972), 428063530432179);
    assert.strictEqual(nextBigger(43952770874), 43952774078);
  });
});
