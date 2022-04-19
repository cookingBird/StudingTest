
public class MergeTwoSortList {
	private MergeTwoSortList() {
		throw new IllegalStateException("utility class");
	}

	public class ListNode {
		int value;
		ListNode next = null;

		public ListNode(int val) {
			this.value = val;
		}
	}

	public ListNode merge(ListNode a, ListNode b) {
		if (a.next == null) {
			return b;
		} else if (b.next == null) {
			return a;
		} else if (a.value < b.value) {
			a.next = merge(a.next, b);
			return a;
		} else {
			b.next = merge(a, b.next);
			return b;
		}
	}

	public ListNode mergeByIterator(ListNode a, ListNode b) {
		ListNode preHead = new ListNode(-1);
		ListNode prev = preHead;
		while (a != null && b != null) {
			if (a.value < b.value) {
				prev.next = a;
				a = a.next;
			} else {
				prev.next = b;
				b = b.next;
			}
			prev = prev.next;
		}
		prev.next = a == null ? b : a;
		return preHead.next;
	}

	public void insertNode(ListNode pre, ListNode p) {
		ListNode temp = pre.next;
		pre.next = p;
		p.next = temp;
	}
}
