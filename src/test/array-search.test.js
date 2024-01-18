import { binarySearch } from '../commons/helper/array/array-search';
import { binaryIntegerSort } from '../commons/helper/array/array-sort';
import { nextInt } from '../commons/helper/random';

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
