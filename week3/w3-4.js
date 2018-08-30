const floorPowerOfTwo1 = n => 2 ** ~~Math.log2(n);

const floorPowerOfTwo2 = n => {
  let x = 0;
  while(n >= 2) {
    n = n / 2;
    x++;
  }
  return 2 ** x;
};

console.log(floorPowerOfTwo1(66));// 64
console.log(floorPowerOfTwo1(32));// 32
console.log(floorPowerOfTwo1(33));// 32
console.log(floorPowerOfTwo1(2)); // 2
console.log(floorPowerOfTwo1(1)); // 1
console.log(floorPowerOfTwo1(0)); // 0