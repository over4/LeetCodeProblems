function groupAnagram(strings){
    let map = new Map()
    for(const str of strings){
        let sorted = str.split('').sort().join('')
        if(!map.has(sorted)){
            //map does not have this key make a new key
            map.set(sorted,[])
        }
        //get the array that is with this key and add it
        map.get(sorted).push(str)
    }
    return Array.from(map.values())   
}

let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagram(strs));