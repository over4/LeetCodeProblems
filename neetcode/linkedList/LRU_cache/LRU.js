// Design a data structure that follows the constraints of a Least 
// Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. 
// Otherwise, add the key-value pair to the cache. If the number of keys 
// exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.




//this solution is much easier in js beacuse we can utilize the map.delete function
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    //create a map to store key:value pairs
    this.map = new Map()
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    //check if we dont have the key in the map,return -1 if we dont
    if(!this.map.has(key))return -1
    const val = this.map.get(key)
    //we are going to update the map and replace the value in it so it is the most
    //recently used key, we need to delete the old version first them re-add
    this.map.delete(key)
    this.map.set(key,val)
    return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //if the key exists already delete it
    this.map.delete(key)
    this.map.set(key,value)
    //check if the size is greater than capacty and reduce it if thats true
    if(this.map.size > this.capacity){
        const lastUsed = this.map.keys().next().value
        this.map.delete(lastUsed)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */