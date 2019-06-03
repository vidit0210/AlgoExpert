//Time Complexity O(n^2) Space O(n)
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    let firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondSum = array[j];
      if (firstNum + secondSum === targetSum)
        return [firstNum, secondSum].sort((a, b) => a - b);
    }
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 11));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 99));
