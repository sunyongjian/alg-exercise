// 第一种
const special = (ary) => {
  if(ary.length < 3) return;
  const pattern = (ary[0]%2 + ary[1]%2 + ary[2]%2) > 1 ? 0 : 1; // 大于一说明奇数多，小于偶数多
  return ary.find(item => item % 2 === pattern);
}


// 第二种
const special2 = A => {
  const evens = A.filter(a => a % 2 === 0);
  const odds = A.filter(a=> a % 2 !== 0);
  return evens.length == 1 ? evens[0] : odds[0];
}

console.log(special([2, 1, 3])); // 2
console.log(special([3, 2, 4])); // 3
console.log(special([2, 4, 6, 3])); // 3
console.log(special([1, 3, 5, 2])); // 2