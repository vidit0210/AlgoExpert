# Time Complexity O(n) Space Complexity O(n) Coz of hash Table which is being utilized
def twoNumberSum(array, targetSum):
    nums = {}
    for num in array:
        potentialMatch = targetSum-num
        if potentialMatch in nums:
            return sorted([num, potentialMatch])
        else:
            nums[num] = True
    return []


print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 11))
print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 99))
