function rot13(str) { // LBH QVQ VG!
	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

	var char = "";
	var result = "";

	for (var i = 0; i < str.length; i++) {

		for (var k = 0; k < letters.length; k++) {
			if (str[i] === letters[k]) {
				if (letters[k+13] === undefined) {
					result += letters[k+13-letters.length]
				} else {
					result += letters[k+13]
				}
			}
		}
		
		char = str[i].replace(/[a-zA-Z]/g, "");
		result += char;
	}
	return result;
}

rot13("SERR PBQR PNZC");




