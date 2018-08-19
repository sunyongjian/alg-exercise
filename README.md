## 百日算法
每天一个算法题

## week1
### w1-1
观察下面的规律，写一个函数accum
```
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
```
[answer](https://github.com/sunyongjian/alg-exercise/blob/master/week1/w1-1.js)
### w1-2

写一个函数求数组的最大值和最小值
```
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```
[answer](https://github.com/sunyongjian/alg-exercise/blob/master/week1/w1-2.js)
### w1-3
写一个函数判断字符串中x的数量和o的数量是否相等（忽略大小写）：

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // 没有x也没有o，所有相等，都为0
XO("zzoo") => false
```

[answer](https://github.com/sunyongjian/alg-exercise/blob/master/week1/w1-3.js)


### w1-4
写一个函数判断一个数字是不是某个整数的平方。
```
is_square (-1) # => false
is_square   0 # => true
is_square   3 # => false
is_square   4 # => true
is_square  25 # => true
is_square  26 # => false
```

[answer](https://github.com/sunyongjian/alg-exercise/blob/master/week1/w1-4.js)


### w1-5

写一个函数，将字符串除了最后的四位，其他都变成#
```
maskify("4556364607935616") == "############5616"
maskify("64607935616")      == "#######5616"
maskify("1")                == "1"
maskify("")                 == ""
maskify("Skippy")           == "##ippy"

maskify("Nananananananananananananananana Batman!") == "####################################man!"
```

[answer](https://github.com/sunyongjian/alg-exercise/blob/master/week1/w1-5.js)


### w1-6
下面三角形的数列：
```
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```
写一个函数，给定行的序号，然后求和：
```
rowSumOddNumbers(1) // 1
rowSumOddNumbers(2) // 3+5=8
rowSumOddNumbers(3) // 7+9+11=27
rowSumOddNumbers(42) // 74088
```
[answer](https://github.com/sunyongjian/alg-exercise/blob/master/week1/w1-6.js)


### w1-7
将数字的每一位求平方，然后组合成新的数字（注意：请返回一个数字）
```
squareDigits(9119) // 811181
```

[answer](https://github.com/sunyongjian/alg-exercise/blob/master/week1/w1-7.js)
