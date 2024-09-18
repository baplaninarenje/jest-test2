import capitalize from './capitalize.js';

test('module exists', () => {
  expect(capitalize).toBeDefined();
});

test('throw error if input is not a string', () => {
  const inputsArray = [1, null, undefined, true, {}, []];
  inputsArray.forEach((input) => {
    expect(() => capitalize(input)).toThrow(/Wrong type/);
  });
});

test('throw error if input is an empty string', () =>
  expect(() => capitalize('')).toThrow(/Empty string/));

test('successfully capitalized', () => {
  const inputsArray = [
    {
      expect: 'c',
      toBe: 'C',
    },
    {
      expect: 'ca',
      toBe: 'Ca',
    },
    {
      expect: 'capitalized',
      toBe: 'Capitalized',
    },
  ];
  inputsArray.forEach((input) => {
    expect(capitalize(input.expect)).toBe(input.toBe);
  });
});
