function analyzeArray(arrayOfNumbers) {
  validateInputArrayOfNumbers(arrayOfNumbers);

  const average =
    arrayOfNumbers.reduce((a, b) => a + b, 0) / arrayOfNumbers.length;
  const min = Math.min(...arrayOfNumbers);
  const max = Math.max(...arrayOfNumbers);
  const length = arrayOfNumbers.length;

  return { average, min, max, length };
}

function validateInputArrayOfNumbers(arrayOfNumbers) {
  const wrongTypeError = new Error(
    'Wrong type: Input must be an array of numbers type.'
  );
  if (!Array.isArray(arrayOfNumbers) || arrayOfNumbers.length === 0) {
    throw wrongTypeError;
  } else {
    arrayOfNumbers.forEach((item) => {
      if (typeof item !== 'number') {
        throw wrongTypeError;
      }
    });
  }
}

export { analyzeArray };
