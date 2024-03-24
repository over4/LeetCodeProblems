// Given the roots of two binary trees root and subRoot, 
// return true if there is a subtree of root with the same
//  structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a 
// node in tree and all of this node's descendants. The tree tree 
// could also be considered as a subtree of itself.Given the roots 
// of two binary trees root and subRoot, return true if there is a 
// subtree of root with the same structure and node values of subRoot 
// and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a 
// node in tree and all of this node's descendants. 
// The tree tree could also be considered as a subtree of itself.


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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    //first lets make a function that will check if two trees are the same
    //in which we can call everytime we traverse the tree
    function sameTree(s,t){
        //case when both are null so true
        if(!s && !t)return true
        if((s && t) && s.val == t.val){
            //if the nodes are the same check the rest of the tree down
            return sameTree(s.left,t.left) && sameTree(s.right,t.right)
        }
        //this means either one tree is empty or the values are not the same
        //bceause we covered the cases where the values are either the same or
        //both are null which means true
        return false
    } 
    
    //start with the base case
    //if the subtree is a null tree then it is always true
    if(!subRoot) return true
    //if we have no orginial tree, but we have a subroot then we know the trees
    //cant be the same and if there is no subroot, then the prvious condition would already
    //have covered this case where !root but subroot
    if(!root) return false  
    //check if the trees are currently the same
    if(sameTree(root,subRoot))return true

    //check deeper within the orginal tree
    return (isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot))   
};