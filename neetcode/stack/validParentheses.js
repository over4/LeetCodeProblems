// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s){
    //go through each element in the array
    if(s.length % 2)return false
    let stack = []
    let map = {
        "(":")",
        "{":"}",
        "[":"]",
    }
    for(let i = 0; i<s.length;i++){
        let char = s[i]
        if(char === '[' || char === '{' || char === '('){
            //opening so push opposite into array to check later
            stack.push(map[char])
        }else{
            //seen closing tab see if it matches
            if(stack.pop() != char)return false
        }
    }
    //check if there is anything left
    return stack.length === 0
}
console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))