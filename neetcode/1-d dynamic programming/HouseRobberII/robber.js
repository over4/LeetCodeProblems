// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed. All houses at this 
// place are arranged in a circle. That means the first house is the 
// neighbor of the last one. Meanwhile, adjacent houses have a security 
// system connected, and it will automatically contact the police if two 
// adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, 
// return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:
// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Example 2:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [1,2,3]
// Output: 3
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //the key difference for this question that is different is that the house
    //are now arranged in a circle so that the last house is a neighbor of the first
    //house, what we can do since we know we cant rob then last house and the first
    //house at the same time, we can run the same solution but take it from 1..arr-1
    //and 2..arr so we are alternating the ending position, then we just take the max of this
    let arr1 = nums.filter((ele,idx) => {
        if(idx == 0){
            return false
        }
        return true
    })
    let arr2 = nums.filter((ele,idx) =>{
        if(idx == nums.length-1)return false
        return true
    })
    return Math.max(nums[0],helper(arr1),helper(arr2))

    //lets get the function from the last solution
    function helper(arr){
        let rob1 = 0, rob2 = 0
        for(const n of arr){
            //compute the max for this element
            let temp = Math.max(rob1+n,rob2)
            //shift the pointers
            rob1 = rob2
            rob2 = temp
        }
        return rob2
    }
};