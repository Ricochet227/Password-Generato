// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 7;
var choiceArr = [];
var upperCaseArr =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArr =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArr =["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharArr =["!","#","$","%","&","*","+","/","<","=",">","?","@","^","~"];


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  if (correctPrompts){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

}

function getPrompts(){
  choiceArr = [];
  characterLength = parseInt(prompt("Pick any number between 8-128 characters for your password length"));
  if(isNaN(characterLength) (characterLength < 8 ) (characterLength > 128)) {
    alert("Your password has to be between 8-128 characters, try again!");
    return false;
  }
  if(confirm("Do you want uppercasecase letters in your password? (If no press cancel)")){
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if(confirm("Do you want lowercase letters in your password? (If no press cancel)")){
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if(confirm("Do you want numbers in your password? (If no press cancel)")){
    choiceArr = choiceArr.concat(numberArr);
  }
  if(confirm("Do you want special characters in your password? (If no press cancel)")){
    choiceArr = choiceArr.concat(specialCharArr);
  }
  return true;
}
