// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division 
// operation.
function productExceptSelfBrute(nums){
    //to get the value of each, simply multply the entire array and return that
    //value divided by what the currect element is
    let returnArray = []
    for(let i = 0; i<nums.length; i++){
        let product = nums.reduce((acc, curr, idx) => {
            if (i === idx) return acc; // Skip the current index
            return acc * curr;
        }, 1); // Initialize accumulator to 1 for multiplication
        returnArray.push((product));
    }
    return returnArray
}

console.log(productExceptSelfBrute([1,2,3,4])) //[24,12,8,6]
console.log(productExceptSelfBrute([-1,1,0,-3,3])) //[0,0,9,0,0

//this approach is actually very inefficient because it is o^2 time because there
//are a lot of redundant calculations this is a better solution

function productExceptSelf(nums){
    let length = nums.length
    let answer = Array(length).fill(1)
    //calculate the product of the left and right side of the array
    //
    let leftProduct = 1
    for(let i = 0;i<length;i++){
        answer[i] = leftProduct
        leftProduct *= nums[i]
    }
    let rightProduct = 1
    for(let i = length-1;i>=0;i--){
        answer[i] *=rightProduct
        rightProduct *= nums[i]
    }
    return answer 
}
console.log("////////////////////")
console.log(productExceptSelf([1,2,3,4])) //[24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) //[0,0,9,0,0