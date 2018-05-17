/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */

var isValid = function(s) {
  while (s) {
  	var oldLen = s.length
    if (s.indexOf('()') > -1) s = s.replace('()','')
    if (s.indexOf('[]') > -1) s = s.replace('[]','') 
    if (s.indexOf('{}') > -1) s = s.replace('{}','')
    if (oldLen == s.length) return false
  } 
  if (s=='') {return true}
  return false
};


console.log(isValid("()[]{}"),
	isValid("(]"), 
	isValid("([)]"),
	isValid('{[]}')
	)


//利用对称性
var isValid = function (s) {
    let stack = []
    for (let c of s) {
        if (c == "(") {
            stack.push(")")
        } else if (c == "[") {
            stack.push("]")
        } else if (c == "{") {
            stack.push("}")
        } else {
            if (stack.length == 0) return false
            const last = stack.pop()
            if (last != c) return false
        }
    }
    return stack.length == 0
};