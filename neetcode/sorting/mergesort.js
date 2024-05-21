let list1 = [2,5,8,9,3,10,30,65,44,35,66,1,3,19,20,58,99,101,32]

function mergeSort(arr){
    if(arr.length<=1)return arr
    let mid = Math.floor(arr.length/2)

    //recursively call the merge function on both sides of the arr
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left,right)


    
    function merge(left,right){
        let res = []
    
        while(left.length && right.length){
            if(left[0]<right[0]){
                res.push(left.shift())
            }else{
                res.push(right.shift())
            }
        }
        return [...res,...left,...right]
    }
}



console.log(mergeSort(list1))