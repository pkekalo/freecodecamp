function telephoneCheck(str) {
  // Good luck!


//Posible Combinations

//   555-555-5555 - 10 numbers
// (555)555-5555 - 10 numbers
// (555) 555-5555 -10 numbers
// 555 555 5555 - 10 numbers
// 5555555555 - 10 numbers
// 1 555 555 5555 - 11 numbers

//max 2x -
//max 1x (
//max 1x )
//max 3x _

	if (str[0] === "-") {
		return false;
	}



	var spacesCount = 0;
	var openParenCount  = 0;
	var closeParenCount = 0;
	var dashesCount = 0;

	for (var i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			spacesCount++;
		} else if (str[i] === "(") {
			openParenCount++;
		} else if (str[i] === ")") {
			closeParenCount++;
		} else if (str[i] === "-") {
			dashesCount++;
		}
	} 

	if (spacesCount > 3) {
		return false; 
	} else if (openParenCount > 1) {
		return false;
	} else if (closeParenCount > 1) {
		return false;
	} else if (dashesCount > 2) {
		return false;
	}


	var number = str;
	//get rid of (space, dash, parens)
	number = number.replace(/ /g, "");
	number = number.replace(/-/g, "");



 	if (number.length === 10) { //only numbers
  		if (Number(number) !== undefined) {
  			return true;
  		} else {
  			return false;
  		}
  	} else if (number.length === 11) { //first num 1
  		if (number[0] == 1) {
  			if (Number(number) !== undefined) {
  				return true;
	  		} 
  		} else {
  			return false;
  		}
  	} else if (number.length === 12 || number.length === 13){ //parens 
  		// Check for amount of parens, and right order;
		var parensCheck = '';
		var parens = '()';

		for (var i = 0; i < number.length; i++) {
			if (number[i] === '(') {
				parensCheck += number[i];
			} else if (number[i] === ')') {
				parensCheck += number[i];
			} 
		}

		if (parensCheck !== parens) { //if right order
			return false 
		} else if (number[0] === "(" && number[4] === ")" || number[1] === "(" && number[5] === ")"){	// if right position
			if (number[0] == 1) { //if first num is 1
				return true;
			} else if (number[0] === "(" ) {
				if (number.length > 12) {
					return false;
				} else {
					return true;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
  	} else {
  		return false;
  	}

  	




}

telephoneCheck("1 555-555-5555");