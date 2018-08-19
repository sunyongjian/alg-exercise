
const squareDigits = (num) => {
  return Number(`${num}`.split('').map((item, index) => Math.pow(item, 2)).join(''));
};

console.log(squareDigits(9119));
