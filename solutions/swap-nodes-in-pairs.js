/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var p0 = new ListNode(0);
  p0.next = head, cur =p0, i =0;

  while(cur) {
  	// i++
  	var temp = cur.next, temp1 = temp && temp.next
  	if (temp && temp1) {
  	  cur.next = temp1
	  temp.next = temp1.next  	  
  	  temp1.next = temp
  	  cur = temp
  	} else {
  	  cur = cur.next
  	}
  }

  return p0.next
};
