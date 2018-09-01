const sort012 = arr => {

}

function generateRandomArr(n, min, max) {
  var arr = [];
  for (var i = 0; i < n; i++) {
      var random = Math.floor(Math.random() * (max - min + 1) + min);
      arr.push(random);
  }
  return arr;
}
console.time('generateAry');
console.log(generateRandomArr(100000000, 0, 2).length);
console.timeEnd('generateAry');
