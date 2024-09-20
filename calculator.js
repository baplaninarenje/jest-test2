const calculator = {};

calculator.add = (num1, num2) => {
  isNumber(num1, num2);
  return num1 + num2;
};
calculator.subtract = (num1, num2) => {
  isNumber(num1, num2);
  return num1 - num2;
};
calculator.divide = (num1, num2) => {
  isNumber(num1, num2);
  return num1 / num2;
};
calculator.multiply = (num1, num2) => {
  isNumber(num1, num2);
  return num1 * num2;
};

function isNumber(...params) {
  params.forEach((param) => {
    if (typeof param !== 'number') {
      throw new Error(
        'Wrong type: Input must of type number but provided' +
          `input was of type [${typeof param}].`
      );
    }
  });
}

export { calculator };
