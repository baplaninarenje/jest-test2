import { calculator } from './calculator.js';

test('module exists', () => {
  expect(calculator).toBeDefined();
});

test('each calculator method exists', () => {
  const inputsArray = [
    calculator.add,
    calculator.subtract,
    calculator.divide,
    calculator.multiply,
  ];

  inputsArray.forEach((input) => {
    expect(input).toBeDefined();
  });
});

test('throw error if each input of the calculator method is not a number', () => {
  const inputsArray = ['1', null, undefined, true, {}, []];
  inputsArray.forEach((input) => {
    expect(() => calculator.add(input, input)).toThrow(/Wrong type/);
    expect(() => calculator.subtract(input, input)).toThrow(/Wrong type/);
    expect(() => calculator.divide(input, input)).toThrow(/Wrong type/);
    expect(() => calculator.multiply(input, input)).toThrow(/Wrong type/);
  });
});

test('successfully added', () => {
  const inputsArray = [
    {
      num1: 0,
      num2: 0,
      toBe: 0,
    },
    {
      num1: 0,
      num2: 1,
      toBe: 1,
    },
    {
      num1: 1,
      num2: 0,
      toBe: 1,
    },
    {
      num1: 2,
      num2: 3,
      toBe: 5,
    },
    {
      num1: Number.NEGATIVE_INFINITY,
      num2: Number.NEGATIVE_INFINITY,
      toBe: Number.NEGATIVE_INFINITY,
    },
    {
      num1: Number.NEGATIVE_INFINITY,
      num2: Infinity,
      toBe: NaN,
    },
    {
      num1: Infinity,
      num2: Infinity,
      toBe: Infinity,
    },
    {
      num1: Number.MAX_VALUE,
      num2: Number.MAX_VALUE,
      toBe: Infinity,
    },
    {
      num1: Number.MIN_VALUE,
      num2: Number.MIN_VALUE,
      toBe: 1e-323,
    },
    {
      num1: Number.MIN_VALUE,
      num2: Number.MAX_VALUE,
      toBe: 1.7976931348623157e308,
    },
  ];
  inputsArray.forEach((input) => {
    expect(calculator.add(input.num1, input.num2)).toBe(input.toBe);
  });
});

test('successfully subtracted', () => {
  const inputsArray = [
    {
      num1: 0,
      num2: 0,
      toBe: 0,
    },
    {
      num1: 0,
      num2: 1,
      toBe: -1,
    },
    {
      num1: 1,
      num2: 0,
      toBe: 1,
    },
    {
      num1: 2,
      num2: 3,
      toBe: -1,
    },
    {
      num1: 3,
      num2: 2,
      toBe: 1,
    },
    {
      num1: Number.NEGATIVE_INFINITY,
      num2: Number.NEGATIVE_INFINITY,
      toBe: NaN,
    },
    {
      num1: Number.NEGATIVE_INFINITY,
      num2: Infinity,
      toBe: Number.NEGATIVE_INFINITY,
    },
    {
      num1: Infinity,
      num2: Number.NEGATIVE_INFINITY,
      toBe: Infinity,
    },
    {
      num1: Infinity,
      num2: Infinity,
      toBe: NaN,
    },
    {
      num1: Number.MAX_VALUE,
      num2: Number.MAX_VALUE,
      toBe: 0,
    },
    {
      num1: Number.MIN_VALUE,
      num2: Number.MIN_VALUE,
      toBe: 0,
    },
    {
      num1: Number.MIN_VALUE,
      num2: Number.MAX_VALUE,
      toBe: -1.7976931348623157e308,
    },
    {
      num1: Number.MAX_VALUE,
      num2: Number.MIN_VALUE,
      toBe: 1.7976931348623157e308,
    },
  ];
  inputsArray.forEach((input) => {
    expect(calculator.subtract(input.num1, input.num2)).toBe(input.toBe);
  });
});

test('successfully divided', () => {
  const inputsArray = [
    {
      num1: 0,
      num2: 0,
      toBe: NaN,
    },
    {
      num1: 0,
      num2: 1,
      toBe: 0,
    },
    {
      num1: 1,
      num2: 0,
      toBe: Infinity,
    },
    {
      num1: 2,
      num2: 3,
      toBe: 0.6666666666666666,
    },
    {
      num1: 3,
      num2: 2,
      toBe: 1.5,
    },
    {
      num1: Number.NEGATIVE_INFINITY,
      num2: Number.NEGATIVE_INFINITY,
      toBe: NaN,
    },
    {
      num1: Number.NEGATIVE_INFINITY,
      num2: Infinity,
      toBe: NaN,
    },
    {
      num1: Infinity,
      num2: Number.NEGATIVE_INFINITY,
      toBe: NaN,
    },
    {
      num1: Infinity,
      num2: Infinity,
      toBe: NaN,
    },
    {
      num1: Number.MAX_VALUE,
      num2: Number.MAX_VALUE,
      toBe: 1,
    },
    {
      num1: Number.MIN_VALUE,
      num2: Number.MIN_VALUE,
      toBe: 1,
    },
    {
      num1: Number.MIN_VALUE,
      num2: Number.MAX_VALUE,
      toBe: 0,
    },
    {
      num1: Number.MAX_VALUE,
      num2: Number.MIN_VALUE,
      toBe: Infinity,
    },
  ];
  inputsArray.forEach((input) => {
    expect(calculator.divide(input.num1, input.num2)).toBe(input.toBe);
  });
});

test('successfully multiplied', () => {
  const inputsArray = [
    {
      num1: 0,
      num2: 0,
      toBe: 0,
    },
    {
      num1: 0,
      num2: 1,
      toBe: 0,
    },
    {
      num1: 1,
      num2: 0,
      toBe: 0,
    },
    {
      num1: 2,
      num2: 3,
      toBe: 6,
    },
    {
      num1: Number.NEGATIVE_INFINITY,
      num2: Number.NEGATIVE_INFINITY,
      toBe: Infinity,
    },
    {
      num1: Number.NEGATIVE_INFINITY,
      num2: Infinity,
      toBe: -Infinity,
    },
    {
      num1: Infinity,
      num2: Infinity,
      toBe: Infinity,
    },
    {
      num1: Number.MAX_VALUE,
      num2: Number.MAX_VALUE,
      toBe: Infinity,
    },
    {
      num1: Number.MIN_VALUE,
      num2: Number.MIN_VALUE,
      toBe: 0,
    },
    {
      num1: Number.MIN_VALUE,
      num2: Number.MAX_VALUE,
      toBe: 8.881784197001251e-16,
    },
  ];
  inputsArray.forEach((input) => {
    expect(calculator.multiply(input.num1, input.num2)).toBe(input.toBe);
  });
});
