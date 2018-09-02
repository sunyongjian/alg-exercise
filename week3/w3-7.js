const bit_count = num => num.toString(2).split('').reduce((res, cur) => +res + +cur);


console.time('1234');
console.log(bit_count(1234));
console.timeEnd('1234');

console.time('33');

console.log(bit_count(33));
console.timeEnd('33');