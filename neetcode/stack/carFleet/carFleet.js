// There are n cars going to the same destination along a one-lane road. 
// The destination is target miles away.

// You are given two integer array position and speed, both of length n, 
// where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

// A car can never pass another car ahead of it, but it can catch up to it 
// and drive bumper to bumper at the same speed. The faster car will slow down 
// to match the slower car's speed. The distance between these two cars is ignored 
// (i.e., they are assumed to have the same position).

// A car fleet is some non-empty set of cars driving at the same position 
// and same speed. Note that a single car is also a car fleet.

// If a car catches up to a car fleet right at the destination point, it
//  will still be considered as one car fleet.

// Return the number of car fleets that will arrive at the destination.
// Example 1:
// Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
// Output: 3
// Explanation:
// The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet,
// meeting each other at 12.
// The car starting at 0 does not catch up to any other car, so it is a
// fleet by itself.
// The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet,
// meeting each other at 6. The fleet moves at speed 1 until it reaches target.
// Note that no other cars meet these fleets before the destination,


//a simple way to check if to calculate when each car will reach the target or 
//destination, and if the the car that is going to reatch the destination is
//behind a car that is going to reach the destination in a longer time
//then we know those 2 cars will create a fleet
//we can do that with (target-position)/speed tp give use the arrival time
//you can stop considering the car that catches up because we will be 
//bottlenecked by the slower car, so can keep reducing the arrays down
//start from the car that is closest to the target beacuse starting from the smallest
//there could be cases where you are comparing speeds of vehicles before they
//collide closer to the target
var carFleet = function(target,position,speed){
    //create on array to store all the pairs for position,speed
    const pairs = position.map((pos,idx)=>[pos,speed[idx]])
    let stack = []

    //sort the array in reverse order so that we can deal with the cars
    //that are closest to the target, this is beacuse then we 
    //do not have to deal with cars that are at the beginning having 
    //potentially different speeds depending on where they are
    pairs.sort((a,b)=>a[0]-b[0])

    //go through each set of pairs array and compare the times it would take
    //to reach the end
    for(let i =pairs.length-1;i>=0;i--){
        let [position,speed]=pairs[i]
        stack.push((target-position)/speed)
        //check if there are car available to become a fleet
        //and if there is if the time in the stack at the end is less than the other time
        //this line stack[stack.length-1] <= stack[stack.length-2]
        //will let us know that there is a time where there is a car
        //that will take a longer amount of time and therefore make a fleet
        if(stack.length >=2 && stack[stack.length-1] <= stack[stack.length-2]){
            stack.pop()
        }
    }
    return stack.length
}
console.log(carFleet(12,[10,8,0,5,3],[2,4,1,1,3]))//3
console.log(carFleet(10,[3],[3]))//1
console.log(carFleet(100,[0,2,3],[4,2,1]))//1