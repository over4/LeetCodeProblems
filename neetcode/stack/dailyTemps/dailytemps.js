// Given an array of integers temperatures represents the daily 
// temperatures, return an array answer such that answer[i] is the
//  number of days you have to wait after the ith day to get a warmer
//   temperature. If there is no future day for which this is possible,
//    keep answer[i] == 0 instead.

var dailyTemperatures = function(temperatures) {
    let stack = [] //store the [temp,index] in the stack
    let result = new Array(temperatures.length).fill(0)//set the length of the array
    //loop through every value of the array
    for(let i = 0; i<temperatures.length; i++){
        //this will check the value of the stack to see if we are seeing a new higher temp
        //basically if currentTemp > last value in stack
        while(stack && temperatures[i] > temperatures[stack[stack.length-1]]){
            let idx = stack.pop()
            //the distance is just the the current index-the stored index
            result[idx]= (i-idx)
        }
        //lower value that we have see so we push the lower temp in
        stack.push(i)
    }
    return result
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])) //[1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])) // [1,1,1,0]
console.log(dailyTemperatures([30,60,90]))// [1,1,0]