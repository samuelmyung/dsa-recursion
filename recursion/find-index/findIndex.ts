/** findIndex: return index of val in arr (or -1 if val is not present). */

//return index, or -1

//arr -> [1, 2, 3], val = 0
// -1 ->

function findIndex(arr: number[], val: number): number {
  if (arr.length === 0) {
    return -1;
  }

  if (arr[0] === val) {
    return 0;
  }

  return findIndex(arr.slice(1), val) === -1
    ? -1
    : findIndex(arr.slice(1), val) + 1;
}

export { findIndex };
