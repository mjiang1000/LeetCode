/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，
 * 判断 nums 中是否存在四个元素 a，b，c 和 d ，
 * 使得 a + b + c + d 的值与 target 相等？
 * 找出所有满足条件且不重复的四元组。
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => {return a-b})
  var len = nums.length, result = []
  if (len < 4) return result
  // if (nums[0]==nums[len-1] && 4*nums[0]==target) return [[nums[0], nums[0], nums[0], nums[0]]]
  for (var i = 0; i<len;i++) {
  	if (i>0 && nums[i] == nums[i-1]) continue
  	for (var j = i+1; j<len;j++) {
  	  if ( j>i+1 && nums[j] == nums[j-1]) continue //确保j=i+1执行一次
  	  var start = j + 1, end = len -1, s;

  	  while(start < end) {
  	  	s = nums[i] + nums[j] + nums[start] + nums[end]
  	  	if (s > target) {
  	  	  end--
  	  	} else if (s < target) {
  	  	  start++
  	  	} else {
  	  	  result.push([nums[i] , nums[j] , nums[start] , nums[end]])
  	  	  end--
  	  	  start++
  	  	  while(start<end && nums[start] == nums[start-1]) start++
  	  	  while(start<end && nums[end+1] == nums[end]) end--
  	  	}
  	  }
  	}
  }
  
  return result
};


console.log(
// 	[1,0,-1,0,-2,2]
// 0
fourSum([-3,-2,-1,0,0,1,2,3],
0),'\n',
fourSum([0,0,0,0],0),'\n',
fourSum([-1,0,1,2,-1,-4],-1)
	)