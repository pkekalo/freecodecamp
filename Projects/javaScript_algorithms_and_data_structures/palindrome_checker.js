function palindrome(str) {

  // Declaring variables
  var forwardWord = str;
  var backwardWord = [];

  // Making Backward string 
  for (var i = str.length-1; i >= 0; i--) {
    backwardWord.push(str[i]);
  }
  backwardWord = backwardWord.toString().replace(/,/g, '');

  // Filtering 2 words for symbols, numbers, and case sencivity
  forwardWord = forwardWord.replace(/[^a-z0-9]/gi, '').toLowerCase(); 
  backwardWord = backwardWord.replace(/[^a-z0-9]/gi, '').toLowerCase(); 

  if (forwardWord === backwardWord) {
  	return true;
  } else {
  	return false; 
  }
  
}

palindrome("eye");