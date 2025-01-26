var nickname = "Lance";
var heightInInches = 64;
var weightInKg = 60;


var feet = (heightInInches - (heightInInches % 12)) / 12; // Integer division
var inches = heightInInches % 12; // Remainder for inches

var weightInLbs = weightInKg * 2.20462;

alert(
    "Name: " + nickname + 
    "\nHeight: " + feet + "’" + inches + "”" +
    "\nWeight: " + weightInLbs + " lbs"
);

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var birthYear = prompt("Enter your birth year:");

var currentYear = 2025;
var age = currentYear - birthYear;

document.getElementById("output").innerHTML = 
    "Hello " + firstName + " " + lastName + "!" + 
    " How does it feel to be " + age + " years old?";

var consent = confirm("Do you agree to share your personal information with this site?");
if (consent) {
    console.log("Name: " + nickname);
    console.log("Height: " + feet + "’" + inches + "”");
    console.log("Weight: " + weightInLbs + " lbs");
} else {
    console.log("User does not wish to share his/her information.");
}





