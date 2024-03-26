// Given an array of distinct integers candidates and a target integer target, 
// return a list of all unique combinations of candidates where the chosen 
// numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. 
// Two combinations are unique if the 
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations 
// that sum up to target is less than 150 combinations for the given input.

 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    //make our return array
    let res = []
    function dfs(currCan,currTarget,value){
        //if we have found a solution where we dont need to add any more,add solution to
        //the res array
        if(currTarget == 0)res.push(value)
        //for when we go over the target value
        if(currTarget <= 0)return
        //continue the search recurively
        for(let g=0; g<currCan.length; g++){
            //call the function and increase the starting index each time
            dfs(currCan.slice(g), currTarget-currCan[g], [...value, currCan[g] ] );  
        }
    }
    dfs(candidates, target, []);
    return res;
};
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. 
// Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []