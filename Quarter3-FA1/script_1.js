var nickname = "Lance";
var heightInInches = 64;
var weightInKg = 60;


var feet = (heightInInches - (heightInInches % 12)) / 12;
var inches = heightInInches % 12;

var weightInLbs = weightInKg * 2.20462;

alert(
    "Name: " + nickname + 
    "\nHeight: " + feet + "’" + inches + "”" +
    "\nWeight: " + weightInLbs + " lbs"
);