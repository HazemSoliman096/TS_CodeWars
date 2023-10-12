import { expect } from "chai";
import { Cube } from "./kata";

describe("The Cube class", () => {
  it("should initialize properly and have working getters and setters", () => {
    var cube = new Cube(1);
    expect(cube.length).to.equal(1);
    expect(cube.surfaceArea).to.equal(6);
    expect(cube.volume).to.equal(1);

    cube.length = 2;
    expect(cube.surfaceArea).to.equal(24);
    expect(cube.volume).to.equal(8);

    cube.surfaceArea = 54;
    expect(cube.length).to.equal(3);
    expect(cube.volume).to.equal(27);

    cube.surfaceArea = 96;
    expect(cube.length).to.equal(4);
    expect(cube.volume).to.equal(64);

    cube.volume = 125;
    expect(cube.length).to.approximately(5, 0.000001);
    expect(cube.surfaceArea).to.approximately(150, 0.000001);

    cube.volume = 1000;
    expect(cube.length).to.approximately(10, 0.000001);
    expect(cube.surfaceArea).to.approximately(600, 0.000001);
  });
});
