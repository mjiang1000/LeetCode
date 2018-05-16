/**
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，
例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
同样地，数字 9 表示为 IX。
这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
*/

function repeatstr(c1, c2, c3,n) {
  var str = ''
  if (n ==4) return c1+c2
  if (n ==9) return c1+c3
  if (n == 5) return c2
  var l = n > 5 ? (str = c2) && n - 5 : n
  while (l--) {
    str += c1
  }
  

  return str
}

var intToRoman = function(num) {
  var n = num, s = '', p =10
  while (n > 0) {
    var c = n%p;
    if (p==10) {
      s = repeatstr('I', 'V','X', c) + s
    }else if (p==100) {
      s = repeatstr('X', 'L', 'C', c/10) + s
    } else if (p==1000) {
      s = repeatstr('C', 'D','M', c/100) + s
    } else {
      var l = c/1000
      while(l--) {
        s = 'M' + s
      }
    }
    n = n -c
    p = p*10;

  }

  return s
};