import { calc } from './calculator';

it('should return summation result', () => {
  const res = calc('4 + 4');
  expect(res).toEqual('4 + 4 = 8');
});
it('should return subtraction result', () => {
  const res = calc('8 - 2');
  expect(res).toEqual('8 - 2 = 6');
});
it('should return multiplication result', () => {
  const res = calc('2 * 4');
  expect(res).toEqual('2 * 4 = 8');
});
it('should get the result of devision of numbers', () => {
  const res = calc('4 / 2');
  expect(res).toEqual('4 / 2 = 2');
});
it('should get null if argumet is not a string', () => {
  const res = calc(12 + 12);
  expect(res).toEqual(null);
});
