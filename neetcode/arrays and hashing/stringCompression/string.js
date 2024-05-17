// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.
// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
 

// Constraints:

// 1 <= chars.length <= 2000
// chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let map = new Map()

    for(let i =0;i<chars.length;i++){
        if(!(map.has(chars[i]))){
            //set the key
            map.set(chars[i],0)
        }
        map.set(chars[i],map.get(chars[i])+1)
    }
    let oldStringLength = chars.length
    for(let [key,value] of map){
        chars.push(key)
        if(!(value < 2)){
            let temparr = value.toString().split('')
            temparr.forEach((ele)=>chars.push(ele))
        }
    }
    chars.splice(0,oldStringLength)
};
//this solution does not if there exist a list like
// [a,a,b,b,a,a] since all the a's will be lumped together

var compress = function(chars) {
    let anchor = 0; // To mark the start of a group of repeating characters
    let write = 0; // To keep track of the position to write in the array
    
    for (let scout = 0; scout < chars.length; scout++) {
        // If we reach the end of the array or the current character is different from the next one
        if (scout + 1 === chars.length || chars[scout] !== chars[scout + 1]) {
            chars[write] = chars[anchor]; // Write the character
            write++;
            let count = scout - anchor + 1; // Calculate the length of the run
            if (count > 1) {
                let countStr = count.toString();
                for (let i = 0; i < countStr.length; i++) {
                    chars[write] = countStr[i]; // Write the digits of the count
                    write++;
                }
            }
            anchor = scout + 1; // Move the anchor to the start of the next group
        }
    }
    
    return write; // The new length of the compressed array
};