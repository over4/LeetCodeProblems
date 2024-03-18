function ListNode(val,next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function printList(list){
    let res = ""
    while(list){
        if(list.next)res = res + list.val + "->"
        else res = res + list.val
        list = list.next
    }
    console.log(res)
}

var removeNthFromEnd = function(head,n){
    //remove nth from the last keep track of n and keep moving until distance is found
    //keep track with a fast and slow pointer, where fast will reach 
    let fast = head, slow = head

    //get to nth node ahead of slow
    for(let i = 0;i<n;i++)fast = fast.next

    //check if we are at the end already
    if(!fast)return head.next
    
    //until we reach end of list
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    //now we are at the point where we need to skip a value
    slow.next = slow.next.next
    return head
}



list1 = new ListNode(1,new ListNode(2, new ListNode(3, new ListNode(4,new ListNode(5)))))
list2 = new ListNode(1)
list3 = new ListNode(1, new ListNode(2))


printList(removeNthFromEnd(list1,2))
printList(removeNthFromEnd(list2,1))
printList(removeNthFromEnd(list3,1))