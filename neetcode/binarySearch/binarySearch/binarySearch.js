// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums. If
//  target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


var search = function(nums, target) {
    //use binary search to take the halfway point of the array and adjust based on that
    //if the number is greater than out target then we know the targe will be in the lower 
    //half of the array so repeat the process
    let left = 0,right = nums.length-1
    while(left <= right){
        let half = Math.floor((left+right)/2)
        if(nums[half] === target){
            //we have a match
            return half
        }else if(nums[half] > target){
            //change the value of right because we know that we need to check
            //for smaller values in the small half of the array
            right=half-1
        }else{
            //change the value of left because we know we need a larger value
            //so skip over the smaller half of the array
            left=half+1
        }
    }
    //no value found
    return -1
};
console.log(search([-1,0,3,5,9,12],9))
console.log(search([-1,0,3,5,9,12],2))