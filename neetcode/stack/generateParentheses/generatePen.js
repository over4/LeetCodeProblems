// Given n pairs of parentheses, write a function to generate all
// combinations of well-formed parentheses.
//1 <= n <= 8

var generateParenthesis = function(n) {
    //each entry must only have 2*n number of brackets since n is number of pairs
    
    //only add open if open count < n
    //only add closing if closing < opening
    //valid if open == closed == n
    let stack = []
    let res = []
    function backtrack(open,closed){
        //if we have the right number of brackets then we have a solution
        if((open == closed) && (closed == n) && (open == n)){
            res.push(stack.join(''))
            return
        }
        //if we are able to fit another (
        if(open < n){
            stack.push("(")
            backtrack(open+1,closed)
            stack.pop()
        }
        //if we have enough openings add closing
        if(closed<open){
            stack.push(")")
            backtrack(open,closed+1)
            stack.pop()
        }
    }
    backtrack(0,0)
    return res
}

console.log(generateParenthesis(3))//["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1))//["()"]