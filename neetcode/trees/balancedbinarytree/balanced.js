// Given a binary tree, determine if it is 
// height-balanced
// .
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    //the heights of the left and right nodes must not differ by more than one
    //the key to doing this is doing it from bottom up, if you do top down recursion 
    //where you run a dfs on each node, the time complexity becomes o(n^2) but we can do 
    //it much faster but checking if a tree is balanced by starting at the bottom
    //what we do is return the height of the left and right subtrees and see if 
    //it exceeds 1 which would make it not a balanced binary tree
    //we can keep evaluating this all the way up the tree by having the height
    //returned for each left adn right node

    //lets made the dfs algo we will use
    function dfs(root){
        //this is our basecase and this means the tree is balanced with 0 nodes below it
        if(root==null)return [true,0]
        //apply the dfs to the left and right nodes
        let left = dfs(root.left)
        let right = dfs(root.right)
        //this is determining if our tree was balance but checking for the right
        //and left trees to have returned true for balanced, and the heights of 
        //left and right are less than or equal to 1
        let balanced = (left[0] && right[0]) && (Math.abs(left[1]-right[1]) <= 1)
        //return the balanced bool, and the max height of the left and right nodes
        return [balanced,1+Math.max(left[1],right[1])]
    } 
    //return
    return dfs(root)[0]
};