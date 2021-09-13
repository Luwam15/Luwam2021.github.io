"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = {
  sumTo,
  factorial,
  fibonacci,
  outputList,
  outputListLoop,
  reverseList,
  reverseListLoop,
}; //add all of your function names here that you need for the node mocha tests
/**
 *
 * @param {number} num determineshow far the sum of consucetive numbers
 * @returns {number} sum of the numbers
 */
function sumTo(num) {
  if (num <= 0) return 0;
  if (num === 1) return 1;
  else return num + sumTo(num - 1);
}
/**
 *
 * @param {number} num the number which factorial is to be calculated
 * @returns{number} factorial
 */
function factorial(num) {
  if (num === 1 || num === 0) return 1;
  else return num * factorial(num - 1);
}
/**
 *
 * @param {number} num the index that we wanted
 * @returns{number} fibonaci result
 */
function fibonacci(num) {
  if (num === 1 || num === 2) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2);
}
function outputList(list) {}
function outputListLoop() {}
function reverseList() {}
function reverseListLoop() {}
