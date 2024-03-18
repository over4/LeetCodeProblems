// You are given the head of a singly linked-list. 
// The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. 
// Only nodes themselves may be changed.

function printList(list){
    let curr = list
    let res = ""
    while(curr){
        if(curr.next)res = res + curr.val + "->"
        else res = res + curr.val
        curr = curr.next
    }
    console.log(res)
}
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
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
var findMiddle = function(list){
    //get our fast and slow pointers
    let fast = list
    let slow = list

    while(fast && fast.next){
        //move slow pointer 1
        slow=slow.next
        //move fast pointer twitce
        fast = fast.next.next
    }
    return slow
}
var merge = function(l1, l2) {
    while (l1 && l2) {
        let temp1 = l1.next;
        let temp2 = l2.next;

        l1.next = l2; // Point current l1 to l2
        if (temp1 === null) break; // Check if l1's end reached to prevent overwriting
        l2.next = temp1; // Then point current l2 to the next of l1

        l1 = temp1; // Move l1 forward
        l2 = temp2; // Move l2 forward
    }
}
var reorderList = function(head) {
    //we will have 2 pointers, one fast and one slow
    //fast pointer will reach end of the list and slow will be at the middle
    //because fast pointer will move 2 spaces for every time slow moves once
    //we can take these two halfs of the list and combine them, but we need to consider 
    //a few edge cases, we need to reverse the second list, and stop the middle
    //node from pointing to the second list

    //get out 2 lists
    let slowList = findMiddle(head)
    let fastList = reverseList(slowList.next)
    //this is to break that cycle
    slowList.next = null

    //finally merge the two my alternating values
    merge(head,fastList)  
    return head
};


printList(reorderList(new ListNode(1,new ListNode(2, new ListNode(3,new ListNode(4))))))
//1,4,2,3