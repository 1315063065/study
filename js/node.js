let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(function () {
    console.log(i)
  })
}
arr[2]()
arr[3]()