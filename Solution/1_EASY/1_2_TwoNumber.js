//Time Complexity O(n) Space Complexity O(n)
//Using HashMap resulting into greater SpaceComplexity

function twoNumberSum(array, targetSum) {
  let nums = {};
  for (let num of array) {
    let potentialMatch = targetSum - num;
    if (potentialMatch in nums)
      return [num, potentialMatch].sort((a, b) => a - b);
    else nums[num] = true;
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 11));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 99));
