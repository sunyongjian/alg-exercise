
const squareDigits = (num) => {
  return +`${num}`.split('').map(item => Math.pow(item, 2)).join('');
};

console.log(squareDigits(9119));
