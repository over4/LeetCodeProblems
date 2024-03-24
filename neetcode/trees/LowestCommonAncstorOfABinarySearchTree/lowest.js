// Given a binary search tree (BST), find the lowest common 
// ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest 
// common ancestor is defined between two nodes p and q as the 
// lowest node in T that has both p and q as descendants (where
//      we allow a node to be a descendant of itself).”


// Constraints:

// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the BST.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    //since this is a binary search tree we can use the vals of the node to understand
    //what side of the tree we need to search. For example if the root node is 6, but we are looking
    //for 8 then we know that 8 will be in the right side of the tree because 8 is larger
    //than 6 and vice versa. Additionally if we know there is a split in p and q where 
    //p will be in  the left and q in the right then we know the root is the lowest
    curr = root
    while(curr){
        if((p.val > curr.val) && (q.val > curr.val)){
            //we know the nodes we want are larger than the root so we search right tree
            curr = curr.right
        }else if((p.val < curr.val) && (q.val < curr.val)){
            //we know the vals are less than the root so search left
            curr = curr.left
        }else{
            //split occurs or we have found one of the values so we have the result eother way
            return curr
        } 
    }
};