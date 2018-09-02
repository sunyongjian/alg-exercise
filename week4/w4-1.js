const sequence = lambda => {
  return {
    take: n => {
      let result = [];
      for(i = 0; i < n; i++) {
        result.push(lambda(i));
      }
      return result;
    },
    take2: n => Array(n).fill(0).map((x, i) => lambda(i)),
    takeWhile: limit => {
      let n = 0, result = [], i = 0;
      while(limit(n)) {
        n = lambda(i++);
        limit(n) && result.push(n);
      }
      return result;
    }
  }
}

console.log(sequence( n => n * n ).take(5)) // [0, 1, 4, 9, 16]
console.log(sequence( n => n * n ).take2(5)) // [0, 1, 4, 9, 16]
console.log(sequence( n => n * 4 ).takeWhile( n => n < 20 )) // [0, 4, 8, 12, 16]