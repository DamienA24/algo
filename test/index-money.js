import assert from "assert";

import { giveMoneyBack } from "../algo/moneyBack.js";

describe("Money back", function () {
  it("should be recover 2 cash billets", function () {
    assert.deepStrictEqual(giveMoneyBack(10, [5, 2, 1]), {
      success: true,
      data: 2,
    });
  });
});

describe("Money back", function () {
  it("should be recover 2 cash billets", function () {
    assert.deepStrictEqual(giveMoneyBack(10, [3, 5, 2, 1]), {
      success: true,
      data: 2,
    });
  });
});

describe("Money back", function () {
  it("should fail if no change ", function () {
    assert.deepStrictEqual(giveMoneyBack(4.4, [10, 3, 2]), {
      success: false,
      data: -1,
    });
  });
});

describe("Money back", function () {
  it("should fail if wrong value ", function () {
    assert.deepStrictEqual(giveMoneyBack("eeee", [10, 3, 2]), {
      success: false,
      data: -1,
    });
  });
});

describe("Money back", function () {
  it("should fail if array cash empty value ", function () {
    assert.deepStrictEqual(giveMoneyBack("25", []), {
      success: false,
      data: -1,
    });
  });
});
