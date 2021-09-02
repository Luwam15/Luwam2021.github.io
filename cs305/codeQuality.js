<<<<<<< HEAD
"use strict";

module.exports = {
  isVowel,
  computeCommission,
  calcDownpayment,
  convertFahrenheit,
  compoundInterest,
  calcDistance,
};
/**
 * checks if the letter is vowel
 * @param {String} letter1 is the letter to be checked
 * @returns {Boolean} true or false
 */
function isVowel(letter1) {
  if (
    letter1 === "a" ||
    letter1 === "e" ||
    letter1 === "i" ||
    letter1 === "o" ||
    letter1 === "u" ||
    letter1 === "A" ||
    letter1 === "E" ||
    letter1 === "I" ||
    letter1 === "O" ||
    letter1 === "U"
  )
    return true;
  return false;
}
/**
 * computes commision
 * @param {Boolean} isSalariedAccount is the status of salary
 * @param {Number} salesAmount is the sale amount
 * @returns {Number}commision
 */
function computeCommission(isSalariedAccount, salesAmount) {
  let commission;
  if (isSalariedAccount == true) {
    if (salesAmount < 300) {
      commission = 0;
    } else if (salesAmount < 500) {
      commission = salesAmount * 0.01;
    } else {
      commission = salesAmount * 0.02;
    }
  } else if (isSalariedAccount == false) {
    if (salesAmount < 300) {
      commission = 0;
    } else if (salesAmount >= 300 && salesAmount <= 500) {
      commission = salesAmount * 0.02;
    } else if (salesAmount > 500) {
      commission = salesAmount * 0.03;
    }
  }
  return commission;
}

/**
 * computes downpayment for given cost
 * @param {Number} cost is the input
 * @returns {Number} downPayment
 */
function calcDownpayment(cost) {
  let downPayment;
  if (cost < 0) return;
  if (cost < 50000) {
    downPayment = 0.05 * cost;
  } else if (cost < 100000) {
    downPayment = 2500 + 0.1 * (cost - 50000);
  } else if (cost < 200000) {
    downPayment = 7500 + 0.15 * (cost - 100000);
  } else if (cost >= 200000) {
    downPayment = 5000 + 0.1 * (cost - 200000);
  }
  return downPayment;
}
/**
 *
 * @param {Number} initialAmount  is the initial balance
 * @param {Number} annualInterestRate is the annual interest rate
 * @param {Number} years is number of years to compute
 * @returns {Number} compund interest
 */
function compoundInterest(initialAmount, annualInterestRate, years) {
  let interst =
    initialAmount * Math.pow(1 + annualInterestRate / 100 / 12, years * 12) -
    initialAmount;
  return interst + initialAmount;
}

/**
 * computes from fahrenheit to celcius
 * @param {Number} fahrenheitTemp is temp in fahrenheit to be computed
 * @returns {Number} temp in celcius
 */
function convertFahrenheit(fahrenheitTemp) {
  let celsius = (fahrenheitTemp - 32) * (5 / 9);
  return celsius;
}
/**
 *
 * @param {Number} xp1 is x coordinate of point 1
 * @param {Number} yp1 is y coordinate of point 1
 * @param {Number} xp2 is x coordinate of point 2
 * @param {Number} yp2 is y coordinate of point 2
 * @returns {Number} distance
 */
function calcDistance(xp1, yp1, xp2, yp2) {
  let distance = Math.sqrt(Math.pow(xp2 - xp1, 2) + Math.pow(yp2 - yp1, 2));
  return distance;
}
=======
"use strict";

module.exports = {
  isVowel,
  computeCommission,
  calcDownpayment,
  convertFahrenheit,
  compoundInterest,
  calcDistance,
};
/**
 * checks if the letter is vowel
 * @param {String} letter1 is the letter to be checked
 * @returns {Boolean} true or false
 */
function isVowel(letter1) {
  if (
    letter1 === "a" ||
    letter1 === "e" ||
    letter1 === "i" ||
    letter1 === "o" ||
    letter1 === "u" ||
    letter1 === "A" ||
    letter1 === "E" ||
    letter1 === "I" ||
    letter1 === "O" ||
    letter1 === "U"
  )
    return true;
  return false;
}
/**
 * computes commision
 * @param {Boolean} isSalariedAccount is the status of salary
 * @param {Number} salesAmount is the sale amount
 * @returns {Number}commision
 */
function computeCommission(isSalariedAccount, salesAmount) {
  let commission;
  if (isSalariedAccount == true) {
    if (salesAmount < 300) {
      commission = 0;
    } else if (salesAmount < 500) {
      commission = salesAmount * 0.01;
    } else {
      commission = salesAmount * 0.02;
    }
  } else if (isSalariedAccount == false) {
    if (salesAmount < 300) {
      commission = 0;
    } else if (salesAmount >= 300 && salesAmount <= 500) {
      commission = salesAmount * 0.02;
    } else if (salesAmount > 500) {
      commission = salesAmount * 0.03;
    }
  }
  return commission;
}

/**
 * computes downpayment for given cost
 * @param {Number} cost is the input
 * @returns {Number} downPayment
 */
function calcDownpayment(cost) {
  let downPayment;
  if (cost < 0) return;
  if (cost < 50000) {
    downPayment = 0.05 * cost;
  } else if (cost < 100000) {
    downPayment = 2500 + 0.1 * (cost - 50000);
  } else if (cost < 200000) {
    downPayment = 7500 + 0.15 * (cost - 100000);
  } else if (cost >= 200000) {
    downPayment = 5000 + 0.1 * (cost - 200000);
  }
  return downPayment;
}
/**
 *
 * @param {Number} initialAmount  is the initial balance
 * @param {Number} annualInterestRate is the annual interest rate
 * @param {Number} years is number of years to compute
 * @returns {Number} compund interest
 */
function compoundInterest(initialAmount, annualInterestRate, years) {
  let interst =
    initialAmount * Math.pow(1 + annualInterestRate / 100 / 12, years * 12) -
    initialAmount;
  return interst + initialAmount;
}

/**
 * computes from fahrenheit to celcius
 * @param {Number} fahrenheitTemp is temp in fahrenheit to be computed
 * @returns {Number} temp in celcius
 */
function convertFahrenheit(fahrenheitTemp) {
  let celsius = (fahrenheitTemp - 32) * (5 / 9);
  return celsius;
}
/**
 *
 * @param {Number} xp1 is x coordinate of point 1
 * @param {Number} yp1 is y coordinate of point 1
 * @param {Number} xp2 is x coordinate of point 2
 * @param {Number} yp2 is y coordinate of point 2
 * @returns {Number} distance
 */
function calcDistance(xp1, yp1, xp2, yp2) {
  let distance = Math.sqrt(Math.pow(xp2 - xp1, 2) + Math.pow(yp2 - yp1, 2));
  return distance;
}
>>>>>>> efbc8b5b6b048a84c6c8689c46d729f730c2101c
