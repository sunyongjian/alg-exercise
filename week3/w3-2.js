// 什么是素数，即因子只有 1 及 n 自身的数

// 1. 最脑残的方法，就是从 2 开始，到 n/2 之间，循环让 n % i === 0
// 2. 【2， n/2】中间，还有很多偶数的情况，可以排除掉，因为偶数肯定能被 2 整除，不是素数。
// 3. 定理: 如果 n 不是素数, 则n有满足 1 < d <= sqrt(n)的一个因子d.  
// 证明: 如果 n 不是素数, 则由定义n有一个因子 d 满足 1< d < n. 如果 d 大于 sqrt(n), 则 n/d 是满足 1< n/d<=sqrt(n) 的一个因子.

// 4. 开平方优化
// 5.  构造素数序列 6.(在素数表中)二分查找  后三种自己研究下...hh


const is_prime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) return false;
  }
  return num % 2 !== 0;
}

console.log(is_prime(0));
console.log(is_prime(1));
console.log(is_prime(2));
console.log(is_prime(3));
console.log(is_prime(4));
console.log(is_prime(5));
console.log(is_prime(7));
console.log(is_prime(9));
console.log(is_prime(101));