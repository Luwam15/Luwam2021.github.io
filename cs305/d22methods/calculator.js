"use strict";

const calculator = {

    value1: 0,
    value2: 0,
    setValues: function(operand1, operand2) {
        this.value1 = operand1;
        this.value2 = operand2;
    },

    sum: function() {
        const tot = this.value1 + this.value2;
        return tot;
    },
    mul: function() {
        const product = this.value1 * this.value2;
        return product;
    }
};
// implement this








/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = { calculator }; //add all of your object names here that you need for the node mocha tests