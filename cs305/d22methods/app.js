"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {Number} startingValue the starting value to be accumlated
 * @param {Number} increment increments by this number
 * @returns {undefined}
 */
function Accumulator(startingValue, increment) {
  this.currentValue = startingValue;
  this.increment = increment;

  this.accumulate = function () {
    this.currentValue += this.increment;
    return this.currentValue;
  };

  this.report = function () {
    return this.currentValue;
  };
}

/**
 * @returns{undefined}
 */
function Calculator() {
  this.aaa = 0;
  this.bbb = 0;
  this.setValues = function (aaa, bbb) {
    this.aaa = aaa;
    this.bbb = bbb;
  };
  this.sum = function () {
    return this.aaa + this.bbb;
  };
  this.mul = function () {
    return this.aaa * this.bbb;
  };
}
