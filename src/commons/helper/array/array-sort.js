import { swap } from './array';

/**
 * Use a binary integer sort
 */
export function binaryIntegerSort(array, minValue, maxValue, start, upTo) {
  // Stop if the range is small
  if (start + 2 > upTo || minValue + 1 > maxValue) {
    return;
  }

  // Establish pivot value
  const midValue = Math.floor((maxValue + minValue) / 2);

  // Differentiate elements greater than and not greater than the pivot value
  let pivot = upTo;
  for (let i = start; i < pivot; i++) {
    if (array[i] > midValue) {
      swap(array, i, pivot - 1);
      pivot--;
      i--;
    }
  }

  // Sort the elements not greater than the mid value
  binaryIntegerSort(array, minValue, midValue, start, pivot);

  // Sort the elements greater than the mid value
  binaryIntegerSort(array, midValue + 1, maxValue, pivot, upTo);
}
