#### 数组扁平化
- 数组扁平化是指将一个多维数组变为一维数组
- [1,[2,3,[4,5]]] ----> [1,2,3,4,5]
- concat()方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组

1. flat 默认只会拉一层
2. 递归处理
```js
  let arr = [1, [2, 3, [4, 5]]];

  function flattern(arr, result = []) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattern(arr[i], result)
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

console.log(flattern(arr))
```
3. reduce 写法
```js
  function flattern1(arr) {
    return arr.reduce((pre, next) => {
      return pre.concat(Array.isArray(next) ? flattern1(next) : next)
    }, [])
  }
```
4. ... 扩展运算符
```js
function flattern2(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

```
5. toString
```js
function flattern3(arr) {
  return arr.toString().split(',').map(function (item) {
    return +item
  })
}

```