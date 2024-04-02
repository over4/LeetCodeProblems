// There are a total of numCourses courses you have to take, 
// labeled from 0 to numCourses - 1. You are given an array 
// prerequisites where prerequisites[i] = [ai, bi] indicates 
// that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you 
// have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 
// 0 you should also have finished course 1. So it is impossible.

// Constraints:
// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //first define a preMap to hold the prereqs for each course
    //and define a visited map to check for loops by keeping 
    //track of what we have seen before
    const premap = {}
    const visited = {}
    //build the list of prereqs
    for(let i = 0;i<prerequisites.length;i++){
        if(premap[prerequisites[i][0]] === undefined){
            //if the map entry does not alredy exist
            premap[prerequisites[i][0]] = [prerequisites[i][1]]
        }else{
            //if it exists, add to the array of prereqs for this course
            premap[prerequisites[i][0]].push(prerequisites[i][1])
        }
    }
    //define the dfs that we will use
    function dfs(node){
        if(visited[node]){
            //this means visited map has this node, so loop and return false
            return false
        }
        if(premap[node] !== undefined){
            //continue with search
            if(premap[node].length === 0){
                //no prereqs for this course so return true
                return true
            }
            //add to visited map
            visited[node] = true   
            //search preqs of course
            for(let val of premap[node]){
                if(!dfs(val)){
                    return false
                }
            }
            //remove from visited now
            visited[node] = false
            //set the prereqs for this to [] so we know it is possible
            premap[node] = []
        }
        return true
    }
    //apply this for all keys in the map
    for(let key in premap){
        if(!dfs(key)){
            return false
        }
    }
    return true
};