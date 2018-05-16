/**
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 */

/**
 * @param {string} s
 * @return {number}
 */


var romanToInt = function(s) {
  var i = s.length- 1; n = 0
  while(i >= 0) {
    
      if (s[i] == 'I') n = n >= 5 ? n -1 : n + 1
      else if (s[i] == 'V') n+=5
      else if (s[i] == 'X') n = n >= 50 ? n -10 : n+10
      else if (s[i] == 'L') n+=50
      else if (s[i] == 'C') n = n>= 500? n-100: n+100
      else if (s[i] == 'D') n+=500
      else if (s[i] == 'M') n+=1000
      else return n
      
      i--
  }
  
  return n
};