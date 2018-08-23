const reverse = arr => {
  let len = arr.length;
  for (let l = 0, r = len - 1; l < r; l++, r--) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
  return arr;
}

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([4, 5, -1, 3, 2]));
console.log(reverse([2, 3, 4, 5]));
console.log(reverse([0, 10, 11, 12]));
