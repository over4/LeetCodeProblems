// Given two strings s1 and s2, return true if s2 contains 
// a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.
var checkInclusionSlow = function(s1, s2) {
    let left = 0
    sortedS1 = s1.split('').sort().join('')
    for(let right = s1.length;right<=s2.length;right++){
        //sort the window and sort s1 then compare
        //we know the size of out window with be the length of s1
        let currWin = (s2.substring(left,right)).split('').sort().join('')
        //console.log(currWin + " " + s1.split('').sort())
        if(currWin === sortedS1){
            return true
        }
        left++
    }
    return false
};
//this solution works but take too long to process so not ideal
//consider another solution that keeps track of something else

console.log(checkInclusionSlow("ab", "eidbaooo"))//true
console.log(checkInclusionSlow("ab", "eidboaoo"))//false
console.log(checkInclusionSlow("adc", "dcda"))//true

var checkInclusion = function(s1, s2) {
    //simple check to see if s1 is larger
    if(s1.length > s2.length) return false
    
    //create the maps
    const s1Map = new Array(26).fill(0);
    const s2Map = new Array(26).fill(0);
    //fill the maps
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    // Sliding window starts from the end of the first window of s2
    //window will start at i and extend the length of s1, therefore implement
    //a check to make sure we are not out of the bound of s2
    for (let i = 0; i < s2.length - s1.length; i++) {
        // If the frequency maps match, return true
        if (s1Map.every((val, idx) => val === s2Map[idx])) {
            return true;
        }
        // we are moving to next char so update what is in the current window
        s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        s2Map[s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)]++;
    }
    // Check one last time for the last window
    return s1Map.every((val, idx) => val === s2Map[idx]);
};
console.log("////////////////////////")//true
console.log(checkInclusion("ab", "eidbaooo"))//true
console.log(checkInclusion("ab", "eidboaoo"))//false
console.log(checkInclusion("adc", "dcda"))//true