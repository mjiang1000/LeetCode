/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba"也是一个有效答案。
 */

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  var longestr = '', slen = s.length




  var isPalidrome = function(s, low, high) {
    while(low>=0 && high<slen) {
      if (s[low]===s[high]  ) {
        if (high-low >= longestr.length)longestr = s.substring(low,high+1)
        low--; high++

      } else{
        return
      }
    }
  }

  for (var i=0;i<slen;i++) {
    
    isPalidrome(s,i,i)
    isPalidrome(s,i,i+1)
    
  }
  return longestr
};
//思路，从中心向两侧对称，减少判断，加快速度 时间复杂度O(n^2)


// Manacher算法能够在O(N)的时间复杂度 **新思路
