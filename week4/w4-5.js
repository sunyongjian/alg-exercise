// 写一个函数判断字符串是否为回文（忽略大小写和非字母数字字符）
// 例如：
// is_palindrome("level") // true
// is_palindrome("A man, a plan, a canal: Panama") // true
// is_palindrome("hello") // false

const is_palindrome = str => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = normalized.length - 1;

  while (left < right) {
    if (normalized[left] !== normalized[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};

console.log(is_palindrome("level")); // true
console.log(is_palindrome("A man, a plan, a canal: Panama")); // true
console.log(is_palindrome("hello")); // false
