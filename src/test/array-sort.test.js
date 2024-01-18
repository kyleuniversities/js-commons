import { binaryIntegerSort } from '../commons/array/array-sort';
import { nextInt } from '../commons/random';

describe('testing array sort functions', () => {
  test('binaryIntegerSort() sorts an array', () => {
    const SIZE = 10;
    const array = [];
    for (let i = 0; i < SIZE; i++) {
      array.push(nextInt(0, 110));
    }
    binaryIntegerSort(array, 0, 110, 0, SIZE);
    for (let i = 0; i < SIZE - 1; i++) {
      expect(array[i]).toBeLessThanOrEqual(array[i + 1]);
    }
  });
});
