// Given n non-negative integers representing an elevation map 
// where the width of each bar is 1,
// compute how much water it can trap after raining.
//https://leetcode.com/problems/trapping-rain-water/description/

function trap(height) {
    // Initialize two pointers, left and right, at the beginning and end of the 
    // array respectively
    let left = 0, right = height.length - 1;
    
    // Initialize variables to keep track of the maximum height seen 
    // so far from the left and right
    let leftMax = 0, rightMax = 0;

    // Variable to accumulate the total amount of trapped water
    let trappedWater = 0;
    // Loop until the two pointers meet
    while (left < right) {
        // If the current left height is less than or equal to the current 
        // right height,
        // there's a potential for trapping water on the left side
        if (height[left] < height[right]) {
            // If the current left height is greater than or equal to the left max,
            // update the left max to the current height
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                // Otherwise, water can be trapped at the current index,
                // add the difference between left max and current height 
                //to the total trapped water
                trappedWater += leftMax - height[left];
            }
            // Move the left pointer to the right
            left++;
        } else {
            // This block is symmetric to the above but for the right side.
            // If the current right height is less than the right max, it means 
            //water can be trapped.
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                trappedWater += rightMax - height[right];
            }
            // Move the right pointer to the left
            right--;
        }
    }

    // Return the total amount of trapped water
    return trappedWater;
}

// Example usage
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([4,2,0,3,2,5])); // Output: 9