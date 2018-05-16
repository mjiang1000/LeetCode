/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
 * 找出 nums 中的三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在唯一答案。
 */


var threeSumClosest = function(nums, target) {
  var n = nums.sort((a,b) => { return a - b })

  var  len = nums.length , closet = 0

  for (var i =0; i < len;i++) {
  	if (i > 0 && n[i] == n[i-1] ) continue
  	var j = i+1, k = len - 1

    while(j < k) {
      var s = n[i] + n[j] + n[k];

      if (s > target) {
      	k--
      	if (s-target < (closet >= 0? closet : -closet) ) closet = s - target
      	console.log(closet)
      }
      else if (s < target) {
   		j++
   		if (target -s < (closet >= 0? closet : -closet)) closet = s - target
   		console.log(closet)
      } else {
      	return 0
      }
    }

    
  }

  return target+closet
};


console.log(
// threeSumClosest([-1,2,1,-4], 1)+'\n',
threeSumClosest([0,0,0],1)
	)