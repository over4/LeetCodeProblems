// You are given an array prices where prices[i] is the price of a
// given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot 
// achieve any profit, return 0.

function maxProfit(arr){
    //we can go though the array and check all the values in the future and 
    //check what the max profit could be, and store it 
    //this would be O(n^2) time so there is more efficient ways
    let maxProfit = {
        profit: 0,
        buyTime: 0,
        sellTime: 0
    }
    for(let i = 0; i < arr.length;i++){
        for(let j = i + 1;j<arr.length;j++){
            let tempProfit = arr[j]-arr[i]
            if(tempProfit > maxProfit.profit){
                //new max profit
                maxProfit = {
                    profit: tempProfit,
                    buyTime: arr[i],
                    sellTime: arr[j]
                }
            }
        }
    }
    return maxProfit.profit
}
console.log(maxProfit([7,1,5,3,6,4]))//5
console.log(maxProfit([7,6,4,3,1]))//0
console.log("/////////////////////////////////")


function maxProfitOptimized(arr){
    let lowest = Infinity
    let max = 0
    for(element of arr){
        if(element < lowest){
            //new lowest price
            lowest = element
        }else if(element-lowest > max){
            //new largest profit
            max = element - lowest
        }
    }
    return max
}
console.log(maxProfitOptimized([7,1,5,3,6,4]))//5
console.log(maxProfitOptimized([7,6,4,3,1]))//0
