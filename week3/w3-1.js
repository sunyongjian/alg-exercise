// 1. join ，性能最差，而且不支持 正则函数，会把所有项转成字符串。不推荐
console.time('flat');
const flat = ary => ary.join(',').split(',');

console.log(flat([1,[2,'a',[5,6]],8])); // 3.0 ms +
console.timeEnd('flat');


// 2. reduce + spread ，性能还不错...
const flat2 = ary => {
  return ary.reduce((res, cur) => {
    if(Array.isArray(cur)) {
      return [...res, ...flat2(cur)];
    }
    return [...res, cur];
  }, [])
}

console.time('flat2');
// console.log(flat2([1,[2,'a',[5,6]],8])); // 1.32ms
console.timeEnd('flat2');



console.time('flat3');

// 3. concat + map。比之前的稍微差一点
const flat3 = ary => [].concat(...ary.map(item => Array.isArray(item) ? flat3(item) : item));

// console.log(flat3([1,[2,'a',[5,6]],8])); // 1.6ms
console.timeEnd('flat3');


// 4. 递归的时候使用 concat。如果要区分，可能要加大数量。
const flat4 = ary => {
  return ary.reduce((res, item) => {
    if(Array.isArray(item)) {
      return flat4(res.concat(item));
    }
    return [...res, item];
  }, [])
}

console.time('flat4');

// console.log(flat4([1,[2,'a',[5,6]],8])); //1.3ms
console.timeEnd('flat4');
