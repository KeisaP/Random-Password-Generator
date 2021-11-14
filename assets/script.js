// Assignment Code
var generateBtn = document.querySelector("#generate");


var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!#$%&'()*+-./:;<=>?@[}\^_'{|}~";
var numbers = "1234567890"
var passwordLength = "";

var alphaUpperChoice = confirm("Would you like uppercase letters?");
var alphaLowerChoice = confirm("Would you like lowercase letters?");
var specialCharactersChoice = confirm("Would you like special characters?");
var numbersChoice = confirm("Would you like numbers?");

// Write password to the #password input
var passwordLength = alert("How many characters would you like? (Please choose between 8 and 128)")
passwordLength = parseInt(passwordLength);

if (passwordLength < 8) {
  alert("Password must be a minimum 8 characters");
  return "";
}

if (passwordLength > 128) {
  alert("Password must not have more than 128 characters");
  return "";
}

if (alphaUpperChoice) {
  passwordText += alphaUpper;
}

if (alphaLowerChoice) {
  passwordText += alphaLower;
}

if (specialCharactersChoice) {
  passwordText += specialCharacters;
}

if (numbersChoice) {
  passwordText += numbers;
}

for (var i=0; i < passwordLength; i++) {
  password = passwordText[Math.floor(Math.random() * passwordText.length)]
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
