const sc = str => str.split('').filter(i => str.includes(i.toLowerCase()) && str.includes(i.toUpperCase())).join('');

console.log(sc('AaaBb')); // AaaBb

console.log(sc("AabBc")) // "AabB"

console.log(sc("AaaaAaab")) // "AaaaAaa"  (father can have a lot of son)

console.log(sc("aAAAaAAb")) // "aAAAaAA"