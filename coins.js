/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  var amount = amount * 100; //Convert to integer to avoid float errors
  var amountLeft = amount; // Track total amount left
  
  // Calculates how many quarters go into your total value and discards decimal points
  coinPurse.quarters = Math.floor(amountLeft / 25);
  // Calculates amount left after you've done the quarters
  amountLeft = amountLeft - coinPurse.quarters * 25;

  coinPurse.dimes = Math.floor(amountLeft / 10);
  amountLeft = amountLeft - coinPurse.dimes * 10;

  coinPurse.nickels = Math.floor(amountLeft / 5);
  amountLeft = amountLeft - coinPurse.nickels * 5;

  coinPurse.pennies = amountLeft;

  // Return javascript object
  return coinPurse;
}

var coins = coinCounter(.81);
console.log(coins);