"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = {
//   groupById,
//   unique,
//   filterRangeInPlace,
//   filterRange,
//   Calculator,
// }; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @param {Array} arr to be filtered from
 * @param {number} min the minimum range
 * @param {number} max the maximum range
 * @returns {Array} resultArr containing the numbers in range
 */
function filterRange(arr, min, max) {
  let resultArr = arr.filter((item) => item >= min && item <= max);
  return resultArr;
}

/**
 *
 * @param {Array} arr is the array to be filtered in place
 * @param {number} min the minimum range
 * @param {number} max the maximum range
 *  @returns {undefined}
 */
function filterRangeInPlace(arr, min, max) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] <= min || arr[i] >= max) {
      arr.splice(i, 1);
    }
  }
}

/**
 * {object}
 */
function Calculator() {
  this.calculations = {
    "-": (first, second) => first - second,
    "+": (first, second) => first + second,
  };

  this.calculate = function (str) {
    let splited = str.split(" "),
      first = +splited[0],
      operator = splited[1],
      second = +splited[2];

    if (!this.calculations[operator] || isNaN(first) || isNaN(second)) {
      return NaN;
    }

    return this.calculations[operator](first, second);
  };

  this.addMethod = function (name, func) {
    this.calculations[name] = func;
  };
}

/**
 *
 * @param {Array} arr containing the names
 * @returns {Array} temp
 */
function unique(arr) {
  if (arr.length == 0) return arr;
  let temp = [arr[0]];
  for (let name of arr) {
    if (temp.indexOf(name) == -1) {
      temp.push(name);
    }
  }
  return temp;
}

/**
 *
 * @param {Array} arr the object array
 * @returns{object} newObj
 */
function groupById(arr) {
  let newObj = {};
  let nameId;
  for (let oneObj of arr) {
    nameId = oneObj.id;
    newObj[nameId] = oneObj;
  }

  return newObj;
}
