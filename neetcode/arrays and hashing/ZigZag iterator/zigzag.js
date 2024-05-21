// Given two vectors of integers v1 and v2, implement an iterator to return their 
// elements alternately.

// Implement the ZigzagIterator class:

// ZigzagIterator(List<int> v1, List<int> v2) initializes the object with the two 
// vectors v1 and v2.
// boolean hasNext() returns true if the iterator still has elements, and false 
// otherwise.
// int next() returns the current element of the iterator and moves the iterator 
// to the next element.
 

// Example 1:

// Input: v1 = [1,2], v2 = [3,4,5,6]
// Output: [1,3,2,4,5,6]
// Explanation: By calling next repeatedly until hasNext returns false, 
// the order of elements returned by next should be: [1,3,2,4,5,6].
// Example 2:

// Input: v1 = [1], v2 = []
// Output: [1]
// Example 3:

// Input: v1 = [], v2 = [1]
// Output: [1]
 

// Constraints:

// 0 <= v1.length, v2.length <= 1000
// 1 <= v1.length + v2.length <= 2000
// -231 <= v1[i], v2[i] <= 231 - 1



/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.arr1 = [...v1]
    this.arr2 = [...v2]
    this.flag = true
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.arr1.length || this.arr2.length
};

/**
* @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    if(this.flag){
        if(this.arr1.length){
            this.flag = false
            return this.arr1.shift()

        }else{
            this.flag = false
            return this.arr2.shift()
        }
    }else{
        if(this.arr2.length){
            this.flag = true
            return this.arr2.shift()
        }else{
            this.flag = true
            return this.arr1.shift()
        }
    }
};


