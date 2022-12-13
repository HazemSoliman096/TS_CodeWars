import solution = require('./kata');
import {assert} from "chai";

describe("Basic tests", function(){
  it("ex1", function() {
    assert.equal(solution.areaOfPolygonInsideCircle(3, 3), 11.691);
  });
  
  it("ex2", function() {
    assert.equal(solution.areaOfPolygonInsideCircle(2, 4), 8);
  });
  
  it("ex3", function() {
    assert.equal(solution.areaOfPolygonInsideCircle(2.5, 5), 14.86);
  });
});