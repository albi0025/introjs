var assert = require('chai').assert;
var romanNumeralConverter = require('./romanNumeralConverter');

function conversionTest(number, numeral) {
  //Arrange
  var expected = number;
  //Act
  var actual = romanNumeralConverter(numeral);
  //Assert
  assert.equal(actual, expected);
}


describe("RomanNumeralConverter", function() {
  it("can convert I to 1", function() {
    conversionTest(1, "I");
  });
  it("can convert II to 2", function() {
    conversionTest(2, "II");
  });
  it("can convert III to 3", function() {
    conversionTest(3, "III");
  });
  it("can convert IV to 4", function() {
    conversionTest(4, "IV");
  });
  it("can convert V to 5", function() {
    conversionTest(5, "V");
  });
  it("can convert VI to 6", function() {
    conversionTest(6, "VI");
  });
  it("can convert VII to 7", function() {
    conversionTest(7, "VII");
  });
  it("can convert VIII to 8", function() {
    conversionTest(8, "VIII");
  });
  it("can convert IX to 9", function() {
    conversionTest(9, "IX");
  });
  it("can convert X to 10", function() {
    conversionTest(10, "X");
  });
  it("can convert XI to 11", function() {
    conversionTest(11, "XI");
  });
  it("can convert XII to 12", function() {
    conversionTest(12, "XII");
  });
  it("can convert XIII to 13", function() {
    conversionTest(13, "XIII");
  });
  it("can convert XIV to 14", function() {
    conversionTest(14, "XIV");
  });
  it("can convert XX to 20", function() {
    conversionTest(20, "XX");
  });
  it("can convert XL to 40", function() {
    conversionTest(40, "XL");
  });
  it("can convert L to 50", function() {
    conversionTest(50, "L");
  });
  it("can convert LXXXIX to 89", function() {
    conversionTest(89, "LXXXIX");
  });
  it("can convert XC to 90", function() {
    conversionTest(90, "XC");
  });
  it("can convert C to 100", function() {
    conversionTest(100, "C");
  });
  it("can convert D to 500", function() {
    conversionTest(500, "D");
  });
  it("can convert CD to 400", function() {
    conversionTest(400, "CD");
  });
});
