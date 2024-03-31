// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) 
// of its neighbors.
// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
// Test case format:
// For simplicity, each node's value is the same as the node's index (1-indexed). 
// For example, the first node with val == 1, the second node with val == 2, and so on. 
// The graph is represented in the test case using an adjacency list.
// An adjacency list is a collection of unordered lists used to represent a finite graph. 
// Each list describes the set of neighbors of a node in the graph.
// The given node will always be the first node with val = 1. You must return the 
// copy of the given node as a reference to the cloned graph.

// Example 1:
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

// Example 2:
// Input: adjList = [[]]
// Output: [[]]
// Explanation: Note that the input contains one empty list. The 
// graph consists of only one node with val = 1 and it does not have any neighbors.

// Example 3:
// Input: adjList = []
// Output: []
// Explanation: This an empty graph, it does not have any nodes.

// Constraints:
// The number of nodes in the graph is in the range [0, 100].
// 1 <= Node.val <= 100
// Node.val is unique for each node.
// There are no repeated edges and no self-loops in the graph.
// The Graph is connected and all nodes can be visited starting from the given node.

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// function Node(val, neighbors) {
//     this.val = val === undefined ? 0 : val;
//     this.neighbors = neighbors === undefined ? [] : neighbors;
// };
// var cloneGraph = function(node) {
//     //return a deep copy that means we need to completely remake the graph
//     //we will use a hashmap to keep track of the nodes we have created a deep copy
//     //of which will have a key of old node, and a value of new node
//     let oldToNew = new Map()
//     if(node == null)return null
//     if(oldToNew.has(node))return null
//     return dfs(node)
//     //create a dfs since we will traverse the graph and add to the map recursively 
//     function dfs(node){
//         //check if we have already made a clone of the node, return the new node
//         if(oldToNew.has(node) || !node ) return
//         //create the copy
//         let copy = new Node(node.val)
//         //add to the map
//         oldToNew.set(node,copy)
//         //now add the neighbours
//         for(const n of node.neighbors){
//             //add the neighbours to the array for this node
//             copy.neighbors.push(dfs(n))
//         }
//         return copy
//     }
// };

function cloneGraph(node){
    //check if the node exists
    if(node == null)return node
    //create an array to keep track of everything we have made a copy of
    const visited = new Array()
    //call the helper function
    return helper(node,visited)
}
function helper(node,visited){
    //make a copy of the current node
    const newNode = new Node(node.val)
    //mark this node as visited
    visited[node.val] = newNode

    //go through all the neighbours and add them to the current node
    for(const n of node.neighbors){
        //check if we havent seen the node before, add it
        if(!visited[n.val]){
            //we have not seen this yet, so add all those neighbours recursively
            const newNeighbor = helper(n,visited)
            //append to the array for this node
            newNode.neighbors.push(newNeighbor)
        }else{
            //we have not seen this node before
            const newNeighbor = visited[n.val]
            newNode.neighbors.push(newNeighbor)
        }
    }
    return newNode
}