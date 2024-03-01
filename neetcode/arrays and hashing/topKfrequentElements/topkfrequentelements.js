// Given an integer array nums and an integer k, 
// return the k most frequent elements. 
// You may return the answer in any order.


function  topKFrequent(nums, k) {
    let map = new Map();
    for (let element of nums){
        //create a new key for the map if element has not been seen and set it to one
        if (!map.has(element)) map.set(element ,1);
        //increase the number of times seen
        else map.set(element ,map.get(element)+1);
    }
    //return the top k elements
    return [...map.entries()].sort((a,b)=> b[1] - a[1]).slice(0,k).map((e)=>e[0])
}

console.log(topKFrequent([1,1,1,2,2,3],2))
console.log(topKFrequent([1],1))