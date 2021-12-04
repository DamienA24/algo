import assert from "assert";

import { findMaxZeroQuantity } from "../algo/zeroBinary.js";

describe("Quantities zero", function () {
  it("should be find one zero", function () {
    assert.equal(findMaxZeroQuantity(10), 1);
  });
});

describe("Quantities zero", function () {
  it("should be find two zero", function () {
    assert.equal(findMaxZeroQuantity(4), 2);
  });
});

describe("Quantities zero", function () {
  it("should fail if negative integer ", function () {
    assert.equal(findMaxZeroQuantity(-24), -1);
  });
});

describe("Quantities zero", function () {
  it("should fail if value not safe ", function () {
    assert.equal(findMaxZeroQuantity(9007199254740992), -1);
  });
});

describe("Quantities zero", function () {
  it("should fail if value  NaN", function () {
    assert.equal(findMaxZeroQuantity("245"), -1);
  });
});

describe("Quantities zero", function () {
  it("should fail if value  is decimal", function () {
    assert.equal(findMaxZeroQuantity(24.7), -1);
  });
});
