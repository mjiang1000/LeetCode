/**
 * 实现 strStr() 函数。
 * 给定一个 haystack 字符串和一个 needle 字符串，
 * 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 *
 * 示例 1:

 *	输入: haystack = "hello", needle = "ll"
 *	输出: 2
 *
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle=="") return 0
  if (needle == haystack) return 0
  var index = -1,  len = 0;
  for (var i=0; i<haystack.length;i++) {
    if (haystack[i] == needle[len]) {
      len++
    } else {
      if (len == needle.length){ return i - len}
      else { i = i-len; len = 0}
    }
  }
  if (len == needle.length){ return i - len}
  
  return index
};

console.log(strStr(haystack = "mississippi", needle = "pi"))
console.log(strStr(haystack = "0lala", needle = "la"))