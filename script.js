// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = [
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
var lowercaseCharacters = [
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
var uppercaseCharacters = [
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = "";

  // Build all the logic
  var characterCount = characterCheck();
  if (characterCount) {
    // build list of valid options to generated password from
    var options = buildOptions();
    if (options.length != 0) {
      // loop through number of characters expected and grab random option from criteria list
      for (var i = 0; i < characterCount; i++) {
        var index = Math.floor(Math.random() * options.length);
        password = password + options[index];
      }
    }
  }
  return password;
}

function characterCheck() {
  var num = prompt("What is your preferred password length between 8 - 128?");
  var numberCharacters;
  if (num) {
    num = parseInt(num);
    if (num >= 8 && num <= 128) {
      numberCharacters = num;
    } else {
      alert("Length of the password must be a between 8 - 128");
      numberCharacters = characterCheck();
    }
  }
  return numberCharacters;
}

function buildOptions() {
  var containsLowercase = confirm(
    "Should the password contain lowercase characters?"
  );
  var containsUppercase = confirm(
    "Should the password contain uppercase characters?"
  );
  var containsNumeric = confirm(
    "Should the password contain numeric characters?"
  );
  var containsSpecial = confirm(
    "Should the password contain special characters?"
  );

  var options = [];

  if (
    containsLowercase ||
    containsUppercase ||
    containsNumeric ||
    containsSpecial
  ) {
    // build list of valid options to generate password from
    if (containsLowercase) {
      options = options.concat(lowercaseCharacters);
    }

    if (containsUppercase) {
      options = options.concat(uppercaseCharacters);
    }

    if (containsNumeric) {
      options = options.concat(numbers);
    }

    if (containsSpecial) {
      options = options.concat(specialCharacters);
    }
  } else {
    // Allow user to try questions again or exit password generation
    var tryAgain = confirm(
      "Must select at least one criteria to generate password against!"
    );
    if (tryAgain) {
      options = buildOptions();
    }
  }
  return options;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
