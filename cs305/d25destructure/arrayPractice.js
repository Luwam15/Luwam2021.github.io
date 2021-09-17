"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = {
//   doubleNums,
//   doubleAges,
//   filterEven,
//   filterOver10,
//   findEvenNum,
//   findEvenAge,
// }; //add all of your function names here that you need for the node mocha tests
/**
 *
 * @param {object} arr number array
 * @returns {object} newArray of doubled items
 */
function doubleNums(arr) {
  return arr.map((num) => num * 2);
}
/**
 *
 * @param {object} arr array of people
 * @returns {object} array of prople with doubled ages
 */
function doubleAges(arr) {
  return arr.map((person) => ({ name: person.name, age: person.age * 2 }));
}
/**
 *
 * @param {object} arr number array
 * @returns {object} newArray of filtered even items
 */
function filterEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}
/**
 *
 * @param {object} arr array of people
 * @returns {object} array of prople with  ages>10
 */
function filterOver10(arr) {
  return arr.filter((person) => person.age > 10);
}
/**
 *
 * @param {object} arr number array
 * @returns {object}  the first even items
 */
function findEvenNum(arr) {
  return arr.find((item) => item % 2 === 0);
}
/**
 *
 * @param {object} arr array of people
 * @returns {object} a person with even age
 */
function findEvenAge(arr) {
  return arr.find((person) => person.age % 2 === 0);
}
/**
 *
 * @param {object} arr number array
 * @returns {boolean}  true or false for existence of even number
 */
function includesEvenNum(arr) {
  arr.includes((item) => item % 2 === 0);
}
/**
 *
 * @param {object} arr array of people
 * @returns {boolean}  true or false for existence of person with even age
 */
function includesEvenAge(arr) {
  let evenAge = arr.includes((person) => person.age % 2 === 0);
  if (evenAge != undefined) return true;
  return false;
}
