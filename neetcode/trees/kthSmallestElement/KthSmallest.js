// Given the root of a binary search tree, 
// and an integer k, return the kth smallest value 
// (1-indexed) of all the values of the nodes in the tree.

 
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    //keep track of the number of elements we have visited, can return result as soon 
    //as counter == k
    let counter = 0
    let stack = []
    let curr = root
    while(curr != null || stack.length > 0){
        ///initially start going left to find the smallest values so we can
        //pop the values in sorted order
        while(curr != null){
            //continue to the left most values and add keep adding
            stack.push(curr)
            curr = curr.left
        }
        //pop the value in the stack to process it
        curr = stack.pop()
        //update the counter because we popped a smaller number 
        counter += 1
        //check if we have the kth element
        if(counter==k)return curr.val
        //start going right now that we know it must be in the right tree
        curr = curr.right
    }
};


// xample 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:


// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3