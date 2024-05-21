// Given the root of a binary tree, return the 
// level order traversal of its nodes' values. 
// (i.e., from left to right, level by level).


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //what we can do is perform bfs where we store each level in its own entry
    //then return the entire array that we just made. What we can do it slice 
    //every element
    //and put all the children in the next index of the array

    //create the result array and the queue we are going to use
    let res = []
    let q = [root]

    while(q[0]){
        //get the lenght of the current q so we can loop through it
        let len = q.length
        let level = []
        for(let i = 0;i< len;i++){
            //loop through all the children
            let node = q.shift()
            //if the node is not null
            //push the node into the level and then add the children to the q
            level.push(node.val)
            //check if the children exist and add
            if(node.left)q.push(node.left)
            if(node.right)q.push(node.right)
        }
        //push the current level
        res.push(level)
    }
    return res
};

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]



// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []