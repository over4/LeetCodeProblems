// There is an integer array nums sorted in ascending order 
// (with distinct values).

// Prior to being passed to your function, nums is possibly 
// rotated at an unknown pivot index k (1 <= k < nums.length) 
// such that the resulting array is 
// [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer 
// target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.



//we can apply a similar approach to the min of a rotated array problem
//we can apply the logic that if nums[half]>=nums[left] then we can understand
//what values are on each side, we know that there will be larger numbers on the left
//of half and smaller numbers on the left, so we can compare this to the target to 
//adjust the pointers accordingly



var search = function(nums, target) {
    let left = 0, right = nums.length-1
    let res

    while(left<=right){
        //compute the midpint
        let mid = Math.floor((left+right)/2)

        //check if we found the right value
        if(nums[mid] === target){
            return mid
        }

        //check what section of the array we are in
        if(nums[mid]>= nums[left]){
            if(target>nums[mid] || target < nums[left]){
                //target is larger than current value but left side is smaller
                //so search right
                left = mid + 1
            }else{
                right = mid - 1
            }
        }else{
            if(target<nums[mid] || target > nums[right]){
                //target is less and therefore we need to look for smaller numbers
                //or target is large than numbers on the right which also means
                //we need to move to smaller numbers
                right = mid - 1
            }else {
                left = mid + 1
            }
        }
    }
    return -1
};

console.log(search([4,5,6,7,0,1,2],0))//4
console.log(search([4,5,6,7,0,1,2],3))//-1
console.log(search([1],0))//-1