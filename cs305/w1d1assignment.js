// Luwam Paulos(962263)....Assignment w1d1selectionRepitation

/*
1.Write a program to compute sales commission based on following rules:
•If the salesman is salaried then
    •These is no commission for sales below $300
    •1% for sales between $300 and $500 (exclusive)
    •2% for sales above $500 
•If the salesman is not salaried then
    •2% for sales between $300 and $500 (exclusive)
    •3% forsales above $500
*/
function computeCommision(sales, salary) {
  let commission;
  if (salary == "salaried") {
    if (sales < 300) {
      commission = 0;
    } else if (sales < 500) {
      commission = sales * 0.01;
    } else {
      commission = sales * 0.02;
    }
  } else if (salary == "not salaried") {
    if (sales > 300 && sales < 500) {
      commission = sales * 0.02;
    } else if (sales >= 500) {
      commission = sales * 0.3;
    }
  }
  return commission;
}

//let x = computeCommision(3000, "not salaried");
//console.log(x);

/*
//..........................
2.Write a loop that continually prompts for age 
until you enter age older than 18
•Write both while and do while versions.
*/

const input = require("prompt-sync")();

function askAge() {
  let age;
  while (true) {
    age = input("enter age");
    if (age > 18) {
      console.log("thanks for breaking the loop");
      break;
    } else {
      console.log("sorry you will try again");
    }
  }
}

function askAge2() {
  let age;
  do {
    age = input("enter age");
    console.log(typeof age);
    if (age > 18) {
      console.log("thanks for breaking the loop");
      console.log(typeof age);
    } else {
      console.log("sorry you will try again");
    }
  } while (age <= 18);
}

//askAge();
//askAge2();

/*
.....................
3.Make a defining table and program to print out the balance
 of a savings account that compounds interest monthly. 
  Prompt the user for the 
  •initial amount 
  •annual interest rate
  •number of years to compound
*/

function balance() {
  const initialAm = Number(input("enter initial amount"));
  const annualIntRate = input("enter annual interest rate");
  const years = input("enter number of years ");
  const balSaving = initialAm * annualIntRate * years + initialAm;
  console.log(balSaving);
}
//balance();

/*
.......................
4.Write code to print the number patternson the console
12345
12345
12345
12345
12345

1 
22 
333
4444
55555

55555 
4444 
333 
22 
1

*/

function num151() {
  for (let i = 0; i < 5; i++) {
    let numbers = "";
    for (let j = 1; j <= 5; j++) {
      numbers += j;
    }
    console.log(numbers);
    console.log("\n");
  }
}
function num152() {
  for (let i = 1; i <= 5; i++) {
    let numbers = "";
    for (let j = 1; j <= i; j++) {
      numbers += i;
    }
    console.log(numbers);
    console.log("\n");
  }
}
function num153() {
  for (let i = 5; i > 0; i--) {
    let numbers = "";
    for (let j = 1; j <= i; j++) {
      numbers += i;
    }
    console.log(numbers);
    console.log("\n");
  }
}

//num151();
//num152();
//num153();

/*
.......................
5.Cost of House Down Payment Make a defining table and then write a program that calculates 
down payment for a home loan based on following rules. Your program should prompt for the 
cost and write the down payment amount to the console.Cost of House Down Payment
 $0 to less than 50K5% of the cost
 $50K to less than 100 K$1000 + 10% of (cost -$50K)
 $100K to less than 200K$2000 + 15% of (cost -$100K)
 $200K and above$5000 + 10% of (cost -$200K)
*/

function downPayment() {
  let downPayment;
  let cost = input("enter cost");
  if (cost < 0) return;
  if (cost < 50000) {
    downPayment = 0.05 * cost;
  } else if (cost < 100000) {
    downPayment = 1000 + 0.1 * (cost - 50000);
  } else if (cost < 200000) {
    downPayment = 2000 + 0.15 * (cost - 100000);
  } else if (cost >= 200000) {
    downPayment = 5000 + 0.1 * (cost - 200000);
  }
  console.log(downPayment);
}

//downPayment();

/*
.....................
6. Write a JavaScript program toprompt for an integer andcompute the sum of all the digits.
Input  Output
123     6
102     3
8       8
*/

function addDigits() {
  let digits = input("enter an integer");
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits.charAt(i));
  }
  console.log(sum);
}
addDigits();
