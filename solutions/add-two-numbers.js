/*
* 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
* 输出：7 -> 0 -> 8
* 原因：342 + 465 = 807
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
var addTwoNumbers = function(l1, l2) {
  var n1=0,pow1=1,n2=0,pow2=1,l,s;
  while(l1) {
  	n1+= l1.val*pow1
  	pow1*=10
  	l1 = l1.next
  }

  while(l2) {
  	n2 += l2.val*pow2
  	pow2*=10
  	l2 = l2.next
  }

  s = (n1+n2)+'';
  l = new ListNode(s[s.length-1]*1)
  var cur = l
  for(var j=s.length-2;j>=0;j--) {

  	cur.next = new ListNode(s[j]*1)
  	cur = cur.next
  }

  return l
  
  

};

// 以上代码在小数执行正确。超出计算范围出错


var addTwoNumbers = function(l1, l2) {
  var carry=0, sum = 0,
  head = new ListNode(0), cur = head,
  n = 0
  while(l1 || l2) {
  	sum = (l1 ? l1.val : 0) +(l2? l2.val : 0)+carry
  	carry = sum > 9 ? 1 : 0
  	cur.next = new ListNode(sum%10)
  	cur = cur.next

  	l1 = l1 && l1.next
  	l2 = l2 && l2.next
  }

  if (carry) {
  	cur.next = new ListNode(carry)
  }

  return head.next
}
