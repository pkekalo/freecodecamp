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
	var result = {status: undefined, change: []}



	//count money
	var moneyCIDhas = 0;

	// An Example of cid input structure
	// [["PENNY", 1.01], 
	// ["NICKEL", 2.05],
	// ["DIME", 3.1],
	// ["QUARTER", 4.25],
	// ["ONE", 90],
	// ["FIVE", 55],
	// ["TEN", 20],
	// ["TWENTY", 60],
	// ["ONE HUNDRED", 100]]

	var CIDtotalPENNY = 0;
	CIDtotalPENNY = cid[0][1];

	var CIDtotalNICKEL = 0;
	CIDtotalNICKEL = cid[1][1];

	var CIDtotalDIME = 0;
	CIDtotalDIME = cid[2][1];

	var CIDtotalQUARTER = 0;
	CIDtotalQUARTER = cid[3][1];

	var CIDtotalONE = 0;
	CIDtotalONE = cid[4][1];

	var CIDtotalFIVE = 0;
	CIDtotalFIVE = cid[5][1];

	var CIDtotalTEN = 0;
	CIDtotalTEN = cid[6][1];

	var CIDtotalTWENTY = 0;
	CIDtotalTWENTY = cid[7][1];

	var CIDtotalONEHUNDRED = 0;
	CIDtotalONEHUNDRED = cid[8][1];
	console.log("Here is total hundreds = " + CIDtotalONEHUNDRED);
	moneyCIDhas = CIDtotalPENNY + CIDtotalNICKEL + CIDtotalDIME + CIDtotalQUARTER + CIDtotalONE + CIDtotalFIVE + CIDtotalTEN + CIDtotalTWENTY + CIDtotalONEHUNDRED;

	
	if (change > moneyCIDhas) {
		return {status: "INSUFFICIENT_FUNDS", change: []};
	}

	//Count change in different Currency Unit
	var countChange = change;
	console.log("countChange = " + countChange)
	// result = {status: undefined, change: []} //delete this 


	function  CountDifferentCurrencyUnit(input) {
		if (countChange >= 100 && CIDtotalONEHUNDRED >= 100) {
			countChange = countChange-100;
			CIDtotalONEHUNDRED = CIDtotalONEHUNDRED-100;
			result[status] = "OPEN";
			if (result[change][0] === undefined) {
				result[change][0] = ["ONE HUNDRED", 100];
				CountDifferentCurrencyUnit(countChange);
			} else {
				result[change][0][1] += 100;
				CountDifferentCurrencyUnit(countChange);
			}
		} else {
			console.log("error");
		}
	}

	CountDifferentCurrencyUnit(countChange);


		//check for leftOver and Posible for each
		//minus leftOver and Posible AND create+add/add to result[change] = example [["PENNY", 1.01]] 














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

checkCashRegister(19.5, 200, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);