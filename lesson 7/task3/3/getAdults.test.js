
import { getAdults } from './getAdults';

it('should return adults', () => {
  expect(getAdults({ 'Maks': 19, Jack: 20, Mike: 27 })).toEqual({'Maks': 19, Mike: 18});
});

it('should return adults', () => {
  expect(getAdults({ Nastya: 30, Sergey: 55 })).toEqual({Nastya: 30});
});

it('should return empty obj', () => {
  expect(getAdults({})).toEqual({});
});