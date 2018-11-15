function checkCashRegister(price, cash, cid) {
	// var CurrencyUnits = {
	// 	PENNY: 0.01,
	// 	NICKEL: 0.05,
	// 	DIME: 0.10,
	// 	QUARTER: 0.25, 
	// 	ONE: 1.00,
	// 	FIVE: 5.00,
	// 	TEN: 10.00, 
	// 	TWENTY: 20.00,
	// 	ONE_HUNDRED: 100.00
	// }


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

	moneyCIDhas = CIDtotalPENNY + CIDtotalNICKEL + CIDtotalDIME + CIDtotalQUARTER + CIDtotalONE + CIDtotalFIVE + CIDtotalTEN + CIDtotalTWENTY + CIDtotalONEHUNDRED;

	
	if (change > moneyCIDhas) {
		result['status'] = "INSUFFICIENT_FUNDS";
		result['change'] = [];
		return result;
	}


	//Count change in different Currency Unit
	var countChange = change;
	console.log("Change is = " + countChange);

	var doesNotExistHUNDRED = true; 
	var doesNotExistTWENTY = true;
	var doesNotExistTEN = true;
	var doesNotExistFIVE = true;
	var doesNotExistONE = true;
	var doesNotExistQUARTER = true;
	var doesNotExistDIME = true;
	var doesNotExistNICKEL = true;
	var doesNotExistPENNY = true;

	function  CountDifferentCurrencyUnit(input) {
		if (countChange >= 100 && CIDtotalONEHUNDRED >= 100) { //100
			countChange = countChange-100;
			CIDtotalONEHUNDRED = CIDtotalONEHUNDRED-100;
			result['status'] = "OPEN";

			if (doesNotExistHUNDRED)  {
				result['change'].push(["ONE HUNDRED", 100]);  // if does not exist create result['change'] with "ONE HUNDRED" with $100 
				doesNotExistHUNDRED = false;
				CountDifferentCurrencyUnit(countChange); // calculate again
			} else {
				for (var i = 0; i < result['change'].length; i++) { //
					if (result['change'][i][0] === "ONE HUNDRED") { // find "ONE HUNDRED"
						result['change'][i][1] += 100;	// add $100 to it 
						CountDifferentCurrencyUnit(countChange); //  calculate again
					}
				}
			}
		} else if (countChange >= 20 && CIDtotalTWENTY >= 20) { //20
			countChange = countChange-20;
			CIDtotalTWENTY = CIDtotalTWENTY-20;
			result['status'] = "OPEN";

			if (doesNotExistTWENTY)  {
				result['change'].push(["TWENTY", 20]);  // if does not exist create result['change'] with "TWENTY" with $20 
				doesNotExistTWENTY = false;
				CountDifferentCurrencyUnit(countChange); // calculate again
			} else {
				for (var i = 0; i < result['change'].length; i++) { //
					if (result['change'][i][0] === "TWENTY") { // find "TWENTY"
						result['change'][i][1] += 20;	// add $20 to it 
						CountDifferentCurrencyUnit(countChange); //  calculate again
					}
				}
			}
		} else if (countChange >= 10 && CIDtotalTEN >= 10) { //10
			countChange = countChange-10;
			CIDtotalTEN = CIDtotalTEN-10;
			result['status'] = "OPEN";

			if (doesNotExistTEN)  {
				result['change'].push(["TEN", 10]);  // if does not exist create result['change'] with "TEN" with $10 
				doesNotExistTEN = false;
				CountDifferentCurrencyUnit(countChange); // calculate again
			} else {
				for (var i = 0; i < result['change'].length; i++) { //
					if (result['change'][i][0] === "TEN") { // find "TEN"
						result['change'][i][1] += 10;	// add $10 to it 
						CountDifferentCurrencyUnit(countChange); //  calculate again
					}
				}
			}
		} else if (countChange >= 5 && CIDtotalFIVE >= 5) { //5
			countChange = countChange-5;
			CIDtotalFIVE = CIDtotalFIVE-5;
			result['status'] = "OPEN";

			if (doesNotExistFIVE)  {
				result['change'].push(["FIVE", 5]);  // if does not exist create result['change'] with "FIVE" with $5 
				doesNotExistFIVE = false;
				CountDifferentCurrencyUnit(countChange); // calculate again
			} else {
				for (var i = 0; i < result['change'].length; i++) { //
					if (result['change'][i][0] === "FIVE") { // find "FIVE"
						result['change'][i][1] += 5;	// add $5 to it 
						CountDifferentCurrencyUnit(countChange); //  calculate again
					}
				}
			}
		} else if (countChange >= 1 && CIDtotalONE >= 1) { //1
			countChange = countChange-1;
			CIDtotalONE = CIDtotalONE-1;
			result['status'] = "OPEN";

			if (doesNotExistONE)  {
				result['change'].push(["ONE", 1]);  // if does not exist create result['change'] with "ONE" with $1 
				doesNotExistONE = false;
				CountDifferentCurrencyUnit(countChange); // calculate again
			} else {
				for (var i = 0; i < result['change'].length; i++) { //
					if (result['change'][i][0] === "ONE") { // find "ONE"
						result['change'][i][1] += 1;	// add $1 to it 
						CountDifferentCurrencyUnit(countChange); //  calculate again
					}
				}
			}
		} else if (countChange >= 0.25 && CIDtotalQUARTER >= 0.25) { //0.25
			countChange =  Math.round((countChange-0.25) * 100) / 100;
			CIDtotalQUARTER =  Math.round((CIDtotalQUARTER-0.25) * 100) / 100;
			result['status'] = "OPEN";

			if (doesNotExistQUARTER)  {
				result['change'].push(["QUARTER", 0.25]);  // if does not exist create result['change'] with "QUARTER" with $0.25 
				doesNotExistQUARTER = false;
				CountDifferentCurrencyUnit(countChange); // calculate again
			} else {
				for (var i = 0; i < result['change'].length; i++) { //
					if (result['change'][i][0] === "QUARTER") { // find "QUARTER"
						result['change'][i][1] += 0.25;	// add $0.25 to it 
						CountDifferentCurrencyUnit(countChange); //  calculate again
					}
				}
			}
		} else if (countChange >= 0.10 && CIDtotalDIME >= 0.10) { //0.10
			countChange = Math.round((countChange-0.10) * 100) / 100;
			CIDtotalDIME =  Math.round((CIDtotalDIME-0.10) * 100) / 100;
			result['status'] = "OPEN";

			if (doesNotExistDIME)  {
				result['change'].push(["DIME", 0.10]);  // if does not exist create result['change'] with "DIME" with $0.10 
				doesNotExistDIME = false;
				CountDifferentCurrencyUnit(countChange); // calculate again
			} else {
				for (var i = 0; i < result['change'].length; i++) { //
					if (result['change'][i][0] === "DIME") { // find "DIME"
						result['change'][i][1] += 0.10;	// add $0.10 to it 
						CountDifferentCurrencyUnit(countChange); //  calculate again
					}
				}
			}
		} else if (countChange >= 0.05 && CIDtotalNICKEL >= 0.05) { //0.05
			countChange =  Math.round((countChange-0.05) * 100) / 100;
			CIDtotalNICKEL =  Math.round((CIDtotalNICKEL-0.05) * 100) / 100;
			result['status'] = "OPEN";

			if (doesNotExistNICKEL)  {
				result['change'].push(["NICKEL", 0.05]);  // if does not exist create result['change'] with "NICKEL" with $0.05 
				doesNotExistNICKEL = false;
				CountDifferentCurrencyUnit(countChange); // calculate again
			} else {
				for (var i = 0; i < result['change'].length; i++) { //
					if (result['change'][i][0] === "NICKEL") { // find "NICKEL"
						result['change'][i][1] += 0.05;	// add $0.05 to it 
						CountDifferentCurrencyUnit(countChange); //  calculate again
					}
				}
			}
		} else if (countChange >= 0.01 && CIDtotalPENNY >= 0.01) { //0.01
			countChange = Math.round((countChange-0.01) * 100) / 100;
			CIDtotalPENNY = Math.round((CIDtotalPENNY-0.01) * 100) / 100;
			result['status'] = "OPEN";

			if (doesNotExistPENNY)  {
				result['change'].push(["PENNY", 0.01]);  // if does not exist create result['change'] with "PENNY" with $0.01 
				doesNotExistPENNY = false;
				CountDifferentCurrencyUnit(countChange); // calculate again
			} else {
				for (var i = 0; i < result['change'].length; i++) { //
					if (result['change'][i][0] === "PENNY") { // find "PENNY"
						result['change'][i][1] += 0.01;	// add $0.01 to it 
						CountDifferentCurrencyUnit(countChange); //  calculate again
					}
				}
			}
		} else if (countChange === 0) { //if done calculating change
			if (moneyCIDhas === change) { 
				result['status'] = "CLOSED";
				result['change'] = cid; 
			}
			return; // done 
		} else {	
			result['status'] = "INSUFFICIENT_FUNDS";
			result['change'] = [];
		}
	}

	CountDifferentCurrencyUnit(countChange);

	// Here is your change, ma'am.
	return result;


	//(yes) should always RETURN object with status and change key;
	//(yes)RETUN  {status: "INSUFFICIENT_FUNDS", change: []} when cid less or canno't return change
	// (yes) RETURN  {status: "CLOSED", change: [...]} when total cid 
	// (yes) RETURN {status: "OPEN", change: [...]} (from highest to lowest order)
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

checkCashRegister(20, 155, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);