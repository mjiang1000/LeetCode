/**
 * 将两个有序链表合并为一个新的有序链表并返回。
 * 新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  var list = new ListNode(0), 
  p1 = l1, p2 = l2, head = list
  while (p1 || p2) {

    if (!p1 || ( p1 && p2&& p1.val > p2.val) ){
      head.next = p2
      head = head.next
      p2 = p2.next
    } else {
      head.next = p1
      head = head.next
      p1 = p1.next
    }
  }
  return list.next
};

console.log()
