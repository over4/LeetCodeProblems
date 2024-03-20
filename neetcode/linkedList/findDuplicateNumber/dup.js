// Given an array of integers nums containing n + 1 integers 
// where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this 
// repeated number.

// You must solve the problem without modifying the array nums and 
// uses only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    //since we know the array is larger than the number of possible values,
    //there must exist a duplicate
    let set = new Set()
    for(let i = 0;i<nums.length;i++){
        if(set.has(nums[i]))return nums[i]
        set.add(nums[i])
    }
};
console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([3,1,3,4,2]))
console.log(findDuplicate([3,3,3,3,3]))