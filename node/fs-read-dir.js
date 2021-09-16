const fs = require("fs");

console.log("查看当前目录下所有文件");

fs.readdir('.', (err, files) => {
  files.forEach(function (file) {
    console.log(file)
  })
})