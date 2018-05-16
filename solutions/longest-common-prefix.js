/**
 * 查找字符串数组中的最长公共前缀。
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length < 1) return ""
  var prefix = "", i = 0;

  while (i < strs.length) {
  	for (var j = 0; j < strs.length; j++) {
  	  if (strs[0][i] && strs[j][i] == strs[0][i]) {}
  	  else {return prefix}
  	}
    prefix += strs[0][i]
    i++
  }

  return prefix
};

console.log(
  longestCommonPrefix(["flower","flow","flight"]), '\n',
  longestCommonPrefix(["dog","racecar","car"]), '\n',
  longestCommonPrefix(["flower","flow","flight"]) == "fl", '\n'

)