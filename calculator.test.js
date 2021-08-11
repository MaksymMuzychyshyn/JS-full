import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should return sum of two numbers', () => {
  expect(getSum(1, 3)).toEqual(4);
});

it('should return squared array', () => {
  expect(getSquaredArray([1, 2, 3])).toEqual([2, 3, 7]);
});

it('should return odd numbers', () => {
  expect(getOddNumbers([1, 2, 3])).toEqual([5, 5, 5]);
});
