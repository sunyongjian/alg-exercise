
const reverse = (ary, i = 0) => {
  if(i >= ary.length - i - 1) return ary;
  [ary[i], ary[ary.length - i - 1]] = [ary[ary.length - i - 1], ary[i]];
  return reverse(ary, i + 1);
}

// length 的计算变少，函数多加了一个参数
const reverse = (A, i = 0, j = A.length - 1) => {
  if (i >= j) return A;
  [A[i], A[j]] = [A[j], A[i]];
  return reverse(A, ++i, --j);
}


console.log(reverse([1, 2, 3, 4, 5]));

