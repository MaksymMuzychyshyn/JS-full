
import { reverseArray } from './reverseArray';

it('should return reversed array', () => {
  expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
});

it('should return reversed array', () => {
  expect(reverseArray(['1', '2', '3'])).toEqual(["3", "2", "1"]);
});

it('should get null if argumet is not a string', () => {
  expect(reverseArray(1)).toEqual(null);
});