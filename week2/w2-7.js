// 普通插入排序

// 有序数组中插入元素。从 
const insert = (arr, i, x) => {
  let p = i - 1; // p 是下一个需要比较的元素
  // p+1 是空位，也就是预留位置
  while(p >= 0 && arr[p] > x) {
    arr[p + 1] = arr[p];
    p--;
  }
  arr[p + 1] = x;
}


// 1. 排序方法
const sortInsert = arr => {
  for(let i = 0; i < arr.length; i++) {
    insert(arr, i, arr[i]);
  }
  return arr;
}

// --------------------

// 二分查找插入位置的方法
const brsearch1 = (start, end, A, x) => {
  let guess = Math.floor((start + end)/2);
  if(start >= end) {
    if(A[guess] < x) return end + 1;
    return start;
  }

  if(A[guess] === x) return guess
  else if(A[guess] > x) return brsearch1(start, guess - 1, A, x);
  else return brsearch1(guess + 1, end, A, x);

};


const insert2 = (arr, i, x) => {
  let idx = brsearch1(0, i, arr, x);
  let p = i - 1;

  while(p >= idx) {
    arr[p + 1] = arr[p];
    p--;
  }
  arr[p + 1] = x;
}

// 使用二分查找的 sort
const sortInsert2 = arr => {
  for(let i = 0; i < arr.length; i++) {
    insert2(arr, i, arr[i]);
  }
  return arr;
}


// splice 的
const sortInsert3 = arr => {
  for(let i = 0; i < arr.length; i++) {
    let idx = brsearch1(0, i, arr, arr[i]);
    arr.splice(idx, 0, arr[i]);
    arr.splice(i + 1, 1);
  }
  return arr;
}
const ary = [3, 5, 6, 1, 2, 0];
// console.log(sortInsert(ary));
// console.log(sortInsert2(ary));
console.log(sortInsert3(ary));


// 经过优化插入排序的复杂度仍然是O(n^2)，速度提升并不明显。