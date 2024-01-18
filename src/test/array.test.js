import { swap } from '../commons/array';

describe('testing array functions', () => {
  test('swap array', () => {
    const array = [1, 2, 3, 4, 5];
    swap(array, 4, 1);
    expect(JSON.stringify(array)).toEqual('[1,5,3,4,2]');
  });
});
