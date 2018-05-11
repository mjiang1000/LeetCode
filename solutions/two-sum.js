/*
*  给定 nums = [2, 7, 11, 15], target = 9
*  因为 nums[0] + nums[1] = 2 + 7 = 9
*  所以返回 [0, 1]
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {} 
  for(var i =0,l=nums.length; i<l; i++ ) {
  	
	if (map[target-nums[i]]===0 || map[target-nums[i]]) {
		break;
		return [i,map[target-nums[i]]]
	}
  	map[nums[i]] = i
    
  }
  return []
};

// twoSum([2,7,11,15],9)

//利用map查找比array效率高