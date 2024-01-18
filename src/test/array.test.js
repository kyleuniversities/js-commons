import { clone, swap } from '../commons/array/array';
import { nextInt } from '../commons/random';

describe('testing array functions', () => {
  test('clone() clones an array', () => {
    const SIZE = 10;
    const array = [];
    for (let i = 0; i < SIZE; i++) {
      array.push(nextInt(100));
    }
    const cloned = clone(array);
    for (let i = 0; i < SIZE; i++) {
      expect(cloned[i]).toEqual(array[i]);
    }
  });

  test('swap() swaps elements in an array', () => {
    for (let i = 0; i < 10; i++) {
      const array = [1, 2, 3, 4, 5];
      const swapped = clone(array);
      const i = nextInt(5);
      const j = nextInt(5);
      swap(swapped, i, j);
      expect(swapped[i]).toEqual(array[j]);
      expect(swapped[j]).toEqual(array[i]);
    }
  });
});
