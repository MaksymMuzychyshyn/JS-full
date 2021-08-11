
import { withdraw } from './withdraw';

it('should return transaction result (40)', () => {
  expect(withdraw(['Maksym', 'Andrij', 'Serhey', 'Yan'], [700, 50, 25, 80], 'Maksym', 10)).toEqual(20);
});

it('should return transaction result (90)', () => {
  expect(withdraw(['Maksym', 'Andrij', 'Serhey', 'Yan'], [700, 50, 25, 80], 'Andrij', 10)).toEqual(10);
});

it('should return transaction result (-1, not enough money)', () => {
  expect(withdraw(['Maksym', 'Andrij', 'Serhey', 'Yan'], [700, 50, 25, 80], 'Yan', 10)).toEqual(70);
});