"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
// module.exports = {
//   maxOfThree,
//   sum,
//   multiply,
//   reverseArray,
//   reverseArrayInPlace,
//   scoreExams,
//   findLongestWord,
// }; //add all of your function names here that you need for the node mocha tests
("use strict");
//1. function maxOfThree()

/**
 *
 * @param {Number} num1 is first number
 * @param {Number} num2 is second number
 * @param {Number} num3 is third number
 * @returns {Number} the maximum of the three
 */
function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) return num1;
  else if (num2 >= num1 && num2 >= num3) return num2;
  else return num3;
}

//.......................................................

//2. function sum()
/**
 *
 * @param {Array} arr its members to be added
 * @returns {Number} sum of the members of the array
 */
function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
/**
 *
 * @param {Array} arr contains numbers to be multiply
 * @returns {Number} product
 */
function multiply(arr) {
  let product = 1;
  for (let num of arr) {
    product *= num;
  }
  return product;
}

//........................................

//3.findLongestWord()
/**
 *
 * @param {Array} arr is the array containing words
 * @returns {Number} longest word's length
 */
function findLongestWord(arr) {
  if (arr.length == 0) return;
  let longest = arr[0];
  for (let word of arr) {
    if (word.length > longest.length) longest = word;
  }
  return longest.length;
}

//....................................................

//4.Reverse an Array

/**
 *
 * @param {Array} arr to be reversed
 * @returns {Array} result reversed
 */
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
/**
 * reveses the original array in place
 * @param {Array} arr to be reversed
 * @returns{undefined}
 */
function reverseArrayInPlace(arr) {
  let arrCopy = arr.slice(0);
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arrCopy[arr.length - 1 - i];
  }
  return arr;
}

//..........................................

/*
5. scoreExams
*/
/**
 *function scoreExams computes student answers and returns 
 an array holding the scores of each student. 
 * @param {Array} studentAnswers the students answer
 * @param {Array} correctAnswers the correct answers
 * @returns {Array} the result
 */
function scoreExams(studentAnswers, correctAnswers) {
  let result = [];
  for (let oneStudentAnswer of studentAnswers) {
    let index = 0;
    let oneResult = 0;
    for (let eachAnswer of oneStudentAnswer) {
      if (eachAnswer === correctAnswers[index]) {
        oneResult++;
      }
      index++;
    }
    result.push(oneResult);
  }
  return result;
}
