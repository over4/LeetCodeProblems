
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}
let list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

function addtwo(l1,l2){
    tempstring1 = ""
    tempstring2 = ""
    while(l1 !== null){
        tempstring1 = tempstring1 + l1.val
        if(l1 !== null){
            l1 = l1.next
        }
    }
    while(l2 !== null){
        tempstring2 = tempstring2 + l2.val
        if(l2 !== null){
            l2 = l2.next
        }
    }
    tempstring1 = tempstring1.split('').reduce((acc,val)=>{
        return acc = val + acc
    });
    tempstring2 = tempstring2.split('').reduce((acc,val)=>{
        return acc = val + acc
    });
    //console.log(tempstring1 + " " + tempstring2)
    return (parseInt(tempstring1,10)  + parseInt(tempstring2,10))
}
console.log(addtwo(list1,list2));