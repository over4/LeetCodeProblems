// Given an unsorted array of integers nums, 
// return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.



function longestSeq(nums){
    //create a set to keep track of what we have seen before
    //now we can check the existance of items in constant time
    if(nums  === 0) return 0
    let longest = 0
    let set = new Set(nums)
    for(let num of set){
        //we can check if it is the start of a seq by checking if the 
        //the set has a value for num-1 in the set
        if(!set.has(num - 1)) {
            let currentNum = num;
            let counter = 1
            while(set.has(currentNum+1)){
                //add to the counters and 
                currentNum += 1
                counter += 1
            }
            //check if this is the new longest streak and update it if it is
            longest = Math.max(longest,counter)
        }
    }
    return longest
}


console.log(longestSeq([100,4,200,1,3,2]))//output 4
console.log(longestSeq([0,3,7,2,5,8,4,6,0,1]))//output 9