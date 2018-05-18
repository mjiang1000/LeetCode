/**
给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。

示例 :

给定这个链表：1->2->3->4->5

当 k = 2 时，应当返回: 2->1->4->3->5

当 k = 3 时，应当返回: 3->2->1->4->5
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
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function(head, k) {
  var List = new ListNode(0), 
  cur = List, i = 0, arr = []
  List.next = head
  if (k<2) return head
  while(cur) {
  	if (i<=k) {
  	  arr[i++] = cur
  	  cur = cur.next
  	  console.log(i)
  	} else {
  	  
  	  var start = arr[0], end = cur.next;
  	  start.next = arr[i].next
      
  	  while(i--) {
  	  	arr[i].next = arr[i-1]
  	  	
  	  }
  	  arr[i].next = end
  	  arr = []; 
  	}
  }
  
  return List.next
};