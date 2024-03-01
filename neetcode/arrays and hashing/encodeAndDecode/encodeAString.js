// Design an algorithm to encode a list of strings to a string. 
// The encoded string is then sent over the network and is decoded back 
// to the original list of strings. Please implement encode and decode

// Input: [“lint”,“code”,“love”,“you”] Output: [“lint”,“code”,“love”,“you”] 
// Explanation: One possible encode method is: “lint:;code:;love:;you”


function encode(strs) {
    //encode the string with the length of the string first then the string itself
    return strs.map(s=> `${s.length}#${s}`).join('')
}

function decode(encoded) {
    //delimiter is #, length of string is before, so split by # 
    //and take the second part as the actual string
    let result = []    
    let i = 0
    while (i<encoded.length){
        
        let j = i
        while(encoded[j]!='#') j++;
        const length = parseInt(encoded.substring(i,j),10)
        result.push(encoded.substring(j+1,j+length+1))
        //move to the next string since we have decoded the last
        i=j+1+length 
    }
    return result
}

let strList = ["lint", "#code", "love#", "you"];
console.log(strList)
console.log(encode(strList));
console.log(decode(encode(strList)));