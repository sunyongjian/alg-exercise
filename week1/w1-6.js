
// 首先根据行号找到 此行 的第一个数字是什么。这个我是试出来的... 解决了这个就好办了
// 然后此行的数字个数其实就是 行数 x
// 然后循环 x 次，按照奇数的规律，把剩余的数字算出，求和即可。


// 第一版
const rowSumOddNumbers1 = (x) => {
  let sum = 0;

  const xRowFirstNum = x * (x - 1) + 1;
  let newNum = xRowFirstNum; // 保存下一个数字
  for(let i = 0; i < x; i++) {
    sum += newNum;
    newNum += 2; //计算
  }
  return sum;
}


// 第二版
// 先把 x 行的第一个数 y 求出来，由于下一个数是 + 2，下下个是 + 2*2 以此类推 ...
// 也就是 x 倍的 y 加上 1 + 2 + 3 +... + n  倍的 2。 n 正好等于 x - 1 由自然数求和公式 => 即 n(n+1)/2  * 2 => x(x - 1)

const rowSumOddNumbers2 = (x) => {
  // xRowFirstNum = x * (x - 1) + 1;
  // sum = x (x(x -1) + 1) + x(x - 1)
  // => x^3 - x^2 + x + x^2 - x 
  // => x^3

  return Math.pow(x, 3);
}

console.log(rowSumOddNumbers1(1)) // 1
console.log(rowSumOddNumbers1(2)) // 3+5=8
console.log(rowSumOddNumbers1(3)) // 7+9+11=27
console.log(rowSumOddNumbers1(4)) // 64
console.log(rowSumOddNumbers1(5)) // 125
console.log(rowSumOddNumbers1(42)) // 74088

console.log(rowSumOddNumbers1(1)) // 1
console.log(rowSumOddNumbers1(2)) // 3+5=8
console.log(rowSumOddNumbers1(3)) // 7+9+11=27
console.log(rowSumOddNumbers1(4)) // 64
console.log(rowSumOddNumbers1(5)) // 125
console.log(rowSumOddNumbers1(42)) // 74088