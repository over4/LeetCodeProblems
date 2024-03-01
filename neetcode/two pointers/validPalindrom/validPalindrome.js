// A phrase is a palindrome if, after converting all uppercase letters 
// into lowercase letters and removing all non-alphanumeric characters, it 
// reads the same forward and backward. Alphanumeric characters include letters
// and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s){
    //convert the string to a full string
    str = (s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase());
    let start = 0
    let end =  str.length - 1;

    while(start < end){
        if(str[start] === str[end]){
            start++
            end = end - 1
        }else{
            //not a palindrome
            return false
        }
    }
    return true
}
console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car"))//false