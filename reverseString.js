function reverseString(string) {
  if (typeof string !== 'string') {
    throw new Error(
      'Wrong type: Input must of type string but provided' +
        `input was of type [${typeof string}].`
    );
  } else if (string === '') {
    throw new Error('Empty string: Input can not be an empty string.');
  } else if (string.length === 1) {
    throw new Error('Too short: Input can not be only one character long.');
  } else return [...string].reverse().join('');
}

export { reverseString };
