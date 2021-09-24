"use strict";
/* global Account  */

const acc = require("./account.js"); //with node need the name of your file with your functions here
const Account = acc.Account; //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */
/**
 * checking account class
 */
class CheckingAccount extends Account {
  /**
   *
   * @param {number} number is the number
   * @param {number} overdraft is the overdraft limit for the account
   */
  constructor(number, overdraft) {
    super(number);
    this._overdraft = overdraft;
  }
  /**
   *
   * @returns {number} overdraft of the account
   */
  getOverdraft() {
    return this._overdraft;
  }
  /**
   *
   * @param {number} number is the account number
   * @returns {undefined}
   */
  setOverdraft(number) {
    this._overdraft = number;
  }

  /**
   * Method to take money out of the account
   *
   * @param {number} amount money to be taken out of the account
   * @returns {undefined}
   * @throws {RangeError} when amount is less than or equal to zero
   * @throws {Error} when the account has insufficient funds (balance)
   */
  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this._balance + this._overdraft) {
      throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
    }
    this._balance -= amount;
  }
  /**
   *
   * @returns {string} warning if balance is below 0
   */
  endOfMonth() {
    if (this._balance < 0) {
      return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraft}`;
    } else return "";
  }

  /**
   * @returns {string} representation of this account
   */
  toString() {
    //CheckingAccount 1: balance -200:overdraft250
    return `CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraft}`;
  }
}

exports.CheckingAccount = CheckingAccount;
