// Suppose an array of length n sorted in ascending order is rotated 
// between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time 
// results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the 
// minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

//rotated means taking the right most element and bringing it to the left
//so 2 rotations on array of [1,2,3,4,5,6,7,8] will result in [5,6,7,8,1,2,3,4]
//this solution relies on the fact that in a rotated array, after the rotations
//the values that appear on the left side of the pivot will always be less than the
//values in the left side of the array, this means we can use this to check where
//we are in the array. 
//we can do this by comparing the middle value that we compute, to the value in the left
//most position, nums[half]>= nums[left] then we know we want to search the right side of the
//array because we know from left -> middle the values only increase
var findMin = function(nums) {
    let left = 0,right = nums.length-1
    let res = Infinity
    //edge case if array is just 1 value
    if(nums.length == 1){
        return nums[0]
    }
    while(left<=right){
        //this is a check condition for if the array is in sorted form now
        if(nums[left]<nums[right]){
            res = Math.min(res,nums[left]) 
            break;
        } 
        //compute the mid point
        let half = Math.floor((right+left)/2)
        res = Math.min(res,nums[half])
        //this is the logic for when to move the pointers
        //like said before if we know the middle point is larger
        //then the left most pointer then we know we dont need to look through
        //the left side beacuse all the values will be larger
        if(nums[half]>=nums[left]){
            left = half+1
        }else{
            right = half-1
        }
    }
    return res
};
console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([11,13,15,17]))