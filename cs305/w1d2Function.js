<<<<<<< HEAD
// Luwam Paulos(962263)......Assignment w1d2Function

"use strict";

/*
1. Write a function, computeSalesCommission that takes a Boolean argument for salaried and 
number argument for salesAmount. It should return the sales commission based on following 
rules. First make a defining table for the function.
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (inclusive)
• 2% for sales above $500 
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (inclusive)
• 3% for sales above $500 
*/

function computeSalesCommission(salaried, salesAmount) {
  let commission;
  if (salaried == true) {
    if (salesAmount < 300) {
      commission = 0;
    } else if (salesAmount < 500) {
      commission = salesAmount * 0.01;
    } else {
      commission = salesAmount * 0.02;
    }
  } else if (salaried == false) {
    if (salesAmount < 300) {
      commission = 0;
    } else if (salesAmount >= 300 && salesAmount <= 500) {
      commission = salesAmount * 0.02;
    } else if (salesAmount > 500) {
      commission = salesAmount * 0.03;
    }
  }
  return commission;
}
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 70: ", computeSalesCommission(true, 3500));
console.log("expect 105: ", computeSalesCommission(false, 3500));

/*............................
2. Make a defining table and function that will return the balance 
of a savings account that 
compounds interest monthly. Parameters for the function will be:
• initial amount 
• annual interest rate
• number of years to compound

*/
function compoundInterest(initialAmount, annualInterestRate, years) {
  let interst =
    initialAmount * (1 + annualInterestRate / 100 / 12) ** (years * 12) -
    initialAmount;
  return interst + initialAmount;
}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));

/*
.................................
3. Cost of House Down Payment 
Make a defining table and then write a function that calculates down payment for a 
home loan based on following rules.
Your function should have a parameter for the cost and return the down payment amount
 $0 to less than 50K       5% of the cost
 $50K to less than 100 K   $2500 + 10% of (cost -$50K)
 $100K to less than 200K   $7500 + 15% of (cost -$100K)
 $200K and above           $5000 + 10% of (cost -$200K)
*/

function calcDownpayment(cost) {
  let downPayment;
  if (cost < 0) return;
  if (cost < 50000) {
    downPayment = 0.05 * cost;
  } else if (cost < 100000) {
    downPayment = 2500 + 0.1 * (cost - 50000);
  } else if (cost < 200000) {
    downPayment = 7500 + 0.15 * (cost - 100000);
  } else if (cost >= 200000) {
    downPayment = 5000 + 0.1 * (cost - 200000);
  }
  return downPayment;
}
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 22500: ", calcDownpayment(200000));

/*
4. Write functions sumDigits and multDigits that take an integer parameter and return the sum or 
product of the digits in the number. Use the / and % operators to find the digits.
Input       sumDigits Output         multDigits Output
1234        10                       24
102         3                         0
8           8                         8
*/
function sumDigits(number) {
  let sum = 0;
  let num = String(number);
  for (let i = 0; i < num.length; i++) {
    sum += Number(num.charAt(i));
  }
  return sum;
}

function multDigits(number) {
  let product = 1;
  let num = String(number);
  for (let i = 0; i < num.length; i++) {
    product *= num.charAt(i);
  }
  return product;
}

console.log("expect 10 ,24: ", sumDigits(1234), multDigits(1234));
console.log("expect 3,0: ", sumDigits(102), multDigits(102));
console.log("expect 8,8: ", sumDigits(8), multDigits(8));

/*........................
5. Write a function, convertFahrenheit, that takes an input parameter with a 
temperature in Fahrenheit and returns the temperature in Celsius.
*/

function convertFahrenheit(fahrenheitTemp) {
  let celsius = (fahrenheitTemp - 32) * (5 / 9);
  return celsius;
}
console.log("expect 0: ", convertFahrenheit(32));
console.log("expect -17.7778: ", convertFahrenheit(0));
console.log("expect 100: ", convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit(100));

/*.........................
6. Write a function that takes x and y co-ordinates of two points as inputs and returns the 
distance between these two points based on the formula, d = √( x 2 − x 1 ) ^2 + ( y 2 − y 1 )^ 2
*/
function calcDistance(x1, y1, x2, y2) {
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distance;
}

console.log("expect 5 : ", calcDistance(0, 0, 5, 5));
=======
// Luwam Paulos(962263)......Assignment w1d2Function

