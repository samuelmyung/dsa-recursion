/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(
  arr: number[],
  val: number,
  left = 0,
  right = arr.length
): boolean {
  if (left > right) {
    return false;
  }

  const mid = Math.floor((right + left) / 2);

  if (arr[mid] === val) {
    return true;
  }

  if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1);
  }

  return binarySearch(arr, val, mid + 1, right);
}

export { binarySearch };
