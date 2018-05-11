/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。
 *
 * 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var sorted = [], i=0,j=0,len =0,
  m = nums1.length, n = nums2.length

  while(len < (m+n+2)/2) {

    if (i<m && j<n) {
      if (nums1[i] > nums2[j])  sorted[len++]=nums2[j++]
      else sorted[len++]=nums1[i++]

    } else{
      if (i>= m) sorted[len++]=nums2[j++]
      else if (j>=n) sorted[len++]= nums1[i++]
      else len++
    } 
  }

  if ((m+n)%2) {
    return sorted[(m+n-1)/2]
  }else {
    return sorted[(m+n)/2 -1]/2 +sorted[(m+n)/2]/2
  }

};

findMedianSortedArrays([1,2],[3,4])
// https://blog.csdn.net/kenby/article/details/6833407

var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length == 0 || nums2.length == 0) {
        if ((nums1.length + nums2.length) % 2 == 1) {
            const index = parseInt((nums1.length + nums2.length) / 2)
            return nums2.length == 0 ? nums1[index] : nums2[index]
        } else {
            let nums = nums2.length == 0 ? nums1 : nums2
            const index = nums.length / 2
            return (nums[index - 1] + nums[index]) / 2
        }
    }

    if (nums1.length > nums2.length) {
        swap(nums1, nums2)
    }
    const M = nums1.length, N = nums2.length
    let min = 0, max = M, half = parseInt((M + N + 1) / 2) // 连个数组合并的中间值
    while (min <= max) {
        let i = parseInt((min + max) / 2) // nums1 的索引值
        let j = half - i // num2 的索引值
        if (i < max && nums2[j - 1] > nums1[i]) {
            min++
        } else if (i > min && nums1[i - 1] > nums2[j]) {
            max--
        } else {
            let maxLeft = 0
            if (i == 0) {
                maxLeft = nums2[j - 1]
            } else if (j == 0) {
                maxLeft = nums1[i - 1]
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1])
            }
            if ((M + N) % 2 == 1) {
                return maxLeft
            }
            let minRight = 0
            if (i == M) {
                minRight = nums2[j]
            } else if (j == N) {
                minRight = nums1[i]
            } else {
                minRight = Math.min(nums1[i], nums2[j])
            }
            return (maxLeft + minRight) / 2
        }
    }
    return 0
};

function swap(a, b) {
    let tmp = a
    a = b
    b = tmp
}