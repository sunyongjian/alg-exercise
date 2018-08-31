// 最普通的，就是遍历，找出比左右两个元素都大的，最坏的情况就是已排序列或者 repeat 数列，复杂度为 o(n)
const peak = arr => {
  for(let i = 1; i < arr.length - 1;  i++){
    if(arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
      return i;
    }
  }
  return arr.length <= 1 || arr[0] > arr[1] ? 0 : arr.length - 1;
}

console.log(peak([1,2,3,4,5,6]))  // 5(6所在的位置）

console.log(peak([1,3,5,7,4,2])) // 3（7所在的位置）

console.log(peak([1,2,3,2,7,6])) // 2(3所在的位置)

console.log(peak([1,1,1,1,1,1])) // 任何一个都是峰值
console.log(peak([2, 1])) // 任何一个都是峰值


const peak2 = arr => {
  let guess,
      start = 0,
      end = arr.length - 1;
  while(start <= end) {
    guess = Math.floor((start + end)/2);
    if((guess === arr.length -1 || arr[guess] >= arr[guess + 1]) && (guess === 0 || arr[guess] >= arr[guess - 1])) return guess;
    if(arr[guess] < arr[guess - 1]) {
      end = guess - 1;
    }
    if(arr[guess] < arr[guess + 1]) {
      start = guess + 1;
    }
  }
  return guess;
}


console.log(peak2([1,2,3,4,5,6]))  // 5(6所在的位置）

console.log(peak2([1,3,5,7,4,2])) // 3（7所在的位置）

console.log(peak2([1,2,3,2,7,6])) // 2(3所在的位置)

console.log(peak2([1,1,1,1,1,1])) // 任何一个都是峰值