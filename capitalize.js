export default function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(
      'Wrong type: Input must of type string but provided' +
        `input was of type [${typeof string}].`
    );
  } else if (string === '') {
    throw new Error('Empty string: Input can not be an empty string.');
  } else return string.charAt(0).toUpperCase() + string.slice(1);
}
