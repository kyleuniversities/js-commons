/**
 * Clones an array
 */
export function clone(array) {
  const clone = [];
  for (let i = 0; i < array.length; i++) {
    clone.push(array[i]);
  }
  return clone;
}

/**
 * Swaps two elements in an array
 */
export function swap(array, i, j) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
