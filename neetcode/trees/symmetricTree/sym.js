// Given the root of a binary tree, check whether it is a mirror 
// of itself (i.e., symmetric around its center).

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
var isSymmetric = function(root) {
    if(!root)return true
    function isSame(leftRoot,rightRoot){
        if ((!leftRoot && rightRoot) || (leftRoot && !rightRoot) || (leftRoot && rightRoot && leftRoot.val !== rightRoot.val)) return false
        if(leftRoot && rightRoot){
            return isSame(leftRoot.left,rightRoot.right) && isSame(leftRoot.right, rightRoot.left)
        }
        return true
    }
    return isSame(root.left,root.right)
    
};