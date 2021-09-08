"use strict";
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
*/

const bank = {
  transactionsDB: [],
};

bank.transactionsDB = [
  { customerId: 1, customerTransactions: [10, 50, -40] },
  { customerId: 2, customerTransactions: [10, 10, -10] },
  { customerId: 3, customerTransactions: [5, -5, 55] },
];
bank.find = function (cId) {
  for (let ccc of bank.transactionsDB) {
    if (ccc.customerId === cId) {
      return ccc;
    }
  }
};
bank.saveTransaction = function (cId, amount) {
  let customer = bank.find(cId);
  customer.customerTransactions.push(amount);
};

bank.debit = function (cId, amount) {
  if (amount < bank.getBalance(cId)) {
    amount = amount - 2 * amount;
    this.saveTransaction(cId, amount);
  } else {
    return;
  }
};

bank.credit = function (cId, amount) {
  //   let balance = bank.getBalance(cId);
  //   balance += amount;
  this.saveTransaction(cId, amount);
};

bank.getBalance = function (cId) {
  let balance = 0;
  let customer = bank.find(cId);

  for (let transaction of customer.customerTransactions) {
    balance += transaction;
  }
  return balance;
};

/**
 * @returns {number}  returns sum of all balances
 */
bank.bankBalance = function () {
  let sum = 0;
  for (let cus of bank.transactionsDB) {
    for (let ccc of cus.customerTransactions) {
      sum += ccc;
    }
  }
  return sum;
};

//console.log("total balance should be 85: ", bank.bankBalance());
// bank.credit(1, 20);
// bank.debit(1, 1000);
// console.log("total should now be 105: ", bank.bankBalance());

//You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = { bank }; //add all of your object names here that you need for the node mocha tests
