"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {
  ucFirst,
  getMaxSubSum,
  truncate,
  camelize,
  checkSpam,
  extractCurrencyValue,
}; //add all of your function names here that you need for the node mocha tests

function ucFirst(str) {
  let char = str.slice(0, 1);
  char = char.toUpperCase();
  str = char + str.slice(1);
  return str;
}

function checkSpam(str) {
  return str.includes("ViAgRA") || str.includes("xxx");
}
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.slice(0, maxlength - 1);
    return str + "…";
  } else return str;
}
function extractCurrencyValue(str) {
  str = str.slice(1);
  return Number(str);
}

/**
 *
 * @param {} arr
 * @returns
 */
//function getMaxSubSum(arr) {}
function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned
  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }
  return maxSum;
}

function camelize(str) {
  let resStr = "";
  let arr = str.split("-");
  resStr += arr[0];
  for (let i = 1; i < arr.length; i++) {
    let stri = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    resStr += stri;
  }

  return resStr;
}
