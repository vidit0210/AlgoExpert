# Time Complexity will Be O(nlogn) Because sotring Space Complexit will be O(n)
def twoNumberSum(array, targetSum):
    array = sorted(array)
    left = 0
    right = len(array)-1
    while(left < right):
        if(array[left]+array[right] == targetSum):
            return [array[left], array[right]]
        elif(array[left]+array[right] > targetSum):
            right -= 1
        else:
            left += 1
    return []


print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 11))
print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 99))
