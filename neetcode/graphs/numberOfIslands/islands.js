// Given an m x n 2D binary grid grid which represents a map of '1's 
// (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting 
// adjacent lands horizontally or vertically. You may assume all
//  four edges of the grid are all surrounded by water.
// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //variable to store search directions
    const directions = [[0,1], [0,-1], [1,0], [-1,0]];
    //check if the grid has the right dimentions
    if( grid== null|| grid == 0)return 0
    //get the length of the rows and cols
    let rows = grid.length
    let cols = grid[0].length
    //create a set to store the visited indexes
    //store the number of isaldns and this is that we return
    let islands = 0
    //loop through every cell, and if we find a 1, apply bfs to change all the connected
    //1 into zeros and increase the island count by 1
    for(let i =0;i<rows;i++){
        for(let j = 0; j<cols;j++){
            if(grid[i][j] == "1"){
                //we have found a new island,so run the bfs adn increase islands
                bfs(grid,i,j)
                islands += 1
            }
        }
    }
    return islands
    //helper function to check if idex will be out of bounds
    function outOfBounds(grid,r,c){
        //check all the condtions where we wouldnt want the algo to keep going
        //so when the indexes are either too small or too big,
        //additionally we want to consider 0's as out of bounds because we dont need
        //to check those indexes
        if(r<0 || c<0)return true
        if(r>=rows || c >= cols)return true
        if(grid[r][c]=="0")return true
    }
    
    function bfs(grid,r,c){
        //use a queue since we are doing bfs
        let queue = [[r,c]]

        while(queue.length > 0){
            //get the current entry
            let [r,c] = queue.shift()
            //check if we are out of bounds
            if(outOfBounds(grid,r,c))continue
            //set the current index to 0
            grid[r][c] = "0"
            //push adjacent values into q and loop through each directiong
            for(let d of directions){
                //get the new row and col with the direction
                let newRow = (r + d[0]), newColumn = (c + d[1])
                //put new vals in the queue
                queue.push([newRow, newColumn])
            }
            
        }
    }
};