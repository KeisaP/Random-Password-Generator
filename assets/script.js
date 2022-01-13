// Assignment Code
var generateBtn = document.querySelector("#generate");



var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!#$%&'()*+-./:;<=>?@[}\^_'{|}~";
var numbers = "1234567890"
var password = "";


let passwordLength = prompt("How many characters would you like? (Please choose between 8 and 128)")

if (passwordLength < 8) {
  prompt("Password must be a minimum 8 characters. How many characters would you like?")
 } else if (passwordLength > 128) {
  prompt("Password must not have more than 128 characters. How many characters would you like?");
} else {
  passwordLength = parseInt(passwordLength);
}

console.log(passwordLength);

var alphaUpperChoice = confirm("Would you like uppercase letters?");
var alphaLowerChoice = confirm("Would you like lowercase letters?");
var specialCharactersChoice = confirm("Would you like special characters?");
var numbersChoice = confirm("Would you like numbers?");


let chars
function generatePassword(){
if (alphaUpperChoice) {
  chars += alphaUpper;
}

if (alphaLowerChoice) {
  chars += alphaLower;
}

if (specialCharactersChoice) {
  chars += specialCharacters;
}

if (numbersChoice) {
  chars += numbers;
}

for (var i=0; i < passwordLength; i++) {
  password += chars[Math.floor(Math.random() * chars.length)];
}

return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generate.addEventListener("click", writePassword);
