"use strict";

//module.exports = { double, times100, myMap };
/**
 *
 * @param {Number} num the number to be doubled
 * @returns{Number} doubled number
 */
function double(num) {
  return 2 * num;
}
/**
 *
 * @param {Number} num is the number to be doubled
 * @returns {Number} the number multiplied by 100
 */
function times100(num) {
  return 100 * num;
}

/**
 *
 * @param {Array} arr in which operation of the function is to be done
 * @param {Function} myFun the function for the array
 * @returns {Array} the new array
 */
function myMap(arr, myFun) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(myFun(arr[i]));
  }
  return newArr;
}

let arr1 = [1, 2, 3];

let mapDemonstration = myMap(arr1, function (num) {
  return num * 3;
});
console.log(mapDemonstration);
