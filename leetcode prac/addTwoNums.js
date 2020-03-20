function ListNode(val) {
  this.value = val;
  this.next = null;
};


var c = new ListNode(1);

var a = new ListNode(2);
a.next = new ListNode(9);
a.next.next = new ListNode(1);


var b = new ListNode(2);
b.next = new ListNode(9);


var addTwoNumbers = function(l1,l2){
  
  
  var outputNode = new ListNode(0);
  var currNode = outputNode;
  var currl1 = l1;
  var currl2 = l2;
  var carry = 0;
  
  while(currl1.value != null || currl2.value != null){
    
    if (currl1.value == null){
      currl1.value = 0;
    }
    
    if (currl2.value == null){
      currl2.value = 0;
    }
    
    
    var sum = currl1.value + currl2.value + carry;
    if (sum > 9){
    	carry = 1;
    	currNode.next = new ListNode(current - 10);
    } else {
    	carry = 0 ;
    	currNode.next = new ListNode(current);
    }
    currNode = currNode.next;
    
    if(currl1.next != null){
      currl1 = currl1.next;
    } else {
      currl1.value = null;
    }
    
    if(currl2.next != null){
      currl2 = currl2.next;
    } else {
      currl2.value = null;
    }
  }
  
  if(carry > 0){
    console.log(carry);
    currNode.next = c;
    console.log("printed");
  }
  
  return outputNode.next;
}
  