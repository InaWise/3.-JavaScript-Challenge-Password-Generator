// Assignment code here

// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

function generateLength() {
  lengthChoice = prompt(
    "Must choose a length of at least 8 characters and no more than 128 characters"
  );
  console.log(lengthChoice);
  if (lengthChoice >= 8 && lengthChoice <= 128) {
    return parseInt(lengthChoice);
  } else {
    alert("invalid selection must bewtween 8 - 128 characters");
  }
}


function generatePassword() {
  var length = generateLength();

  //WHEN prompted for character types to include in the password
  //THEN I choose lowercase, uppercase, numeric, and/or special characters
  var lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numeric = ["1", "2", "3", "4", "5", "7", "8", "9"];
  var symbol = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  //WHEN I answer each prompt
  //THEN my input should be validated and at least one character type should be selected
  //prompts for user input
  var usersChoice = "";
  var nonCaps = prompt("Would you like lowercase, uppercase , numeric, or special (special character)");
  

  nonCaps = nonCaps.toLowerCase ();

  

  if (nonCaps === "lowercase"){
    // alert("User chose to have lowercase letters");
    usersChoice = lowercase 

  } else if (nonCaps === "uppercase"){
      // alert("User chose to have uppercase letters");
      usersChoice = uppercase
  } else if (nonCaps === "numeric"){ 
      // alert("User chose to have numbers");
      usersChoice = numeric
  } else if (nonCaps === "special"){ 
      // alert("User chose to have symbols");
      usersChoice = symbol
  } else {
    alert("Please use lowercase, uppercase, numeric, special#")
    return 
  }

  //return value
  var inputPassword = "";
  for (var i = 0; i < length; i++) {
    inputPassword += usersChoice[Math.floor(Math.random() * usersChoice.length)];
  } 
  console.log (inputPassword);
  return inputPassword;

  
  
}




//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page//
