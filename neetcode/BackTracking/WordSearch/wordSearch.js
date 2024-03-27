// Given an m x n grid of characters board and a string word, 
// return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent 
// cells, where adjacent cells are horizontally or vertically neighboring. 
// The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length
    let col = board[0].length
    let path = new Set()

    function dfs(r,c,i){
        //i keeps track of the position we are in for the word so if we 
        //reach the end of the word then we must have found the word
        if(i==word.length)return true
        //if any of these conditions are true then we know the dont have the word
        if(r<0 || c<0 || r>=rows || c>=col || word[i] != board[r][c] || path.has(r+ ","+c)) return false
        //add the current letter because we know it passes the right of the conditions
        path.add(r+ ","+c)
        //run the search on the rest of the letters around it
        let res = (dfs(r+1,c,i+1) || dfs(r-1,c,i+1) ||dfs(r,c+1,i+1) ||dfs(r,c-1,i+1))
        //clean up some of the 
        path.delete(r+","+c)
        return res
    }
    //run the search on every letter of the board
    for(let i = 0;i<rows;i++){
        for(let j =0;j<col;j++){
            if(dfs(i,j,0))return true
        }
    }
    //if we never found it then return false
    return false
};
// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false