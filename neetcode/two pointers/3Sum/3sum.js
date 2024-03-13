// Given an integer array nums, 
// return all the triplets [nums[i], nums[j], nums[k]] such 
// that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function threeSum(nums){
    nums.sort( (a, b) => a - b );
    let result = []
    
    for(let i = 0;i<nums.length-2;i++){
        //skip duplicate numbers to get to the last number
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i+1
        let right = nums.length-1

        //use the two pointers to probe the rest of the array 
        while(left<right){
            //check the sum of the current numbers
            const sum = nums[i] + nums[left] + nums[right];
            
            if(sum === 0){
                //we have a match so add to result
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                //skip duplicate numbers but moving pointer
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
                
            }else if(sum<0){
                //need a larger number
                left++;
            }else if(sum>0){
                //need a smaller number
                right--;
            }
        }
    }
    return result
}

console.log(threeSum([-1,0,1,2,-1,-4]))