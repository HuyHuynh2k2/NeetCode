class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Solution {
  reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  }
}
