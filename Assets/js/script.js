// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passLength = prompt('Enter requested password length\nMinimum length should be 8\nMaximum length should be 128');
  if (passLength === null) {
    return alert('Exiting program');
  } else {
    var passLength = parseInt(passLength, 10);
    while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert('Invalid password length! Password should be a number between 8 and 128');
      var passLength = prompt('Enter requested password length\nMinimum length should be 8\nMaximum length should be 128');
      if (passLength === null) {
        return alert('Exiting program');
      } else {
        var passLength = parseInt(passLength, 10)
      }
    }
  }
  var lowerVal = prompt('Include lowercase characters?\nEnter "Yes" or "No"', 'Yes').toLowerCase();
  if (lowerVal === null) {
    return alert('Exiting program');
  } else {
    while (lowerVal !== 'yes' && lowerVal !== 'no') {
      alert('Invalid entry! Value must be "Yes" or "No"');
      var lowerVal = prompt('Include lowercase characters?\nEnter "Yes" or "No"', 'Yes');
      if (lowerVal === null) {
        return alert('Exiting program');
      }
    }
  }
  var upperVal = prompt('Include uppercase characters?\nEnter "Yes" or "No"', 'Yes').toLowerCase();
  if (upperVal === null) {
    return alert('Exiting program');
  } else {
    while (upperVal !== 'yes' && upperVal !== 'no') {
      alert('Invalid entry! Value must be "Yes" or "No"');
      var upperVal = prompt('Include uppercase characters?\nEnter "Yes" or "No"', 'Yes');
      if (upperVal === null) {
        return alert('Exiting program');
      }
    }
  }
  var numVal = prompt('Include numbers?\nEnter "Yes" or "No"', 'Yes').toLowerCase();
  if (numVal === null) {
    return alert('Exiting program');
  } else {
    while (numVal !== 'yes' && numVal !== 'no') {
      alert('Invalid entry! Value must be "Yes" or "No"');
      var numVal = prompt('Include numbers?\nEnter "Yes" or "No"', 'Yes');
      if (numVal === null) {
        return alert('Exiting program');
      }
    }
  }
  var spcVal = prompt('Include special characters?\nEnter "Yes" or "No"', 'Yes').toLowerCase();
  if (spcVal === null) {
    return alert('Exiting program');
  } else {
    while (spcVal !== 'yes' && spcVal !== 'no') {
      alert('Invalid entry! Value must be "Yes" or "No"');
      var spcVal = prompt('Include special characters?\nEnter "Yes" or "No"', 'Yes');
      if (spcVal === null) {
        return alert('Exiting program');
      }
    }
  }
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
