// Given the root of a binary tree, determine if it is a 
// valid binary search tree (BST).

// A valid BST is defined as follows:

// The left 
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater 
// than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Input: root = [2,1,3]
// Output: true
// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

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
var isValidBST = function(root) {
    //create a recursive function that will include a min and max limit so that
    //each node must fall into the right interval
    //for example if we are checking a node with a value of 3, we will pass the node
    //what values it has to be larger and smaller than to be valid
    function valid(node,left,right){
        //base case if the node is null
        if(node == null) return true
        //if the node left and right are not correct
        if(!(node.val<right && node.val>left))return false
        //start the recurive function, we know that when we check the left node, we only
        //need to update the upper bound for what the value can be and vice versa
        return (valid(node.left,left,node.val) && valid(node.right,node.val,right))
    }
    //call function with -infinity - infinity bounds
    return valid(root,-Infinity,Infinity)
};