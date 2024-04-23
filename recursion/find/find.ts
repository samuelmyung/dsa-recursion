/** find: return t/f is val is in arr. */

// [1,2,3]
// 1 -> val?



function find(arr: number[], val: number): boolean {
  if (arr.length === 0) return false;

    if(arr[0] === val){
      return true
  }

  return find(arr.slice(1), val)
}

export { find };