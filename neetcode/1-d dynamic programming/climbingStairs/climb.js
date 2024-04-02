// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many 
// distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
var climbStairsBruteForce = function(n) {
    //recursively call function to check if we can go 1 stair or 2 stairs right now,
    function search(total){
        //if we go out of bounds
        if(total > n)return 0

        if(total === n){
            //we have found a match
            return 1
        }
        //no match so search deeper
        return search(total+1) + search(total+2)
    }
    return search(0)
};
console.log(climbStairsBruteForce(2)) //2
console.log(climbStairsBruteForce(5)) //8
console.log(climbStairsBruteForce(44)) // 1134903170 takes too long so not usable

//we can acutally get a much better solution by recognizing that there is a lot of repeated
//calculations, for example if you are solving for n = 5, there exists two trees starting from
//2 where either you took 1 step then 2 or you started with 2 steps, both evaluate the exact
//same way which means we are repeating work or for example, everytime we have out total as 4
//we know that there is only 1 solution from this, to take 1 step because 2 will over flow
//so instead of calculating 4 everytime we see it,we know it it only has 1 solution
//we can apply with logic to skip repeated work
//we are going to work our way back up the tree by solving bottom up, working with the base
//case in out exmaple it would be 4 +1 or 4+2

//when we use an array we are really just taking the possible ways to reach the end
//from the last elements, so if we had n = 5 then we know there is 1 solution from 5
//and 1 solution from 4, but when we are at 3, it is just the summation of the 2
//elements before it, so 2. if we look at 2 then again we can take the sum of the 
//2 elements before it, 3 and 2 to give us 5. and finally if we start at 0 then
//we know it is just 5+3 for the previous 2 steps, which gives us 8 the correct
//ans. So all we need to do is keep track of the previous 2 elements and add them for
//the current element, we can do this by shifting pointers
var climbStairs = function(n) {
    let one = 1,two = 1
    for(let i = 0;i<n-1;i++){
        //pointer shifting
        //store one in a temp since we are modifiying it
        temp = one
        //new first pointer is two + one
        one = one + two
        //reassign two to what 1 was before
        two = temp
    }
    return one
};
