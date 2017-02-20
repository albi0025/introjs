// have a function that takes a roman numeral and asigns a number value and returns that value.
  var romanMap = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500
  }
function romanCompare(lastChar, romanDigit) {
  return lastChar && romanMap[lastChar] > romanMap[romanDigit];
}
function convertRound(lastChar, total, romanDigit, valRomanDigit) {
  if (romanCompare(lastChar, romanDigit)) {
    total -=valRomanDigit;
  } else {
    total +=valRomanDigit;
  }
  return total;
}


function romanNumeralConverter(roman) {
  var lastChar = "";
  var total = 0;
  for(var i = roman.length; i >= 0; i--){
    if(roman[i] === "V") {
      total +=5;
    } else if(roman[i] === "I") {
       total = convertRound(lastChar, total, "I", 1);
    } else if(roman[i] === "X") {
       total = convertRound(lastChar, total, "X", 10);
    } else if(roman[i] === "L") {
       total +=50;
    } else if(roman[i] === "C") {
       total = convertRound(lastChar, total, "C", 100);
    } else if(roman[i] === "D") {
       total +=500;
    }
    lastChar = roman[i];
  }
  return total;
}



module.exports = romanNumeralConverter;
