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
var findDuplicateExtraSpace = function(nums) {
    //since we know the array is larger than the number of possible values,
    //there must exist a duplicate
    //use a set to keep track of every element we see
    let set = new Set()
    for(let i = 0;i<nums.length;i++){
        if(set.has(nums[i]))return nums[i]
        set.add(nums[i])
    }
};
//we need to only use constant extra space so this solution is not correct


//this is called floyds algo, and we can use a linked list to find the cycle, which will 
//be out duplicate number. First we need to implement a fast and slow pointer, once we
//find the interesection, the duplicate will be equal distance from the original start
//of the array so we can just decrease from intersection and increase the start 
//until they both meet
//we will treat the array as each value points to that specfic element
//so number 3 points to the third index, since the range is 1-n we know there will be
//no number that points to 0 so we start at 0
var findDuplicate = function(nums){
    let slow = 0, fast = 0

    do{
        //iterate slow and fast until they intersect
        slow = nums[slow]
        //since we need to iterate twice just take the value twice
        fast = nums[nums[fast]]
    }while(slow != fast)
    // we have the intersection
    //now count until we intersect
    let slow2 = 0
    while(true){
        //increment from the start until the are equal
        slow = nums[slow]
        slow2 = nums[slow2]
        if(slow == slow2)return slow
    }
}





console.log(findDuplicateExtraSpace([1,3,4,2,2]))
console.log(findDuplicateExtraSpace([3,1,3,4,2]))
console.log(findDuplicateExtraSpace([3,3,3,3,3]))
console.log("/////////////////////////////////")
console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([3,1,3,4,2]))
console.log(findDuplicate([3,3,3,3,3]))
