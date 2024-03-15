// Design a time-based key-value data structure that can store multiple values 
// for the same key at different time stamps and retrieve the key's value at a 
// certain timestamp.

// Implement the TimeMap class:

// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key 
// with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was
//  called previously, with timestamp_prev <= timestamp. If there are multiple 
//  such values, it returns the value associated with the largest timestamp_prev.
//   If there are no values, it returns "".

//Constraints:

// 1 <= key.length, value.length <= 100
// key and value consist of lowercase English letters and digits.
// 1 <= timestamp <= 107
// All the timestamps timestamp of set are strictly increasing.
// At most 2 * 105 calls will be made to set and get.

//basically we need to implement a function that can handle setting and getting 
//from our hashmap, the setting part is east, just add the key and the list(value,time)
//to each key, the hard part of this question is return the right values with
//the get method, in the contraints it lists that the list within each key
//will be in asc order based on the time, and if a time doesnt exist, return the closest
//but smaller time. We need to do this in < O(n) time which means we need to use binary
//search on the time values inside each key

var TimeMap = function() {
    this.hashMap = new Map()
};
TimeMap.prototype.set = function(key, value, timestamp) {
    const map = this.hashMap
    //check if the key exists in the map and if it doesnt add it
    if(!map.has(key))map.set(key,[])
    //add the new value,time array to key
    map.get(key).push([value,timestamp])
    
};
TimeMap.prototype.get = function(key, timestamp) {
    //get the list of pairs for the current key, if its null make it just []
    const list = this.hashMap.get(key) || []

    //start binary search on this array based on the values of time
    //initialize left and right pointers
    let left = 0 , right = list.length-1
    let res = ""
    while(left<=right){
        const mid = Math.floor((left + right)/2)
        const [value,time]= list[mid]
        //check if we have the right time 
        if(timestamp===time)return value

        //now logic for moving left or right pointer
        if(timestamp<time){
            //our value is too big so move right pointer
            right = mid - 1
        }else{
            //smaller value and make sure to return the nearest value if doesnt exist
            left = mid + 1
            res = value
        }
    }
    return res
};
let inst = new TimeMap()
console.log(inst.set("foo", "bar", 1)) //null or undefined
console.log(inst.get("foo", 1)) //bar
console.log(inst.get("foo", 3)) //bar
console.log(inst.set("foo", "bar2", 4)) //null or undefined
console.log(inst.get("foo", 4)) //bar2
console.log(inst.get("foo", 5)) //bar2
