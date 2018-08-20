// 1 循环，时间复杂度为 o(n)

function solution1(num){
	let sum = 0;
	for(let i = 3; i < num; i++){
		if(i % 3 === 0 || i % 5 === 0){
			sum += i;
		}
	}
	return sum;
}

// 2 等差数列求和公式。 无时间复杂度
const sn = (a1, n, d) => (2 * a1 + (n - 1) * d) * n / 2;

const getN = (n, d) => n % d === 0 ? (n / d) - 1 : Math.floor(n / d);

const solution = (n) => {
  if(n < 0) return 0;
  const n1 = getN(n, 3);
  const n2 = getN(n, 5);
  const n3 = getN(n, 15);

  return sn(3, n1, 3) + sn(5, n2, 5) - sn(15, n3, 15);
}

console.log(solution(16));
console.log(solution(10));
console.log(solution(1));
console.log(solution(0));
console.log(solution(-3));