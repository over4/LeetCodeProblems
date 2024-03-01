// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division 
// operation.

function productExceptSelf(nums){
    //to get the value of each, simply multply the entire array and return that
    //value divided by what the currect element is
    let returnArray = []
    for(let i = 0; i<nums.length; i++){
        let product = nums.reduce((acc, curr, idx) => {
            if (i === idx) return acc; // Skip the current index
            return acc * curr;
        }, 1); // Initialize accumulator to 1 for multiplication
        returnArray.push(Math.abs(product));
    }
    return returnArray
}

console.log(productExceptSelf([1,2,3,4])) //[24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) //[0,0,9,0,0]