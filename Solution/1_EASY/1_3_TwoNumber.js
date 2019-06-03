function twoNumberSum(array, targetSum) {
  let left = 0;
  let right = array.length - 1;
  array = array.sort((a, b) => a - b);
  while (left < right) {
    if (array[left] + array[right] == targetSum)
      return [array[left], array[right]];
    else if (array[left] + array[right] < targetSum) left++;
    else right--;
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 11));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 99));
