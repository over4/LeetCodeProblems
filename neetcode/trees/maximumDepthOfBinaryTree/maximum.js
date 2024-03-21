// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the 
// longest path from the root node down to the farthest leaf node.

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

//this solution is depth first search with recursion, but this isnt the onyl solution
var maxDepth = function(root) {
    //if we are at the end of the tree means we cant go any deeper so depth is 0
    if(root == null) return 0

    //add 1 for the current node and try and go deeper with left and right nodes
    return 1 + Math.max(maxDepth(root.left),maxDepth(root.right)) 
};

//we can also solve this without recursion by doiing an iterative breath first search
//this will use a queue data structure to check the tree level by level
//every time we take an element out, we add all of its children, and increase
//the level counter
var maxDepthBFS = function(root){
    if(!root) return 0
    let level = 0
    let q = [root]
    while(q.length > 0){
        //get snapshot of the lenght of the q
        let size = q.length
        for(let i = 0;i<size;i++){
            let node = q.shift()
            //if we have left or right nodes from the one we popped,add them
            if(node.left)q.push(node.left)
            if(node.right)q.push(node.right)
        }
        level += 1
    }
    return level
}

var maxDepthStackDPS= function(root){
    if(!root) return 0
    //make a stack that holds object of node and level
    let stack = [{node:root,level:1}]
    //start the depth
    let depth = 0
    while(stack.length > 0){
        //pop the value off of the stack
        let {node,level} = stack.pop()
        //check if this new value has a larger depth against the level
        depth = Math.max(depth,level)

        //add the children of the value we just popped, with the levels increased by 1
        if(node.left)stack.push({node:node.left,level:level+1})
        if(node.right)stack.push({node:node.right,level:level+1})
    }
    //return the depth
    return depth
}