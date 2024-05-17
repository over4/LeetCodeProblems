const list = [1,2,3,4,5,6,7,8,9,10,20,25,27,30,99,101]

function search(tar, arr){
    //make pointers for the left and right indexs
    let left = 0, right = list.length - 1

    //loop until target is found
    while(left <= right){
        //compute mid
        let mid = Math.floor((left + right)/2)
        if(arr[mid] === tar)return true
        if(arr[mid] > tar) right = mid - 1
        if(arr[mid] < tar) left = mid + 1
    }
    return false
}
console.log(search(10,list))