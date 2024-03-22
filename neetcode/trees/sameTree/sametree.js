// Given the roots of two binary trees p and q, 
// write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally 
// identical, and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//     //we can apply dfs on both trees and for every step of the way we can check if both 
//     //stacks are equal and if they arent we can immediately return false
//     if(!p && q || p && !q)return false
//     let stackP = [p]
//     let stackQ = [q]
//     //check the root node first to get so we can push the children later
//     if(q.val != p.val)return false
//     while(stackP.length > 0 || stackQ.length > 0){
//         let nodeP = stackP.pop()
//         let nodeQ = stackQ.pop()
//         if(nodeP.left)stackP.push(nodeP.left)
//         if(nodeP.right)stackP.push(nodeP.right)
//         if(nodeQ.left)stackQ.push(nodeQ.left)
//         if(nodeQ.right)stackQ.push(nodeQ.right)
//         //now check if both arrays are equal
//         if(stackP != stackQ)return false
//     }
//     return true
// };

var isSameTree = function(p, q) {
    //like most recursive problems we need to first consider the base case
    // we would want left null and right null to be true as equal and lets say left val
    //is 1 anmd right val is 1 we would also want that to be true , but if the values
    //are different the return false O(p+q)



    //this first case is if both sides are both null
    if((p==null) && (q==null))return true 
    //the first part checks if 1 side is null and the other isnt which we would want
    //to return false, the second part is saying if we have values for both, but they dont
    //match then we would also want to return false
    if( (!p || !q) || p.val != q.val) return false
    return (isSameTree(p.left,q.left) && isSameTree(p.right,q.right))
};
