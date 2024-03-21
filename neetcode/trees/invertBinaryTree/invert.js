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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    //go down the tree and switch the values of left and right,recursivly apply this
    //down the tree

    if (root == null) return root;
    //get the values and swap

    let left = root.left;
    let right = root.right;
    root.left = invertTree(right);
    root.right = invertTree(left);
};
