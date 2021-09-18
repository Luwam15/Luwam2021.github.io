"use strict";
/**
 *
 * @param {number} from where the print starts
 * @param {number} until untill where to print
 * @returns {undefined}
 */
function printNumbers(from, until) {
  let i = from;
  let timeOutId = setInterval(print, from * 1000);
  /**
   * prints numbers
   * @returns{undefined}
   */
  function print() {
    console.log(i);
    if (i == until) {
      clearInterval(timeOutId);
    }
    i++;
  }
}

/**
 * @param {number} from where the print starts
 * @param {number} until untill where to print
 * @returns {undefined}
 */
function printNumbers2(from, until) {
  //   let i = from;
  setTimeout(print, from * 1000);
  /**
   * prints numbers
   * @returns{undefined}
   */
  function print() {
    for (let i = from; i <= until; i++) {
      console.log(i);
    }
  }
}
printNumbers(5, 20);
printNumbers2(5, 20);
