
// 返回新数组
const rotate = (arr, amount) => [...arr.slice(-amount), ...arr.slice(0, arr.length - amount)];

// 原数组上操作，会修改原数组，同一个函数，执行多次的结果不同，产生副作用。一般不推荐这种。不容易追查问题
const rotate2 = (arr, amount) => { arr.unshift(...arr.splice(-amount)); return arr;}

const ary = [1, 2, 3, 4, 5, 6];

console.log(rotate(ary, 2));
console.log(rotate(ary, 3));
console.log(rotate(ary, 4));
console.log(rotate(ary, 6));

console.log('------------');
console.log(rotate2(ary, 2));
console.log(rotate2(ary, 3));
console.log(rotate2(ary, 4));
console.log(rotate2(ary, 6));