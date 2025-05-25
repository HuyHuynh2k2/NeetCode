package LinkedList;

public class ReverseLinkList {
  public static void main(String[] args) {
    ReverseLinkList rll = new ReverseLinkList();
    ListNode head = rll.new ListNode(0);
    head.next = rll.new ListNode(1);
    head.next.next = rll.new ListNode(2);
    System.out.println(head.toString());
    System.out.println("After reverse");
    System.out.println(rll.reverse(head));
  }
  public class ListNode{
    int val;
    ListNode next;

    public ListNode(int val){
      this.val = val;
      this.next = null;
    }

    public String toString() {
      StringBuilder sb = new StringBuilder();
      ListNode current = this;

      while (current != null) {
        sb.append(current.val + " -> ");
        current = current.next;
      }
      sb.append("null");
      return sb.toString();
    }
  }
  public ListNode reverse(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;

    while (curr != null) {
        ListNode temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
      }
      return prev;

  }
}