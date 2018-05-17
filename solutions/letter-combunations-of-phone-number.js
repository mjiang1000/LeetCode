// letter-combunations-of-phone-number
/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * 2-> a,b,c
 * 3-> d,e,f
 * 4-> g,h,i
 * 5-> j,k,l
 * 6-> m,n,o
 * 7-> p,q,r,s
 * 8-> t,u,v
 * 9-> w,x,y,z
 */

/**
* @param {string} digits
* @return {string[]}
*/
var letterCombinations = function(digits) {
  var map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  var rs = [], length =1;
  for (var i=0; i<digits.length;i++) {
  	var a = map[digits[i]];
  	if (!a) continue;
  	rs.push(a)
  	length = a.length * length
  }
  if (rs.length ==  0) return []
  var result = [];
  nextChar('', rs[0],1)
  function nextChar(str, arr, next) {
  	if (next>rs.length) return result.push(str)
    for (var i =0; i< arr.length;i++) {
      var s = str + arr[i]
      nextChar(s, rs[next], next+1)
    }
  }

  return result
};


console.log(
letterCombinations("23")
	)
