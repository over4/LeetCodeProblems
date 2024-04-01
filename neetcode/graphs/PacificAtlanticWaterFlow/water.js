// There is an m x n rectangular island that borders both the 
// Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the 
// island's left and top edges, and the Atlantic Ocean touches the island's
//  right and bottom edges.

// The island is partitioned into a grid of square cells. You 
// are given an m x n integer matrix heights where heights[r][c] 
// represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow 
// to neighboring cells directly north, south, east, and west if 
// the neighboring cell's height is less than or equal to the 
// current cell's height. Water can flow from any cell adjacent 
// to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] 
// denotes that rain water can flow from cell (ri, ci) to both the Pacific 
// and Atlantic oceans.

// Example 1:
// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
// [0,4]: [0,4] -> Pacific Ocean 
//        [0,4] -> Atlantic Ocean
// [1,3]: [1,3] -> [0,3] -> Pacific Ocean 
//        [1,3] -> [1,4] -> Atlantic Ocean
// [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
//        [1,4] -> Atlantic Ocean
// [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
//        [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
// [3,0]: [3,0] -> Pacific Ocean 
//        [3,0] -> [4,0] -> Atlantic Ocean
// [3,1]: [3,1] -> [3,0] -> Pacific Ocean 
//        [3,1] -> [4,1] -> Atlantic Ocean
// [4,0]: [4,0] -> Pacific Ocean 
//        [4,0] -> Atlantic Ocean
// Note that there are other possible paths for 
// these cells to flow to the Pacific and Atlantic oceans.

// Example 2:
// Input: heights = [[1]]
// Output: [[0,0]]
// Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.

// Constraints:
// m == heights.length
// n == heights[r].length
// 1 <= m, n <= 200
// 0 <= heights[r][c] <= 105

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    //in this problem the best way to not visit the same calls multiple times is to
    //check all the boundary cells first and check the opposite condition, so from the 
    //boundary what cells are higher in height that would flow into this one, 
    //we can do that for all sides which would give us candidates for cells that 
    //flow into 1 or both of the oceans
    //from there all we need to do is check which nodes are present in both sets
    let rows = heights.length
    let cols = heights[0].length
    //create the two sets
    let pac = new Set()
    let atl = new Set()

    //define the dfs that we will use
    function dfs(r,c,visit,prevHeight){
        if(visit.has(r+","+c) || r<0 || c<0 || r==rows || c == cols || heights[r][c]<prevHeight){
            //this would mean we are invalid because either we are out of bounds
            //or the new height is more less than the previous so water cant flow
            //also check if we have visited this cell already
            return
        }
        //add to the set of cells we have seen
        visit.add(r+","+c)
        //call the dfs and the neighbours
        dfs(r+1,c,visit,heights[r][c])
        dfs(r-1,c,visit,heights[r][c])
        dfs(r,c+1,visit,heights[r][c])
        dfs(r,c-1,visit,heights[r][c])
    }
    //go through all the the boarders and run the dfs
    for(let c = 0; c<cols; c++){
        //col of the pac ocean which is located in the 0th row
        dfs(0,c,pac,heights[0][c])
        //col of the atl ocean which is at row-1
        dfs(rows-1,c,atl,heights[rows-1][c])
    }
    //do the same thing for the boarder row
    for(let r = 0; r<rows;r++){
        //first col
        dfs(r,0,pac,heights[r][0])
        //end col
        dfs(r,cols-1,atl,heights[r][cols-1])
    }
    let res = []

    //go through every element and check if it exists in both sets
    for(let r = 0; r<rows;r++){
        for(let c = 0; c<cols; c++){
            if(pac.has(r+","+c) && atl.has(r+","+c)){
                res.push([r,c])
            }
        }
    }
    return res
};