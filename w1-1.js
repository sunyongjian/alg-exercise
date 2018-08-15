// 观察下面的规律，写一个函数accum
// ```
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// ```


function accum(str) {
  return str.split('').reduce((res, cur, index) => `${res}-${cur.toUpperCase()}${cur.toLowerCase().repeat(index)}`, '').slice(1);
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));


// 更优雅的方案

function accum1(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}

console.log(accum1('abcd'));
console.log(accum1('RqaEzty'));
console.log(accum1('cwAt'));