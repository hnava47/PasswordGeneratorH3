// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function generatePassword() {
  var cancelPhrase = 'Canceled password generator';

  // Password length definition
  var passLength = prompt('Enter requested password length\nMinimum length should be 8\nMaximum length should be 128');
  if (passLength === null) {
    alert('Exiting program');
    return cancelPhrase;
  } else {
    var passLength = parseInt(passLength, 10);
    while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert('Invalid password length! Password should be a number between 8 and 128');
      var passLength = prompt('Enter requested password length\nMinimum length should be 8\nMaximum length should be 128');
      if (passLength === null) {
        alert('Exiting program');
        return cancelPhrase;
      } else {
        var passLength = parseInt(passLength, 10)
      }
    }
  }
  // Lowercase character selection
  var lowerVal = prompt('Include lowercase characters?\nEnter "Yes" or "No"', 'Yes');
  if (lowerVal === null) {
    alert('Exiting program');
    return cancelPhrase;
  } else {
    lowerVal = lowerVal.toLowerCase();
    while (lowerVal !== 'yes' && lowerVal !== 'no') {
      alert('Invalid entry! Value must be "Yes" or "No"');
      lowerVal = prompt('Include lowercase characters?\nEnter "Yes" or "No"', 'Yes');
      if (lowerVal === null) {
        alert('Exiting program');
        return cancelPhrase;
      } else {
        lowerVal = lowerVal.toLowerCase();
      }
    }
  }
  // Uppercase character selection
  var upperVal = prompt('Include uppercase characters?\nEnter "Yes" or "No"', 'Yes');
  if (upperVal === null) {
    alert('Exiting program');
    return cancelPhrase;
  } else {
    upperVal = upperVal.toLowerCase();
    while (upperVal !== 'yes' && upperVal !== 'no') {
      alert('Invalid entry! Value must be "Yes" or "No"');
      upperVal = prompt('Include uppercase characters?\nEnter "Yes" or "No"', 'Yes');
      if (upperVal === null) {
        alert('Exiting program');
        return cancelPhrase;
      } else {
        upperVal = upperVal.toLowerCase();
      }
    }
  }
  // Number selection
  var numVal = prompt('Include numbers?\nEnter "Yes" or "No"', 'Yes');
  if (numVal === null) {
    alert('Exiting program');
    return cancelPhrase;
  } else {
    numVal = numVal.toLowerCase();
    while (numVal !== 'yes' && numVal !== 'no') {
      alert('Invalid entry! Value must be "Yes" or "No"');
      numVal = prompt('Include numbers?\nEnter "Yes" or "No"', 'Yes');
      if (numVal === null) {
        alert('Exiting program');
        return cancelPhrase;
      } else {
        numVal = numVal.toLowerCase();
      }
    }
  }
  // Special character selection
  var spcVal = prompt('Include special characters?\nEnter "Yes" or "No"', 'Yes');
  if (spcVal === null) {
    alert('Exiting program');
    return cancelPhrase;
  } else {
    spcVal = spcVal.toLowerCase();
    while (spcVal !== 'yes' && spcVal !== 'no') {
      alert('Invalid entry! Value must be "Yes" or "No"');
      spcVal = prompt('Include special characters?\nEnter "Yes" or "No"', 'Yes');
      if (spcVal === null) {
        alert('Exiting program');
        return cancelPhrase;
      } else {
        spcVal = spcVal.toLowerCase();
      }
    }
  }
  // Create character string unless no criteria selected
  if (lowerVal === 'no' && upperVal === 'no' && numVal === 'no' && spcVal === 'no') {
    return 'No password criteria selected'
  } else {
    var passChar = '';
    if (lowerVal === 'yes') {
      passChar += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (upperVal === 'yes') {
      passChar += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numVal === 'yes') {
      passChar += '0123456789';
    }
    if (spcVal === 'yes') {
      passChar += '!\"#$%\&()*+\',-./:;<=>?@[\\]^_`{}|~';
    }
  }
  // Creates password based on character string
  let result = '';
  const charLength = passChar.length;
  for (let i = 0; i < passLength; i++) {
    result += passChar.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Copy password to clipboard
function clipboardCopy() {
  var copyText = document.getElementById("password");

  copyText.select();
  document.execCommand('copy');
  alert('Copied password!');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", clipboardCopy);
