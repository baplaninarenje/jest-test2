import { reverseString } from './reverseString.js';

test('module exists', () => {
  expect(reverseString).toBeDefined();
});

test('throw error if input is not a string', () => {
  const inputsArray = [1, null, undefined, true, {}, []];
  inputsArray.forEach((input) => {
    expect(() => reverseString(input)).toThrow(/Wrong type/);
  });
});

test('throw error if input is an empty string', () =>
  expect(() => reverseString('')).toThrow(/Empty string/));

test('throw error if input is only one character long', () =>
  expect(() => reverseString('a')).toThrow(/Too short/));

test('successfully capitalized', () => {
  const inputsArray = [
    {
      expect: 'ca',
      toBe: 'ac',
    },
    {
      expect: 'Ca',
      toBe: 'aC',
    },
    {
      expect: 'cA',
      toBe: 'Ac',
    },
    {
      expect: 'teSt',
      toBe: 'tSet',
    },
    {
      expect: '1*@&`~',
      toBe: '~`&@*1',
    },
  ];
  inputsArray.forEach((input) => {
    expect(reverseString(input.expect)).toBe(input.toBe);
  });
});
