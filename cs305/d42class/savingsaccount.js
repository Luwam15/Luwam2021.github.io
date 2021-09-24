"use strict";
/* global Account  */

const acc = require("./account.js"); //with node need the name of your file with your functions here
const Account = acc.Account; //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */
/**
 * this class is for saving
 */
class SavingsAccount extends Account {
  /**
   * saving account constructor
   * @param {number} number is the account number
   * @param {number} interest is the interest rate of the account
   */
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }
  /**
   *
   * @returns {number} interest
   */
  getInterest() {
    return this._interest;
  }
  /**
   *
   * @param {number} interest sets interest
   * @returns {undefined}
   */
  setInterest(interest) {
    this._interest = interest;
  }
  /**
   * @returns {undefined}
   */
  addInterest() {
    const result =
      this.getBalance() + this.getBalance() * (this._interest / 100);
    this._balance = result;
  }
  /**
   *
   * @returns{undefined}
   */
  endOfMonth() {
    this.addInterest();
    return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
  }

  /**
   * tostring method
   * @returns {string} string of the account
   */
  toString() {
    return (
      "SavingsAccount " +
      this._number +
      ": balance: " +
      this._balance +
      " interest: " +
      this._interest
    );
  }
}

exports.SavingsAccount = SavingsAccount;
