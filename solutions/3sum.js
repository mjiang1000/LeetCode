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
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var r = [], m = {}
  for (var i = 0;i<nums.length;i++) if(typeof m[nums[i]] == 'undefined') m[nums[i]] = i
  console.log(m)
  for (var i =0; i < nums.length; i++) {
    for (var j=i+1; j< nums.length - 1;j++) {
      var k = m[-(nums[i] + nums[j])]
      if (k && k>j) r.push([nums[i], nums[j], nums[k]])
  	}
  }
  return r
};


console.log(
threeSum([-1, 0, 1, 2, -1, -4])
	)