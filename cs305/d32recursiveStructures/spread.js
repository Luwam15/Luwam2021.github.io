/*eslint-disable*/
"use strict";

// const { log } = require("console");

// /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
//  */
// //module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests

// function TreeNode(value) {
//   this.value = value;
//   this.descendents = [];
// }
// // create nodes with values
// const abe = new TreeNode("Abe");
// const homer = new TreeNode("Homer");
// const bart = new TreeNode("Bart");
// const lisa = new TreeNode("Lisa");
// const maggie = new TreeNode("Maggie");
// abe.descendents.push(homer);
// homer.descendents.push(bart, lisa, maggie);

// function logNames(root) {
//   console.log(root.value);
//   if (root.descendents.length != 0) {
//     for (let i = 0; i < root.descendents.length; i++) {
//       logNames(root.descendents[i]);
//     }
//   }
// }
// logNames(abe);
// function contains(tree, name) {
//   if (tree.value == name) return true;
//   if (tree.descendents && tree.descendents.length > 0) {
//     for (let item of tree.descendents) {
//       if (contains(item, name)) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(contains(abe, "list"));

// /**
//  * Given a target value, return the subtree
//  * with the found node or null if no match. Extend the
// tree to have a more interesting test. Create a
// mocha test to run at least 2 or 3 tests on your tree.
// findSubtree(tree, “Homer”) → subtree with Homer
//  as the root
// */
// function findSubTree(tree, value) {
//   if (tree.value == value) return tree;
//   else if (tree.descendents != 0) {
//     for (let ch of tree.descendents) {
//       if (contains(ch, value)) {
//         return findSubTree(ch, value);

//       }
//     }
//   }
//   return null;
// }
// let result = findSubTree(abe, "Homer");
// logNames(result);
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

// function createList(abe) {
//   let listNode = new ListNode(abe.value);
//   listNode.next = new ListNode(homer.value);
//   listNode.next.next = new ListNode(bart.value);
//   listNode.next.next.next = new ListNode(lisa.value);
//   listNode.next.next.next.next = new ListNode(maggie.value);
//   console.log(JSON.stringify(listNode));
// }

// createList(abe);

/**
 *  Given a target value in the list, return the node 
 * that contains the target value or null if no match.
    findListNode(list, “Bart”)
 */

function findListNode(list, target) {
  if (list.node == target) return list;
  if (list.next == null) return null;
  return findListNode(list.next, target);
}
console.log(findListNode(homerNode, "homer.value"));

// function copyArray(arr) {
//   return [...arr];
// }

// function concat(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// function findMin(...numbers) {}

// function combineObjs(obj1, obj2) {}
