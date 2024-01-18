/**
 * Binary search for a target index
 */
export function binarySearch(array, target, start, upTo) {
  // Stop if the range is small
  if (start + 1 > upTo) {
    return -1;
  }

  // Establish the pivot constants
  const mid = Math.floor((start + upTo) / 2);
  const midValue = array[mid];

  // If the target is less than the middle value, search the lower half of the array
  if (target < midValue) {
    return binarySearch(array, target, start, mid);
  }

  // If the target is greater than the middle value, search the upper half of the array
  if (target > midValue) {
    return binarySearch(array, target, mid + 1, upTo);
  }

  // If the middle value is equal to the target, return the middle index
  return mid;
}
