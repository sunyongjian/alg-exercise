const traverse = (arr, num) => {
  if(arr.length % num !== 0) return;
  const erar = Array(num).fill(0).map((x, i) => arr.slice(i * num, (i + 1) * num));
  const tmp = [];
  while(erar.length) {
    const last = [], first = [];
    if(erar.length === 1) {
      tmp.push(...erar.pop());
      return tmp;
    }
    for(let i = 1; i < erar.length - 1; i++){
      const item = erar[i];
      last.push(item.pop());
      first.push(item.shift());
    }
    tmp.push(...erar.shift()); // 第一行
    tmp.push(...last); // 最后一列
    tmp.push(...erar.pop().reverse()); // 最后一行
    tmp.push(...first.reverse()); // 第一列
  }
  return tmp;
}

console.log(traverse([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [1,2,3,6,9,8,7,4,5]
console.log(traverse([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4)); // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]