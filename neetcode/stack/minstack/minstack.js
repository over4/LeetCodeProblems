// Design a stack that supports push, pop, top, and retrieving the 
// minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.




var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // If the stack is empty, the min value is the value being pushed.
    // Otherwise, it's the minimum between the value being pushed and the 
    //current min (the second element of the last pair in the stack).
    let min
    if(this.stack.length === 0){
        min=val
    }else{
        //min is just the value
        const currentMin = this.stack[this.stack.length-1][1]
        min = Math.min(val,currentMin)
    }
    this.stack.push([val,min])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0){
        this.stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0){
        return this.stack[this.stack.length-1][0]
    }
    return null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length > 0){
        return this.stack[this.stack.length-1][1]
    }
    return null
};