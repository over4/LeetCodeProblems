// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, the only constraint 
// stopping you from robbing each of them is that adjacent houses have 
// security systems connected and it will automatically contact the 
// police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each 
// house, return the maximum amount of money you can rob tonight without 
// alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //since this is a dynamic programming problem we can shorten the problem into subproblems
    //the first thing to notice is that at the start we have a choice, either rob the first
    //house or the second because we cant rob adjacent houses. what we can do is create running
    //totals for these choices, for any element if we wanted to get what we can rob from it
    //all we would need to do is to look at the max of the two previous values 
    let rob1 = 0,rob2 = 0
    //rob2 will be the most recent robbed house and rob1 will be the house previous to that
    //ie [rob1,rob2,n,n+1 ...]
    //this means if we want to include n, we cant use rob2 and if we want to use rob2
    //we can use either n or rob1
    for(const n of nums){
        //this is that condition that takes the max of rob1+n or rob2
        let temp = Math.max(n+rob1,rob2)
        //update the prev rob
        rob1 = rob2
        //update the most recent which is rob2 with the new max we found
        rob2 = temp
    }
    //rob2 is the last value we visit and will always be the largest because we are 
    //computing it with the max function
    return rob2
};