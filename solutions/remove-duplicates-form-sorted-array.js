/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，
 * 使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组
 * 并在使用 O(1) 额外空间的条件下完成。
 * 示例 2:

 * 给定 nums = [0,0,1,1,1,2,2,3,3,4],
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
 * 你不需要考虑数组中超出新长度后面的元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var len = nums.length; i = 0;
  while(i<len) {
  	if (i+1< len && nums[i+1] == nums[i]) {
  	  var j =i
  	  while(j<len-1) nums[j++] = nums[j] //后面整体向前移动
  	  len--

  	} else i++
  }

  // console.log(nums)
  return len
};


// console.log(
// removeDuplicates([1,1,2]),
// removeDuplicates([0,0,1,1,1,2,2,3,3,4]),
// removeDuplicates([1,1,2])
// )

nums = [0,0,1,1,1,2,2,3,3,4]
//优化
len=1
for (var i=1;i<nums.length;i++) {
  if (nums[i-1] == nums[i]) {

  } else {
  	
  	nums[len++] = nums[i]
  }
}

console.log(nums)