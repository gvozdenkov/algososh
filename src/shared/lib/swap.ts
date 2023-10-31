/**
 * @function
 * @name swap
 * Swap elements in the array. The original array mutates
 * @example
 * const arr = [1, 2, 3]
 * swap(arr, 0, 2);
 * console.log(arr) // [3, 2, 1]
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} j
 */
export const swap = <T>(arr: T[], i: number, j: number) => {
  const _arr = [...arr];
  [_arr[i], _arr[j]] = [_arr[j], _arr[i]];
  return _arr;
};