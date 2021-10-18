let arr = [1, [2, 3, [4, 5]]];

const flattern = (arr, res = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattern(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }
  return res
}

console.log(flattern(arr))

function flattern1(arr) {
  return arr.reduce((pre, next) => {
    return pre.concat(Array.isArray(next) ? flattern1(next) : next)
  }, [])
}

console.log(flattern1(arr))


function flattern2(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flattern2(arr))

function flattern3(arr) {
  return arr.toString().split(',').map(function (item) {
    return +item
  })
}
console.log(flattern3(arr))