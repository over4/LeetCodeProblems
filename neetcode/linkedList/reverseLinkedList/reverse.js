// Given the head of a singly linked list,
// reverse the list, and return the reversed list.

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
    let prev = null
    let next = null
    let curr = head;
    //while there are more values
    while (curr !== null) {
        // set the next pointer to the next node in the list
        next = curr.next;
        // reverse the current node's pointer to point to
        // the previous node
        curr.next = prev;
        // set the previous pointer to the current node
        prev = curr;
        // move the current pointer to the next node
        curr = next;
    }
    return prev;
};

console.log(reverseList([1,2]));
console.log(reverseList([1,2,3,4,5]));
