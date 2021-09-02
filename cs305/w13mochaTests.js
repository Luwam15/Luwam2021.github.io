<<<<<<< HEAD
// /**
//  * compute salses commision
//  * @param {Boolean} salaried is true or false
//  * @param {Number} salesAmount is the amount of sale
//  * @returns commision
//  */

// function computeSalesCommission(salaried, salesAmount) {
//   let commission;
//   if (salaried == true) {
//     if (salesAmount < 300) {
//       commission = 0;
//     } else if (salesAmount < 500) {
//       commission = salesAmount * 0.01;
//     } else {
//       commission = salesAmount * 0.02;
//     }
//   } else if (salaried == false) {
//     if (salesAmount < 300) {
//       commission = 0;
//     } else if (salesAmount >= 300 && salesAmount <= 500) {
//       commission = salesAmount * 0.02;
//     } else if (salesAmount > 500) {
//       commission = salesAmount * 0.03;
//     }
//   }
//   return commission;
// }

// const assert = require("assert");
// describe("test of ComputSalesCommission", function () {
//   it("tests salaried and 200 sales", function () {
//     assert.strictEqual(computeSalesCommission(true, 200), 0);
//   });
//   it("tests not salaried and 200 sales", function () {
//     assert.strictEqual(computeSalesCommission(false, 200), 0);
//   });
//   it("tests salaried and 300 sales", function () {
//     assert.strictEqual(computeSalesCommission(true, 300), 3);
//   });
//   it("tests not salaried and 300 sales", function () {
//     assert.strictEqual(computeSalesCommission(false, 300), 6);
//   });
//   it("tests salaried and 3500 sales", function () {
//     assert.strictEqual(computeSalesCommission(true, 3500), 65);
//   });
//   it("tests not salaried and 3500 sales", function () {
//     assert.strictEqual(computeSalesCommission(false, 3500), 100);
//   });
// });

const assert = require("assert");
const methods = require("./codeQuality.js");
const isVowel = methods.isVowel;
const computeSalesCommission = methods.computeSalesCommission;
const calcDownpayment = methods.calcDownpayment;

describe("computeSalesCommission", function () {
  it("computeSalesCommission", function () {});
});

describe("calcDownpayment", function () {
  it("calcDownpayment", function () {
    assert.equal(calcDownpayment());
  });
});

describe("isVowel", function () {
  it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
  });
  it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
  });
  it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
  });
  it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
  });
  it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
  });
  it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
  });
  it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
  });
});
=======
// /**
//  * compute salses commision
//  * @param {Boolean} salaried is true or false
//  * @param {Number} salesAmount is the amount of sale
//  * @returns commision
//  */

// function computeSalesCommission(salaried, salesAmount) {
//   let commission;
//   if (salaried == true) {
//     if (salesAmount < 300) {
//       commission = 0;
//     } else if (salesAmount < 500) {
//       commission = salesAmount * 0.01;
//     } else {
//       commission = salesAmount * 0.02;
//     }
//   } else if (salaried == false) {
//     if (salesAmount < 300) {
//       commission = 0;
//     } else if (salesAmount >= 300 && salesAmount <= 500) {
//       commission = salesAmount * 0.02;
//     } else if (salesAmount > 500) {
//       commission = salesAmount * 0.03;
//     }
//   }
//   return commission;
// }

// const assert = require("assert");
// describe("test of ComputSalesCommission", function () {
//   it("tests salaried and 200 sales", function () {
//     assert.strictEqual(computeSalesCommission(true, 200), 0);
//   });
//   it("tests not salaried and 200 sales", function () {
//     assert.strictEqual(computeSalesCommission(false, 200), 0);
//   });
//   it("tests salaried and 300 sales", function () {
//     assert.strictEqual(computeSalesCommission(true, 300), 3);
//   });
//   it("tests not salaried and 300 sales", function () {
//     assert.strictEqual(computeSalesCommission(false, 300), 6);
//   });
//   it("tests salaried and 3500 sales", function () {
//     assert.strictEqual(computeSalesCommission(true, 3500), 65);
//   });
//   it("tests not salaried and 3500 sales", function () {
//     assert.strictEqual(computeSalesCommission(false, 3500), 100);
//   });
// });

const assert = require("assert");
const methods = require("./codeQuality.js");
const isVowel = methods.isVowel;
const computeSalesCommission = methods.computeSalesCommission;
const calcDownpayment = methods.calcDownpayment;

describe("computeSalesCommission", function () {
  it("computeSalesCommission", function () {});
});

describe("calcDownpayment", function () {
  it("calcDownpayment", function () {
    assert.equal(calcDownpayment());
  });
});

describe("isVowel", function () {
  it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
  });
  it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
  });
  it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
  });
  it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
  });
  it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
  });
  it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
  });
  it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
  });
});
>>>>>>> efbc8b5b6b048a84c6c8689c46d729f730c2101c
