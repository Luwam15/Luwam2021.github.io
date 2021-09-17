"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {
  doubleNums,
  doubleAges,
  filterEven,
  filterOver10,
  findEvenNum,
  findEvenAge,
}; //add all of your function names here that you need for the node mocha tests

function doubleNums(arr) {
  return arr.map((num) => num * 2);
}

function doubleAges(arr) {
  let newArr = arr.map(function (person) {
    let newPerson = person;
    newPerson.age = person.age * 2;
    return newPerson;
  });
  return newArr;
}

function filterEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}

function filterOver10(arr) {
  return arr.filter((person) => person.age > 10);
}

function findEvenNum(arr) {
  return arr.find((item) => item % 2 === 0);
}

function findEvenAge(arr) {
  arr.find((person) => person.age % 2 === 0);
}

function includesEvenNum(arr) {
  return arr.includes((item) => item % 2 === 0);
}

function includesEvenAge(arr) {
  return arr.includes((person) => person.age % 2 === 0);
}
