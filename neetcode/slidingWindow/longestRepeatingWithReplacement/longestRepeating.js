// You are given a string s and an integer k. 
// You can choose any character of the string and 
// change it to any other uppercase English character. 
// You can perform this operation at most k times.

// Return the length of the longest substring containing the same 
// letter you can get after performing the above operations.

function characterReplacement(s,k){
    let left =0 , maxfrq = 0,maxLength = 0
    charCount = {}
    for(let right=0;right<s.length;right++){
        //let current char
        let char = s[right]
        //update the entry of this character and initialize if doesnt exist
        charCount[char]= (charCount[char] || 0) + 1
        //check if it is the new longest
        maxfrq = Math.max(maxfrq,charCount[char])

        //change the size of the window minus maxfrq is greater than k
        while((right-left + 1) - maxfrq > k){
            //shrink the window
            charCount[s[left]] -= 1;
            left += 1;
        }
        maxLength = Math.max(maxLength,right-left+1)
    }
    return maxLength
}
console.log(characterReplacement("ABAB",2))
console.log(characterReplacement("AABABBA",1))

//lets do it with brute force

function bruteforce(s,k){
    let maxlength = 0
    let currentlength=0
    for(let i = 0;i<s.length;i++){
        let replacements = k
        currentlength = 0
        for(let j = i;j<s.length;j++){
            if(s[i] === s[j]){
                //we have a match
                currentlength += 1
            }else if (replacements>0){
                //use a replacement
                replacements -= 1
                currentlength += 1
            }else{
                //out of replacements
                break;
            }
            maxlength = Math.max(maxlength,currentlength)
        }
    }
    return maxlength
}
console.log("////////////////")
console.log(bruteforce("ABAB",2))
console.log(bruteforce("AABABBA",1))