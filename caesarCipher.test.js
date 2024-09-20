import { caesarCipher } from './caesarCipher.js';

test('module exists', () => {
  expect(caesarCipher).toBeDefined();
});

test('throw error if string input is not a string', () => {
  const inputsArray = [1, null, undefined, true, {}, []];
  inputsArray.forEach((input) => {
    expect(() => caesarCipher(input)).toThrow(/Wrong type/);
  });
});

test('throw error if string input is an empty string', () =>
  expect(() => caesarCipher('')).toThrow(/Empty string/));

test('throw error if shift factor is not a number', () => {
  const inputsArray = ['1', null, true, {}, []];
  inputsArray.forEach((input) => {
    expect(() => caesarCipher('string', input)).toThrow(/Wrong type/);
  });
});

test('throw error if shift factor is less then 1', () =>
  expect(() => caesarCipher('string', -3)).toThrow(/Out of range/));

test('wrapping from z to a', () => expect(caesarCipher('xyz', 3)).toBe('abc'));

test('case preservation', () => expect(caesarCipher('HeLLo', 3)).toBe('KhOOr'));

test('punctuations, spaces, and other non-alphabetical characters should remain unchanged', () =>
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!'));
