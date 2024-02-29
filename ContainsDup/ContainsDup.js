let nums1 = [1,2,3,1]
let nums2 = [1,2,3,4]
let nums3 = [1,1,1,3,3,4,3,2,4,2]

function hasDup(numbers){
    let hashMap = new Map()
    for(const element of numbers){
        if(hashMap.has(element)){
            //dup found
            return true;
        }else{
            hashMap.set(element, element)
        }
    }
    return false;
}
console.log(hasDup(nums1))//true
console.log(hasDup(nums2))//false
console.log(hasDup(nums3))//true

//while this is an optimal time solution it could be improved by using a set
//since it will take up less space

function hasDupOp(numbers){
    let seen = new Set()
    for(const number of numbers){
        if(seen.has(number)){
            return true
        }
        seen.add(number)
    }
    return false
}

console.log(hasDupOp(nums1))//true
console.log(hasDupOp(nums2))//false
console.log(hasDupOp(nums3))//true