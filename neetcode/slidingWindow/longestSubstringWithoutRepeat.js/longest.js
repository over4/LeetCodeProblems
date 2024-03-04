// Given a string s, find the length of the longest 
// substring without repeating characters.

function longestSub(str) {
    let start = 0;
    let maxLength = 0;
    let charIndexMap = new Map();

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        // If the character is in the map and its index is within the current window
        // the second part checks if that index of the last time we seen that character
        //if it is within the current window we are considering
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            // Move the start to the index right after the last occurrence of currentChar
            start = charIndexMap.get(currentChar) + 1;
        }
        // Update the last seen index of the current character
        charIndexMap.set(currentChar, i);
        // Calculate the length of the current window and update maxLength if necessary
        let currlength = i - start + 1
        maxLength = Math.max(maxLength,currlength );
    }

    return maxLength;
}

console.log(longestSub("abcabcbb")); // 3
console.log(longestSub("bbbbb")); // 1
console.log(longestSub("pwwkew")); // 3