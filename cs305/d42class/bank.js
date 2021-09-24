"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */

const acc = require("./account.js"); //with node need the name of your file with your functions here
const Account = acc.Account; //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount;
// /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
// */
// exports.Bank = Bank;

class Bank {
  static nextNumber = 1;
  constructor() {
    this._accounts = [];
  }
  /**
   *
   * @returns {undefined}
   */
  addAccount() {
    const acc = new Account(Bank.nextNumber++);
    this._accounts.push(acc);

    return this._accounts;
  }
  addSavingsAccount(interest) {
    const savAcc = new SavingsAccount(Bank.nextNumber++, interest);
    this._accounts.push(savAcc);
    return this._accounts;
  }
  addCheckingAccount(overdraft) {
    const chcAcc = new CheckingAccount(Bank.nextNumber++, overdraft);
    this._accounts.push(chcAcc);
    return this._accounts;
  }
  closeAccount(number) {
    let index = this._accounts.findIndex(
      (customer) => customer.getNumber() === number
    );
    if (index > -1) {
      this._accounts.splice(index, 1);
    }
  }
  accountReport() {
    return this._accounts.join("\n");
  }

  endOfMonth() {
    let result = "";
    for (const acc of this._accounts) {
      result += acc.endOfMonth() + "\n";
    }
    return result;
  }
}

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
exports.Bank = Bank;
