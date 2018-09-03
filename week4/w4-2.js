const find_missing = (arr, low, high) => {
  let tmp = [];
  for(let i = low; i < high; i++) {
    if(!arr.includes(i)) {
      tmp.push(i);   
    }
  }
  return tmp;
}


console.log(find_missing([10, 12, 11, 15], 10, 15)) // [13,14]
// 注: low=10 high = 15

console.log(find_missing([1, 14, 11, 51, 15],50, 55)) // [50, 52, 53, 54]