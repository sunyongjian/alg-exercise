// 写一个函数判断一个数字是不是某个整数的平方。
// ```
// isSquare (-1) # => false
// isSquare   0 # => true
// isSquare   3 # => false
// isSquare   4 # => true
// isSquare  25 # => true
// isSquare  26 # => false
// ```



function isSquare(num) {
  return Math.sqrt(num) % 1 === 0;
}


console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(3))
console.log(isSquare(4))
console.log(isSquare(25))
console.log(isSquare(26))



function isSquare2(num) {
  return Number.isInteger(Math.sqrt(num));
}

