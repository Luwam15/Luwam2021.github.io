"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary, getDateAgo }; //add all of your function names here that you need for the node mocha tests

function topSalary(salaries) {
  let high = -Infinity;
  let rich = null;
  for (let [key, value] of Object.entries(salaries)) {
    if (value > high) {
      high = value;
      rich = key;
    }
  }
  return rich;
}

function getDateAgo(date, days) {}
