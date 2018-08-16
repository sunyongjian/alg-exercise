// 写一个函数判断字符串中x的数量和o的数量是否相等（忽略大小写）：

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // 没有x也没有o，所有相等，都为0
// XO("zzoo") => fals



// 实际一行代码即可，加了一些函数式画蛇添足...
// 1. 正则解法
const numbersInStr = (x = '') => (str = '') => {
  const reg = new RegExp(x, 'ig');
  const result = str.match(reg) || [];
  return result.length;
}

const xInStrTimes = numbersInStr('x');
const oInStrTimes = numbersInStr('o');

function XO(str) {
  return xInStrTimes(str) === oInStrTimes(str);
}


console.log(XO("ooxx")) //=> true
console.log(XO("xooxx")) //=> false
console.log(XO("ooxxm")) //=> true
console.log(XO("zpzpzpp")) //=> true // 没有x也没有o，所有相等，都为0
console.log(XO("zzoo")) //=> false


// 2. 数组解法
function XO2(str) {
  return str.split('').filter(s => s === 'x').length === str.split('').filter(s => s === 'o').length;
}

console.log(XO2("ooxx")) //=> true
console.log(XO2("xooxx")) //=> false
console.log(XO2("ooxxm")) //=> true
console.log(XO2("zpzpzpp")) //=> true // 没有x也没有o，所有相等，都为0
console.log(XO2("zzoo")) //=> false