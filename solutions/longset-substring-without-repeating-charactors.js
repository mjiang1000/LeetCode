/*
* 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

* 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

* 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。*/

/**
 * @param {string} s
 * @return {number}
 */

var getUniqLen = function(s) {
  var uniqMap = {}, len = 0;
  for(var i=0;i<s.length;i++){
  	if (!uniqMap[s[i]]){
  		uniqMap[s[i]] = 1;len++
  	}
  }

  return len
};
var lengthOfLongestSubstring = function(s) {
  
  var uniLen = getUniqLen(s), len = s.length
  
  if (uniLen<2) return uniLen
  while(uniLen) {
  	for(var j=0;j<len&& j+uniLen<=len;j++) {
  	  var ts = s.substring(j,j+uniLen)
  	  if (getUniqLen(ts) === uniLen) {; return uniLen}
  	}
  	uniLen--
  }

  return uniLen
};

lengthOfLongestSubstring("ylfzmeipzgwsdzgrebwvshaelhsndxydifdxllmltifwkooqpmohtqngygudfshqzknlvbyrmfnwt")
// 超出时间