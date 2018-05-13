/**
 * 将字符串 "PAYPALISHIRING" 以Z字形排列成给定的行数：

 *  P   A   H   N
 *  A P L S I I G
 *  Y   I   R
 * 之后从左往右，逐行读取字符："PAHNAPLSIIGYIR"
 */


 /**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

//一次z 需要 n+n-2 个字母（n行）
var convert = function(s, numRows) {
  var arr = [], n = 2*numRows - 2
  for (var i = 0 ,len = s.length; i < len; i++) {
  	var y = i % n;
  	if (!arr[y]) arr[y] = ''
  	// arr[y] += s[i]

    if (y < numRows-1) {arr[y] += s[i]}
    else {arr[ numRows - y - (numRows -1) ] += s[i]}
  }

  return arr.join('')
};

