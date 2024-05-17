//my solution but doesnt pass all cases beacuse I am modifying the array while indexing it,
//therefore some numbers could be missed when I remove them
var moveZeroesBad = function(nums) {
    let counter = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i] === 0){
            nums.splice(i,1)
            counter++
        }
    }
    for(let i = 0;i<counter;i++){
        nums.push(0)
    }
};

//the best approach is to use a two pointer method
var moveZeroes = function(nums) {
    let indexOfZero = 0

    for(let i = 0; i<nums.length;i++){
        //record the last time there was a zero
        if(nums[i]!==0){
            nums[indexOfZero] = nums[i]
            indexOfZero++
        }
    }
    for(let i=indexOfZero;i<nums.length;i++){
        nums[i] = 0
    }
};

