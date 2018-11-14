function checkCashRegister(price, cash, cid) {
	var CurrencyUnits = {
		PENNY: 0.01,
		NICKEL: 0.05,
		DIME: 0.10,
		QUARTER: 0.25, 
		ONE: 1.00,
		FIVE: 5.00,
		TEN: 10.00, 
		TWENTY: 20.00,
		ONE_HUNDRED: 100.00
	}



  var change = cash - price;
  // var result = {status: undefined, change: change}
  var result = Object.keys(CurrencyUnits);


  // Here is your change, ma'am.
  return result;


  //(yes) should always RETURN object with status and change key;
  //RETUN  {status: "INSUFFICIENT_FUNDS", change: []} when cid less or canno't return change
  // RETURN  {status: "CLOSED", change: [...]} when total cid 
  // RETURN {status: "OPEN", change: [...]} (from highest to lowest order)
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);