// Given the head of a singly linked list, 
// reverse the list, and return the reversed list.

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
 

var reverseList = function(head) {
    let prev = null, current = head;
    while(current!==null){
        prev = new ListNode(current.val,prev)
        current = current.next;
    }
    return prev
};

console.log(reverseList([1,2]))
console.log(reverseList([1,2,3,4,5]))