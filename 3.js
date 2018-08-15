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
console.log(XO("ooxXm")) //=> true
console.log(XO("zpzpzpp")) //=> true // 没有x也没有o，所有相等，都为0
console.log(XO("zzoo")) //=> false