// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.



var searchMatrixNotOptimal = function(matrix, target) {
    //there is a very simple but not optimal way to find the target
    //and we can get the target in  mlogn time, we can do this b u just applying the 
    //binary search to each row of the matrix
    for(let i = 0;i<matrix.length;i++){
        //loop through each array
        let newArray = matrix[i]
        let left =0,right = matrix[i].length-1
        while(left<=right){
            //get the halfway
            let half = Math.floor((left+right)/2)
            if(newArray[half] === target){
                //we have a match
                return true
            }else if(newArray[half] > target){
                //change the value of right because we know that we need to check
                //for smaller values in the small half of the array
                right=half-1
            }else{
                //change the value of left because we know we need a larger value
                //so skip over the smaller half of the array
                left=half+1
            }
        }
    }
    return false
};

console.log(searchMatrixNotOptimal([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))//true
console.log(searchMatrixNotOptimal([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13))//false
console.log(searchMatrixNotOptimal([[1,3]],3))//true


var searchMatrix = function(matrix,target){
    let rows = matrix.length
    let columns = matrix[0].length
    let top = 0 , bot = rows-1
    while(top<=bot){
        //get our current row
        let row = Math.floor((top+bot)/2)
        if(target > matrix[row][columns-1]){
            //check the last value of the row we are on to check if we need to be larger or smaller
            //now we know we need to be larger 
            top = row + 1
        }else if (target < matrix[row][0]){
            //check if value is smaller than smallest value in array, and if it is we need to be smaller
            bot = row - 1
        }else{
            //value falls in row
            break
        }
    }
    if(!(top<=bot)){
        //invalid point means we checked every row and the value wasnt there
        return false
    }
    //the value then must fall in the row the was left
    let row = Math.floor((top + bot)/2)
    let left = 0 , right = columns-1 
    while(left <= right){
        half = Math.floor((left+right)/2)
        if(target > matrix[row][half]){
            //we need a larger value so shift left
            left = half + 1
        }else if(target < matrix[row][half]){
            //we need a smaller value so shift right
            right = half-1
        }else{
            return true
            //we found the value
        }
    }
    //if we never found the vlaue so return false
    return false
}
console.log("///////////////////////////////////")
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))//true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13))//false
console.log(searchMatrix([[1,3]],3))//true
console.log(searchMatrix([[1],[3]],3))//true