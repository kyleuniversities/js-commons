/**
 * Swaps two elements in an array
 */
export const swap = function (array, i, j) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};
