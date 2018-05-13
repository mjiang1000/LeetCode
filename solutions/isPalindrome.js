var isPalindrome = function(x) {
  if (x<0) return false
  if (x==0) return true

  var y = 0, p =10, z =x
  while(z) {
    y=y*10+z%10
    z = parseInt(z/10)
  }
  // console.log(y)
  return x== y

};