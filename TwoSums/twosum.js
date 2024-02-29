function twosum(numbers,target){
    for (let i=0; i< numbers.length ; i++ ) {
        for(let y = 0; y < numbers.length; y++){
            if ((numbers[i] + numbers [y] ) === target && i!==y)
            //we have a match  
            return([numbers[i], numbers[y]]);
        }
    }
}
console.log(twosum([2,7,11,15],9))

function fasttwosum(numbers,target){
    //store the compliment of each number and see if it exist in the map
    let hashMap = new Map()

    for(let i = 0; i<numbers.length;i++){
        let compliment =  target - numbers[i]
        if(hashMap.has(compliment)){
            return ([numbers[i] , compliment])
        }
        hashMap.set(numbers[i],i)
        
    }
}
console.log(fasttwosum([2,7,11,15],9))

