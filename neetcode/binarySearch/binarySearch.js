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
            //curr value is larger than target so use smaller array
            right=half-1
        }else{
            //curr value is smaller so use larger half of array
            left=half+1
        }
    }
    return -1
};
console.log(search([-1,0,3,5,9,12],9))
console.log(search([-1,0,3,5,9,12],2))