/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0  找出所有满足条件且不重复的三元组。
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为：
 *	[
 *	  [-1, 0, 1],
 *	  [-1, -1, 2]
 *	]
 */
/**
 * 思路，暴力方法不可取，复杂度n^3，超出时间限制
 * 先排序，降低复杂度n^2
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
  var n = nums.sort(function(a,b) { return a - b}),
  r = [], len = nums.length 
  if (len<2) return []

  for (var i = 0;i< len; i++) {
    if (i > 0 && n[i] == n[i-1]) {continue}
    var start = i + 1, end = len-1
    while(start < end) {
      var s = n[i] + n[start] + n[end] 
      if(s > 0) {end--}
      else if(s < 0) {start++}
      else {
        r.push([n[i] , n[start] , n[end] ]);
        // 跳过重复
        start++
        end--
        while (start < end && n[start] == n[start-1]) { start++}
        while (end > start && n[end] == n[end+1]) {end--}

      }
    } 
  }

  return r
};


console.log(
threeSum([-1, 0, 1, 2, -1, -4])
	)