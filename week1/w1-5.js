// 写一个函数，将字符串除了最后的四位，其他都变成#
// ```
// maskify("4556364607935616") == "############5616"
// maskify("64607935616")      == "#######5616"
// maskify("1")                == "1"
// maskify("")                 == ""
// maskify("Skippy")           == "##ippy"

// maskify("Nananananananananananananananana Batman!") == "####################################man!"
// ```

const maskify1 = str => str.replace(/.(?=.{4})/g, "#");

const maskify2 = str => {
  return str.split('').map((item, index) => {
    if(index < str.length - 4) {
      return "#";
    }
    return item;
  }).join('');
}

const maskify3 = str => str.replace(/(.*)(.{4})/, (result, $1, $2) => "#".repeat($1.length) + $2);

console.log(maskify1("4556364607935616"))
console.log(maskify1("64607935616"))
console.log(maskify1("1"))
console.log(maskify1(""))
console.log(maskify1("Skippy"))
console.log(maskify1("Nananananananananananananananana Batman!"))

console.log(maskify2("4556364607935616"))
console.log(maskify2("64607935616"))
console.log(maskify2("1"))
console.log(maskify2(""))
console.log(maskify2("Skippy"))
console.log(maskify2("Nananananananananananananananana Batman!"))
