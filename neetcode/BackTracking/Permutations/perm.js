// Given an array nums of distinct integers, return all the possible 
// permutations. You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    //base case of the function
    if(nums.length === 1){
        //return an array of arrays, but since we know that he permutation of a single
        //number is just itself, once the array is just one value we know its just itself
        return [nums.slice()]
    }
    for (let i = 0;i<nums.length;i++){
        //remove one value and store it so we can add it back later
        let tempnum = nums.shift()
        //check the permutaion of the rest of the elements when you remove 1 element
        let perms = permute(nums.slice())

        //add the results of the recursive call to our temp removed element to it
        for(let p of perms){
            p.push(tempnum)
        }
        //add copy to the res array
        res.push(...perms)
        //readd the num we removed at the start
        nums.push(tempnum)
    }
    return res
};