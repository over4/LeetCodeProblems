function anagram(s,t){
    //make two arrays, sort them then compare
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    return sortedS === sortedT
}

console.log(anagram("anagram", "nagaram"))//true
console.log(anagram("rat", "car"))//true
