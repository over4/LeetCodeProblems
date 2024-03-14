// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i]
// bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses 
// some pile of bananas and eats k bananas from that pile. If the pile has less than
// k bananas, she eats all of them instead and will not eat any more bananas during 
// this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before
//  the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.


//we are given h or the number of hours koko has to eat, for the problem to 
//be able to work we know the length of piles will always be less than h
//we also know that the max value will be the max of piles, beacuse if koko 
//can each the largest value in piles, then koko can each all the the piles
//in the time it takes to go throug the array
//there we can check every value from 1-max(piles) adn this solution will not take
//that long but we can make it faster by applying binary search of the potential solution
//array of [1 .... Max(piles)]
var minEatingSpeed = function(piles, h) {
    let left = 1
    let right = Math.max(...piles)
    //result is at most the max value
    let res = right

    //perform binary search on the array on elements
    while(left<=right){
        let half = Math.floor((left + right)/2)
        let hours = 0
        //go through the array to test the value
        for(element of piles){
            //get the number of hours required for each pile and add them
            hours += Math.ceil(element/half)
            
        }
        if(hours <= h){
            //this works but we need to check if there is a smaller number that works
            res = half
            right = half - 1
        }else{
            //need a larger of bananas eaten per hour
            left = half + 1
        }
    }
    //return what is in the res variable
    return res
};
console.log(minEatingSpeed([3,6,7,11],8))//4
console.log(minEatingSpeed([30,11,23,4,20],5))//30
console.log(minEatingSpeed([30,11,23,4,20],6))//23