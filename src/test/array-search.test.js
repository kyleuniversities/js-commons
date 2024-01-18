import { binarySearch } from '../commons/array/array-search';
import { binaryIntegerSort } from '../commons/array/array-sort';
import { nextInt } from '../commons/random';

describe('testing array search functions', () => {
  test('binarySearch() searches an array', () => {
    const SIZE = 10;
    const array = [];
    for (let i = 0; i < SIZE; i++) {
      array.push(i);
    }
    binaryIntegerSort(array, 0, 110, 0, SIZE);
    for (let i = 0; i < SIZE; i++) {
      const matchingIndex = binarySearch(array, array[i], 0, SIZE);
      expect(matchingIndex).toEqual(i);
    }
  });
});
