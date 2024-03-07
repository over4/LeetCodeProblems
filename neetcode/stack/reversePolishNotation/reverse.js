// You are given an array of strings tokens that represents an 
// arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents 
// the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a 
// reverse polish notation.
// The answer and all the intermediate calculations can be 
// represented in a 32-bit integer.

function evalRPN(arr){
    let stack = []
    for(element of arr){
        switch(element){
            case '+':
                stack.push(stack.pop() + stack.pop())
                break;
            case '-':
                stack.push(-stack.pop() + stack.pop())
                break;
            case '/':
                item1 = stack.pop()
                item2 = stack.pop()
                stack.push(item2/item1 | 0)
                break;
            case '*':
                stack.push(stack.pop()*stack.pop())
                break;
            default:
                //number so push into stack as a number
                stack.push(parseInt(element))
                break;
        }
    }
    return stack[0]
}
console.log(evalRPN(["2","1","+","3","*"])) //9
console.log(evalRPN(["4","13","5","/","+"])) //6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) //22