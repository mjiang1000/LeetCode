/**
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 *  示例 1:
 *
 *	输入: dividend = 10, divisor = 3
 *	输出: 3
 *
 */

// var divide = function(dividend, divisor) {
//   var i = 0, t = 0;
//   while ()
// };

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

/**一个方法是一直做减法，然后计数，但是提交之后显示超时，
* 一种解法，利用位运算， 左移一位相当于乘以2，
* 是任何一个整数可以表示成以2的幂为底的一组基的线性组合，
* 即num=a_0*2^0+a_1*2^1+a_2*2^2+…+a_n*2^n。基于以上这个公式我们先让除数左移直到大于被除数之前得到一个最大的基n的值，
* 说明被除数中至少包含2^n个除数，然后减去这个基数，再依次找到n-1，…，1的值。将所有的基数相加即可得到结果。
*/
var divide = function(dividend, divisor) {
  

  return average

};

// console.log(divide(10,3))
var d = Date.now()
console.log(divide(2147483646,2)==2147483646/2 ,
		Date.now() - d)