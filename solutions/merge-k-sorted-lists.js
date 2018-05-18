/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  var mList = new ListNode(0), 
  head = mList, nums = []

  for (var i=0; i<lists.length;i++) {
  	while (lists[i]) {
  	  nums.push(lists[i].val)
  	  lists[i] = lists[i].next
  	}
  }

  nums.sort(function(a, b) { return a-b})
  for(var i=0;i<nums.length;i++) {
  	head.next = new ListNode(nums[i])
  	head = head.next
  }

  return mList.next
  
 //  function mergeHalf(lists, start, end) {
 //  	if (start== end) return lists[start]
 //  	var mid = (start + end)/2
	// l1 = mergeHalf(lists, start, mid)
	// l2 = mergeHalf(lists, mid+1, end)
	// merge2(l1,l2)  

 //  }
  
 //  function merge2(l1, l2) {
 //  	var l = new ListNode(0), cur = l
 //  	while(l1 && l2) {
 //  	  if (l1.val > l2.val) {
 //  	  	cur.next = l1
 //  	  	l1 = l1.next
 //  	  	cur = cur.next
 //  	  } else {
 //  	  	cur.next = l2
 //  	  	l2 = l2.next
 //  	  	cur = cur.next
 //  	  }

 //  	  if (l1) {cur.next = l1}
 //  	  if (l2) {cur.next = l2}
 //  	}
 //    return l.next
 //  }
};
