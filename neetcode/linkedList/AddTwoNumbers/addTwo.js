// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single 
// digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 
// itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    //traverse both lists and check if l1.val + l2.val is overflow make sure
    //to add carry to l1.val + l2.val
    
    //create a dummy node to insertion into list is easy
    let dummy = new ListNode(0)
    let curr = dummy
    
    let carry = 0
    while(l1 || l2 || carry){
        //get the values of each
        let v1,v2
        if(l1) v1 = l1.val; else v1 = 0
        if(l2) v2 = l2.val; else v2 = 0

        //now compute the result
        let res = v1 + v2 + carry
        //get the carry
        carry = Math.floor(res / 10); // Calculate the carry for the next iteration.
        curr.next = new ListNode(res % 10);

        //set pointers
        curr = curr.next
        if(l1)l1 = l1.next
        if(l2)l2 = l2.next
    }
    if(carry >0){
        //we have left pver carry
        curr.next = new ListNode(carry)
    }
    return dummy.next
};