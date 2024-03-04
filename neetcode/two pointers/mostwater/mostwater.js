// You are given an integer array height of length n. 
// There are n vertical lines drawn such that the two 
// endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, 
// such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function mostWaterBrute(heights){
    //find the two heights what will give the most volume of water
    //can brute force by checking every index with the distance between both
    //indexes 
    let max = 0
    for(let i = 0;i<heights.length;i++){
        for(let j = 0; j<heights.length;j++){
            if(i !== j ) {
                let currentVol = (Math.abs(i-j)) * Math.min(heights[i],heights[j])
                max = Math.max(max,currentVol)
            }
        }
    }
    return max
}
console.log(mostWaterBrute([1,8,6,2,5,4,8,3,7]))//49
console.log(mostWaterBrute([1,1]))//1
//this is o(n^2) time but we can make it faster by just changing one small thing
//since we need the area, the second loop can start checking the area after i because
//we would have already check the previous containers, therefore we dont need to 
//check them again
function mostWaterOpt(heights){
    //find the two heights what will give the most volume of water
    //can brute force by checking every index with the distance between both
    //indexes 
    let max = 0
    for(let i = 0;i<heights.length;i++){
        for(let j = i+1; j<heights.length;j++){
            if(i !== j ) {
                let currentVol = (Math.abs(i-j)) * Math.min(heights[i],heights[j])
                max = Math.max(max,currentVol)
            }
        }
    }
    return max
}
console.log("//////////////////////////")
console.log(mostWaterOpt([1,8,6,2,5,4,8,3,7]))//49
console.log(mostWaterOpt([1,1]))//1


function mostWaterPerfect(heights){
    //now lets use points for left and right that will check both sides of the array
    //and be incremented based on something
    let left= 0
    let right = heights.length-1
    let max=0
    while(left<right){
        let currentVol = (Math.abs(left-right)) * Math.min(heights[left],heights[right])
        max = Math.max(max,currentVol)
        //move the pointer based on the size of trhem
        if(heights[left]<=heights[right]){
            //left wall is smaller so increment left
            left++
        }else{
            right--
        }
    }
    return max
}
console.log("//////////////////////////")
console.log(mostWaterPerfect([1,8,6,2,5,4,8,3,7]))//49
console.log(mostWaterPerfect([1,1]))//1