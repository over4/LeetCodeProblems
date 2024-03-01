// Given a 1-indexed array of integers numbers that is already 
// sorted in non-decreasing order, find two numbers such that they 
// add up to a specific target number. Let these two numbers be numbers[index1] 
// and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, 
// added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. 
// You may not use the same element twice.
// Your solution must use only constant extra space.

function twoSum(nums,tar){
    //create a set of all seen numbers and then check if the set contains the compliment
    let numSet = new Set(nums);
    for(let i=0;i<nums.length;i++){
        //get the compliment of the number
        compliment = tar-nums[i];
        //check the set
        if(numSet.has(compliment)){
            //return the indexs and add 1 to fit the  output
            return [nums.indexOf(nums[i]) + 1,nums.indexOf(compliment) + 1];
        }
    }
}
console.log(twoSum([2,7,11,15],9))//[1,2]
console.log(twoSum([2,3,4],6))//[1,3]
console.log(twoSum([-1,0],-1))//[1,2]

//while this works it isnt as efficient and also might be wrong of there are duplicate 
//numbers, to ensure we get the rigth ans we must use two pointers

function twoSumPointers(nums,tar){
    let left = 0 , right = nums.length-1
    while (left < right){
        let sum = nums[left]+nums[right]
        if(sum === tar){
            return [left+1,right+1]
        }else if(sum < tar){
            //this means we need to use a larger number
            left++
        }else if(sum > tar){
            //move pointer to smaller number
            right--
        }
    }
}
console.log("////////////////////////////////")
console.log(twoSumPointers([2,7,11,15],9))//[1,2]
console.log(twoSumPointers([2,3,4],6))//[1,3]
console.log(twoSumPointers([-1,0],-1))//[1,2]