/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var i = 0,cur = head, len = 0;
  while (cur) {
  	head++
  	// if (cur.next) cur.next.prev = cur
  	cur = cur.next
  }
  cur = head
  while(++i < len - n ) {
  	cur = cur.next
  }

  cur.next = cur.next.next

  
  
  return head
};

// 1.优化，利用数组存储
// 2.利用两个指针，先后移动

var removeNthFromEnd = function(head, n) {
  var pre = new ListNode(0);

  pre.next = head;
  var first = pre,second = pre;

  for (var i=0;i<=n;i++) {
  	first = first.next;
  }
  while(first) {
  	first = first.next;
  	second = second.next;
  }

  second.next = second.next.next;
  return pre.next;
};