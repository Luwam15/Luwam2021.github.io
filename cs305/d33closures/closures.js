"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = { inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 *
 */
function inArray(arr) {
  return function (num) {
    for (let item of arr) {
      if (item === num) {
        return true;
      }
    }
    return false;
  };
}

/**
 *
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 *
 */
function inBetween(low, high) {
  return function (num) {
    if (num <= high && num >= low) {
      return true;
    }
    return false;
  };
}

/**
 *
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName) {
  if (fieldName == "name") {
    return function (firstObj, secondObj) {
      return firstObj.name.localeCompare(secondObj.name);
    };
  } else if (fieldName === "age") {
    return function (firstObj, secondObj) {
      return firstObj.age - secondObj.age;
    };
  } else if (fieldName === "surname") {
    return function (firstObj, secondObj) {
      return firstObj.surname.localeCompare(secondObj.surname);
    };
  }
}

/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
  const shooters = [];

  for (let index = 0; index < 10; index++) {
    let shooter = function () {
      console.log("I am shooter ", index);
      return index;
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
