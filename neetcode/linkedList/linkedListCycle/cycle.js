// Given head, the head of a linked list, determine if the linked 
// list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list 
// that can be reached again by continuously following the next pointer. 
// Internally, pos is used to denote the index of the node that tail's next 
// pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


var hasCycle = function(head) {
    //keep track of a slow and fast pointer, this is beacuse no matter what if there 
    //is a cycle the fast pointer will reach the slow pointer beacuse it moves twice per
    //slow movement

    //get a reference to the list
    let slow = head
    let fast = head
    
    //while fast hasnt reached and end is is not null
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next

        if(slow == fast){
            //cycle found
            return true
        }
    }
    //fast found a null and list ended so no cycle
    return false
};