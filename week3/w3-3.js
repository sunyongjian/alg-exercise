// 这个实现比较有意思，curry 化后的函数，cadd 执行是累加的，到 4 次后，返回 result
// 到 4 次后，重新开始循环。

const curry = fn => {
  let l = fn.length, args = [];
  const tmp = (n) => {
    l --;
    args.push(n);
    if(l === 0) {
      l = fn.length;
      return fn(...args)
    }
    return tmp;
  }
  return tmp;
}
const add = (a, b, c, d) => a + b + c + d;
const pow = curry(Math.pow);

console.log(pow(10)(2)) // 100
const cadd = curry(add);
cadd(1);
cadd(2);
cadd(3);
console.log(cadd(4));
console.log(cadd(1)(2)(3)(4));



const curry2 = fn => {
  const tmp = (...args) => {
    return args.length >= fn.length ? fn(...args) : (...ar) => tmp(...args, ...ar);
  }
  return tmp;
}
const cadd2 = curry(add);

console.log(cadd2(1)(2)(3)(4));



const curry3 = func => {
  const g = (...allArgs) => allArgs.length >= func.length ?
    func(...allArgs) : (...args) => g(...allArgs, ...args)
  return g
}


