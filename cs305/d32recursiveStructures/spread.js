"use strict";

const { log } = require("console");

// const { log } = require("console");

// /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
//  */
module.exports = { copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests
//
function TreeNode(value) {
  this.value = value;
  this.descendents = [];
}
// create nodes with values
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);
/**
 *
 * @param {object} root to iterate its names
 * @returns {undefined}
 */
function logNames(root) {
  console.log(root.value);
  if (root.descendents.length != 0) {
    for (let i = 0; i < root.descendents.length; i++) {
      logNames(root.descendents[i]);
    }
  }
}
/**
 *
 * @param {object} tree the node to be searched in
 * @param {string} name the name to be searched
 * @returns{boolean} true or false
 */
function contains(tree, name) {
  if (tree.value == name) return true;
  if (tree.descendents && tree.descendents.length > 0) {
    for (let item of tree.descendents) {
      if (contains(item, name)) {
        return true;
      }
    }
  }
  return false;
}

/**
 *
 * @param {object} tree to be searched in
 * @param {string} value the subTree with this string to be searched
 * @returns{object} the subtree containing the value
 */
function findSubTree(tree, value) {
  if (tree.value == value) return tree;
  else if (tree.descendents != 0) {
    for (let ch of tree.descendents) {
      if (contains(ch, value)) {
        return findSubTree(ch, value);
      }
    }
  }
  return null;
}

function ListNode(node, next) {
  this.node = node;
  this.next = next;
}

let listNode = new ListNode("abe.value");
let maggieNode = new ListNode("maggie.value", null);
let lisaNode = new ListNode("lisa.value", maggieNode);
let bartNode = new ListNode("bart.value", lisaNode);
let homerNode = new ListNode("homer.value", bartNode);
let abeNode = new ListNode("abe.value", homerNode);
/**
 *prints out new created list of simpsons
 *@returns {undefined}
 */
function createList() {
  let listNode = new ListNode(abe.value);
  listNode.next = new ListNode(homer.value);
  listNode.next.next = new ListNode(bart.value);
  listNode.next.next.next = new ListNode(lisa.value);
  listNode.next.next.next.next = new ListNode(maggie.value);
  console.log(JSON.stringify(listNode));
}

/**
 *
 * @param {object} list the node to be searched in
 * @param {object} target the node to be searched
 * @returns {object} the node containing it
 */
function findListNode(list, target) {
  if (list.node == target) return list;
  if (list.next == null) return null;
  return findListNode(list.next, target);
}

/**
 *
 * @param {object} node to be capitalized
 * @returns{undefined}
 */
function allCaps(node) {
  node.value = node.value.toUpperCase();
}
/**
 *
 * @param {object} node its value to be added with *** before and after
 */
function addStars(node) {
  node.value = "***" + node.value + "***";
}
/**
 *
 * @param {object} node itsvalue to be reversed
 * @returns {undefined}
 */
function reverseNode(node) {
  let temp = [...node.value];
  let a = temp.reverse();
  let b = a.join("");
  node.value = b;
}
/**
 *
 * @param {object} tree the tree nodes to be modified by the passed function
 * @param {object} modiferFunc the function to modify the passed tree
 */
function treeModifier(tree, modiferFunc) {
  modiferFunc(tree);
  if (tree.descendents.length != 0) {
    for (let ch of tree.descendents) treeModifier(ch, modiferFunc);
  }
}
let accomulatedName = [];
/**
 *
 * @param {object} tree its nodes name to be collected
 * @returns{object} accomulatedName the accomulated names
 */
function treeCollector(tree) {
  accomulatedName.push(tree.value);
  if (tree.descendents.length > 0) {
    for (let ch of tree.descendents) {
      treeCollector(ch);
    }
  }
}
/**
 *
 * @param {object} arr the array to be copied
 * @returns {object} new clone array
 */
function copyArray(arr) {
  return [...arr];
}
/**
 *
 * @param {object} arr1 the first array to be copied
 * @param {object} arr2 the second array to be copied
 * @returns {object} new array of the two
 */
function concat(arr1, arr2) {
  return [...arr1, ...arr2];
}
/**
 *
 * @param  {...any} numbers the argument to be
 * @returns {number } minimum of all
 */
function findMin(...numbers) {
  let min = Number.MAX_VALUE;
  for (let num of numbers) {
    if (num < min) min = num;
  }
  return min;
}
/**
 *
 * @param {object} obj1 the firt object to be copied
 * @param {object} obj2 the second object to be copied
 * @returns {object} new combination object
 */
function combineObjs(obj1, obj2) {
  let newObj = {
    ...obj1,
    ...obj2,
  };
  return newObj;
}