"use strict";

/*
1. Write a function, computeSalesCommission that takes a Boolean argument for salaried and 
number argument for salesAmount. It should return the sales commission based on following 
rules. First make a defining table for the function.
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (inclusive)
• 2% for sales above $500 
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (inclusive)
• 3% for sales above $500 
*/

function computeSalesCommission(salaried, salesAmount) {
  let commission;
  if (salaried == true) {
    if (salesAmount < 300) {
      commission = 0;
    } else if (salesAmount < 500) {
      commission = salesAmount * 0.01;
    } else {
      commission = salesAmount * 0.02;
    }
  } else if (salaried == false) {
    if (salesAmount < 300) {
      commission = 0;
    } else if (salesAmount >= 300 && salesAmount <= 500) {
      commission = salesAmount * 0.02;
    } else if (salesAmount > 500) {
      commission = salesAmount * 0.03;
    }
  }
  return commission;
}
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 70: ", computeSalesCommission(true, 3500));
console.log("expect 105: ", computeSalesCommission(false, 3500));

/*............................
2. Make a defining table and function that will return the balance 
of a savings account that 
compounds interest monthly. Parameters for the function will be:
• initial amount 
• annual interest rate
• number of years to compound

*/
function compoundInterest(initialAmount, annualInterestRate, years) {
  let interst =
    initialAmount * (1 + annualInterestRate / 100 / 12) ** (years * 12) -
    initialAmount;
  return interst + initialAmount;
}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));

/*
.................................
3. Cost of House Down Payment 
Make a defining table and then write a function that calculates down payment for a 
home loan based on following rules.
Your function should have a parameter for the cost and return the down payment amount
 $0 to less than 50K       5% of the cost
 $50K to less than 100 K   $2500 + 10% of (cost -$50K)
 $100K to less than 200K   $7500 + 15% of (cost -$100K)
 $200K and above           $5000 + 10% of (cost -$200K)
*/

function calcDownpayment(cost) {
  let downPayment;
  if (cost < 0) return;
  if (cost < 50000) {
    downPayment = 0.05 * cost;
  } else if (cost < 100000) {
    downPayment = 2500 + 0.1 * (cost - 50000);
  } else if (cost < 200000) {
    downPayment = 7500 + 0.15 * (cost - 100000);
  } else if (cost >= 200000) {
    downPayment = 5000 + 0.1 * (cost - 200000);
  }
  return downPayment;
}
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 22500: ", calcDownpayment(200000));

/*
4. Write functions sumDigits and multDigits that take an integer parameter and return the sum or 
product of the digits in the number. Use the / and % operators to find the digits.
Input       sumDigits Output         multDigits Output
1234        10                       24
102         3                         0
8           8                         8
*/
function sumDigits(number) {
  let sum = 0;
  let num = String(number);
  for (let i = 0; i < num.length; i++) {
    sum += Number(num.charAt(i));
  }
  return sum;
}

function multDigits(number) {
  let product = 1;
  let num = String(number);
  for (let i = 0; i < num.length; i++) {
    product *= num.charAt(i);
  }
  return product;
}

console.log("expect 10 ,24: ", sumDigits(1234), multDigits(1234));
console.log("expect 3,0: ", sumDigits(102), multDigits(102));
console.log("expect 8,8: ", sumDigits(8), multDigits(8));

/*........................
5. Write a function, convertFahrenheit, that takes an input parameter with a 
temperature in Fahrenheit and returns the temperature in Celsius.
*/

function convertFahrenheit(fahrenheitTemp) {
  let celsius = (fahrenheitTemp - 32) * (5 / 9);
  return celsius;
}
console.log("expect 0: ", convertFahrenheit(32));
console.log("expect -17.7778: ", convertFahrenheit(0));
console.log("expect 100: ", convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit(100));

/*.........................
6. Write a function that takes x and y co-ordinates of two points as inputs and returns the 
distance between these two points based on the formula, d = √( x 2 − x 1 ) ^2 + ( y 2 − y 1 )^ 2
*/
function calcDistance(x1, y1, x2, y2) {
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distance;
}

console.log("expect 5 : ", calcDistance(0, 0, 5, 5));
>>>>>>> efbc8b5b6b048a84c6c8689c46d729f730c2101c
