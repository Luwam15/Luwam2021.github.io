"use strict";
const { log } = require("console");

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
/**
 *
 * @param {object} list  the node to be iterated from
 * @returns {undefined}
 */
function outputList(list) {
  if (list.next == null) {
    console.log(list.value);
  } else {
    console.log(list.value);
    outputList(list.next);
  }
}
/**
 * @param {object} list  the node to be iterated from
 * @returns {undefined}
 */
function outputListLoop(list) {
  while (list != null) {
    console.log(list.value);
    list = list.next;
  }
}
/**
 *  @param {object} list  the node to be iterated from
 * @returns {undefined}
 */
function reverseList(list) {
  if (list.next == null) console.log(list.value);
  else {
    reverseList(list.next);
    console.log(list.value);
  }
}
/**
 *  @param {object} list  the node to be iterated from
 * @returns {undefined}
 */
function reverseListLoop(list) {
  if (list.next != null) {
    let list1 = list.next;
    if (list1.next != null) {
      let list2 = list1.next;
      if (list2.next != null) {
        let list3 = list2.next;
        if (list3.next != null) {
          let list4 = list3.next;
          console.log(list4.value);
        }
        console.log(list3.value);
      }
      console.log(list2.value);
    }
    console.log(list1.value);
  }
  console.log(list.value);
}
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null,
};
let node4 = {
  name: "label",
  value: "Name",
  children: null,
};
let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null,
};
let node2 = {
  name: "div",
  value: null,
  children: [node4, node5],
};
let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
};
let result = [];
/**
 *
 * @param {object} node the node whose name and
 * childrens name to be returned
 * @returns{object} array of names
 */
function returnReverseList(node) {
  if (node.children == null) {
    result.unshift(`${node.name}: ${node.value}`);
  } else {
    result.unshift(`${node.name}: ${node.value}`);
    for (let i = 0; i < node.children.length; i++) {
      returnReverseList(node.children[i], result);
    }
  }
  return result;
}
/**
 *
 * @param {object} node whose name to be printed
 * @returns{undefined}
 */
function logNameValueRec(node) {
  if (node.children == null) {
    console.log(`${node.name}: ${node.value}`);
  } else {
    console.log(`${node.name}: ${node.value}`);
    for (let i = 0; i < node.children.length; i++) {
      logNameValueRec(node.children[i]);
    }
  }
}
/**
 *
 * @param {object} node whose name and values to be printed
 * @returns {undefined}
 */
function logNameValueIter(node) {
  console.log(`${node.name}: ${node.value}`);
  if (node.children != null) {
    for (let i = 0; i < node.children.length; i++) {
      let node2 = node.children[i];
      console.log(`${node2.name}: ${node2.value}`);

      if (node2.children != null) {
        for (let i = 0; i < node2.children.length; i++) {
          let node3 = node2.children[i];
          console.log(`${node3.name}: ${node3.value}`);
        }
      }
    }
  }
}
let result2 = [];
/**
 *
 * @param {object} node whose name and values to be returned in and array
 * @returns {object} array of names
 */
function findNameValueIter(node) {
  result2.push(`${node.name}: ${node.value}`);
  if (node.children != null) {
    for (let i = 0; i < node.children.length; i++) {
      let node2 = node.children[i];
      result2.push(`${node2.name}: ${node2.value}`);

      if (node2.children != null) {
        for (let i = 0; i < node2.children.length; i++) {
          let node3 = node2.children[i];
          result2.push(`${node3.name}: ${node3.value}`);
        }
      }
    }
  }
  return result;
}
