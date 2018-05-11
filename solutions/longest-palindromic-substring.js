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

var isPalidrome = function(s) {
  var slen = s.length
  for (var i=0;i<slen/2;i++) {
  	if (s[i] != s[slen-i-1]) return false
  }
  return true
}
var longestPalindrome = function(s) {
  var tlen = 1, longestr = '', slen = s.length
  for(var i=0;i<slen;i++) {
  	for(var j=i;j<slen;j++) {
  	  if (s[i]==s[tlen-i-1]) {
  	  	longestr = s.substring(i,i+tlen); 
  	  	if (isPalidrome(longestr)){tlen=1+ longestr.length;j=slen}
  	  	
  	  }
  	}

  }

  return longestr
};