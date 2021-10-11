/*
# 按奇偶排序数组II
给定一个非负整数数组`A`，`A`中一半整数是奇数，一半整数是偶数。
对数组进行排序，以便当`A[i]`为奇数时，`i`也是奇数；当`A[i]`为偶数时，`i`也是偶数。
你可以返回任何满足上述条件的数组作为答案。

## 示例

```
输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
```

*/

function sort () {
  let arr = [4, 2, 5, 7]
  let arr1 = []
  let arr2 = []
  arr.forEach(item => {
    if (item % 2 === 0) {
      arr1.push(item)
    } else {
      arr2.push(item)
    }
  })
  let newArr = []
  for (let i = 0; i < arr.length * 0.5; i++) {
    newArr[2 * i] = arr1[i]
    newArr[2 * i + 1] = arr2[i]
  }
  console.log(newArr)
  return newArr
}
sort()

/*
示例解法

*/
var sortArrayByParityII = function (arr) {
  let odd = []
  let even = []
  arr.forEach(v => {
    if (v & 1 === 1) odd.push(v)
    else even.push(v)
  })
  let target = arr.map((v, i) => {
    if (i & 1 === 1) return odd[~~(i / 2)]
    else return even[i / 2]
  })
  console.log(target)
  return target
}

sortArrayByParityII([4, 2, 5, 7])
