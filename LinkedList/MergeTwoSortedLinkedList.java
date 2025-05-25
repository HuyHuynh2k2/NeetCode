package LinkedList;

public class MergeTwoSortedLinkedList {
  public static void main(String[] args) {
    ListNode head1 = new ListNode(1);
    head1.next = new ListNode(3);
    head1.next.next = new ListNode(5);

    ListNode head2 = new ListNode(2);
    head2.next = new ListNode(4);
    head2.next.next = new ListNode(6);

    ListNode mergedHead = merge(head1, head2);
    System.out.println(mergedHead.toString());
  }

  public static class ListNode {
    int val;
    ListNode next;

    public ListNode(int val) {
      this.val = val;
      this.next = null;
    }

    public String toString() {
      ListNode curr = this;
      StringBuilder sb = new StringBuilder();

      while (curr != null) {
        sb.append(curr.val).append(" -> ");
        curr = curr.next;
      }
      sb.append("null");
      return sb.toString();
    }
  }

  public static ListNode merge(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode node = dummy;

    while (l1 != null && l2 != null) {
      if (l1.val <= l2.val) {
        node.next = l1;
        l1 = l1.next;
      } else {
        node.next = l2;
        l2 = l2.next;
      }
      node = node.next;
    }

    // Attach remaining nodes
    node.next = (l1 != null) ? l1 : l2;

    return dummy.next;
  }
}
