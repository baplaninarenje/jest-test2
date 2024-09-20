import { analyzeArray } from './analyzeArray.js';

test('module exists', () => {
  expect(analyzeArray).toBeDefined();
});

test('throw error if input is not an array of numbers', () => {
  const inputsArray = [
    1,
    null,
    undefined,
    true,
    { a: 1, b: 2 },
    [],
    ['1', '2'],
  ];
  inputsArray.forEach((input) => {
    expect(() => analyzeArray(input)).toThrow(/Wrong type/);
  });
});

test('each analyzeArray property exists', () => {
  const inputsArray = [
    analyzeArray([1]).average,
    analyzeArray([1]).min,
    analyzeArray([1]).max,
    analyzeArray([1]).length,
  ];

  inputsArray.forEach((input) => {
    expect(input).toBeDefined();
  });
});

test('successfully analyzed array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([Number.MIN_VALUE, Number.MAX_VALUE])).toEqual({
    average: 8.988465674311579e307,
    min: 5e-324,
    max: 1.7976931348623157e308,
    length: 2,
  });
});
