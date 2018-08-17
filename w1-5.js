// 写一个函数，将字符串除了最后的四位，其他都变成#
// ```
// maskify("4556364607935616") == "############5616"
// maskify("64607935616")      == "#######5616"
// maskify("1")                == "1"
// maskify("")                 == ""
// maskify("Skippy")           == "##ippy"

// maskify("Nananananananananananananananana Batman!") == "####################################man!"
// ```

const maskify = str => {
  return str.split('').map((item, index) => {
    if(index < str.length - 4) {
      return "#";
    }
    return item;
  }).join('');
}


const maskify2 = str => str.replace(/(.*)(.{4})/, (result, $1, $2) => "#".repeat($1.length) + $2);

console.log(maskify("4556364607935616"))
console.log(maskify("64607935616"))
console.log(maskify("1"))
console.log(maskify(""))
console.log(maskify("Skippy"))
console.log(maskify("Nananananananananananananananana Batman!"))

console.log(maskify2("4556364607935616"))
console.log(maskify2("64607935616"))
console.log(maskify2("1"))
console.log(maskify2(""))
console.log(maskify2("Skippy"))
console.log(maskify2("Nananananananananananananananana Batman!"))
