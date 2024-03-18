// Given the head of a singly linked list,
// reverse the list, and return the reversed list.

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


let list1 = new ListNode(1, new ListNode(2))
let list2 = new ListNode(1, new ListNode(2, new ListNode(3,new ListNode(4, new ListNode(5)))))

printList(list1)
printList(reverseList(list1))


printList(list2)
printList(reverseList(list2))



