// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be
// made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
function printList(list) {
    let current = list;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (l1, l2) {
    //since both lists are already sorted, we can just order them based how the value of
    //of each
    //some checks if the lists exists
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    //we are going to place the new values in this list
    let tempNode = new ListNode(0, null);
    let currentNode = tempNode;
    //loop until we dont have values in both lists
    while (l1 && l2) {
        if (l1.val < l2.val) {
            //set the next node to the current
            currentNode.next = l1;
            //move to next
            l1 = l1.next;
        } else {
            //same as above
            currentNode.next = l2;
            l2 = l2.next;
        }
        currentNode = currentNode.next;
    }
    //if we have uneven arrays and the rest of the values are sorted but there
    //is still values in either list, add the rest of them
    currentNode.next = l1 || l2;
    
    //skip the dummy head we created
    return tempNode.next;
};
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

printList(mergeTwoLists(list1, list2));

let testList = new ListNode(0,new ListNode(1, new ListNode(2,new ListNode(3))))

printList(testList)