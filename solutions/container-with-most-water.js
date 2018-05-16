/**
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 画 n 条垂直线，使得垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 */

/*
 * 解题思路

所以每次要移动左右两个高度中较小的那一个，才有可能让面积增大。
因为当你移动了较大的那一条边之后，再求两条边的最小值，还是不会超过移动之前的最小值，甚至还有可能会减小

作者：Jason_Yuan
链接：https://www.jianshu.com/p/5a5d6da50610
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var max =  0, i = 0, j = height.length - 1
  while(i < j) {
  	var s ;
  	if (height[i] < height[j]) {
  		s = (j - i)*height[i]
  		i++
  	} else {
  		s = (j - i)*height[j]
  		j--
  	}

  	if (s > max) max = s
  }
  
  return max
};