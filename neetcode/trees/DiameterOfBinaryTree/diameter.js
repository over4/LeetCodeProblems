// Given the root of a binary tree, 
// return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the 
// longest path between any two nodes in a tree. This 
// path may or may not pass through the root.

// The length of a path between two nodes is represented by 
// the number of edges between them.

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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    //in this function we will determine the height and depth of each node and update as we
    //traverse the tree and update the res variable
    //we are counting a null root as -1 so that the math works out
    //every path is counted at 1 so if there is a situation where a node has and left and 
    //no right, then we have 2+1-1 which evaluates to just 2, which is the correct distance

    let res = [0]
    function dfs(root){
        if(root == null)return -1
        let left = dfs(root.left)
        let right = dfs(root.right)

        //compute height this is the part where we add 2+left and right
        res[0] =Math.max(res[0],2+left+right)
        //return
        return 1+Math.max(left,right)
    }
    dfs(root)
    return res[0]
};