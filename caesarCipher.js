function caesarCipher(string, shiftFactor = 3) {
  validateInputString(string);
  validateInputShiftFactor(shiftFactor);

  // Convert the shift to a valid range between 0 and 25
  shiftFactor = shiftFactor % 26;

  // Initialize the result
  let result = '';

  // Loop through each character in the input string
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    // Check if the character is a lowercase letter
    if (char >= 'a' && char <= 'z') {
      // Shift within 'a' to 'z'
      let newChar = String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shiftFactor) % 26) + 97
      );
      result += newChar;
    }
    // Check if the character is an uppercase letter
    else if (char >= 'A' && char <= 'Z') {
      // Shift within 'A' to 'Z'
      let newChar = String.fromCharCode(
        ((char.charCodeAt(0) - 65 + shiftFactor) % 26) + 65
      );
      result += newChar;
    } else {
      // If not a letter, just add the character as it is
      result += char;
    }
  }

  return result;
}

function validateInputString(string) {
  if (typeof string !== 'string') {
    throw new Error(
      'Wrong type: Input must of type string but provided' +
        `input was of type [${typeof string}].`
    );
  } else if (string === '') {
    throw new Error('Empty string: Input can not be an empty string.');
  }
}

function validateInputShiftFactor(shiftFactor) {
  if (typeof shiftFactor !== 'number') {
    throw new Error(
      'Wrong type: Shift factor must be of type number but provided' +
        `input was of type [${typeof string}].`
    );
  } else if (shiftFactor <= 0) {
    throw new Error('Out of range: Shift factor can not less then 1.');
  }
}

export { caesarCipher };
