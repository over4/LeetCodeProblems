// Given two integer arrays preorder and inorder where 
// preorder is the preorder traversal of a binary tree 
// and inorder is the inorder traversal of the same tree, 
// construct and return the binary tree.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0 || inorder.length === 0)return null
    //we know the first element in the preorder array will always be the root
    const rootVal = preorder[0]
    // it's also the subTree left size
    const rootIndFromInOrder = inorder.indexOf(rootVal); 
    //initialize the root
    const root = new TreeNode(rootVal);
    //create the left and right sides of the tree
    //for the left we only need to pass it the left side of the inorder list and
    //the opposite for the right side 
    root.left = buildTree( preorder.slice(1,1 + rootIndFromInOrder), inorder.slice(0,rootIndFromInOrder));
    root.right = buildTree(preorder.slice(1 + rootIndFromInOrder), inorder.slice(1 + rootIndFromInOrder));
    return root;
};

// Example 1:


// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
 