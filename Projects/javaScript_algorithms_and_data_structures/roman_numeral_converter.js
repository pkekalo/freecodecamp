function convertToRoman(input) {
 
  var romanNums = {
    'I': 1,
    'V': 5,
    'X': 10, 
    'L': 50, 
    'C': 100, 
    'D': 500, 
    'M': 1000
  };

  var count = input;  
  var result = "";


  function countRumanNum(num) { 
    // Check for number larger than 0, and whole number.
    if (num > 0 && num % 1 === 0) {
      if (num >= 1000) {
      count = count - 1000;
      result += (Object.keys(romanNums)[6]); // 'M'
      countRumanNum(count);
      } else if (num >= 500) {
        count = count - 500;
        result += (Object.keys(romanNums)[5]); // 'D'
        countRumanNum(count);
      } else if (num >= 100) {
        count = count - 100;
        result += (Object.keys(romanNums)[4]); // 'C'
        countRumanNum(count);
      } else if (num >= 50) {
        count = count - 50;
        result += (Object.keys(romanNums)[3]); // 'L'
        countRumanNum(count);
      } else if (num >= 10) {
        count = count - 10;
        result += (Object.keys(romanNums)[2]); // 'X'
        countRumanNum(count);
      } else if (num >= 5) {
        count = count - 5;
        result += (Object.keys(romanNums)[1]); // 'V'
        countRumanNum(count);
      } else if (num >= 1) {
        count = count - 1;
        result += (Object.keys(romanNums)[0]); // 'I'
        countRumanNum(count);
      } 
    } 
    //Test for edge cases (negative number, decimal, else).
    else if (num < 0) {
      result = "The number is negative";
    } else if (num % 1 != 0) {
      result = "The number decimal";
    } else if (num === 0) {
      return;
    } else {
      result = "Unknown Error";
    }
    
  }


  countRumanNum(count); 


  return result;

}

convertToRoman(1000);