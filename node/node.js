const fs = require('fs');

fs.open('./file.txt', 'r', (err, fd) => {
  if (err) {
    throw err;
  }
  fs.fstat(fd, (err, stat) => {
    if (err) {
      throw err;
    }
    fs.close(fd, (err) => {
      if (err) {
        throw err;
      }
    })
  })
  var buffer = Buffer.alloc(255);
  fs.read(fd, buffer, 0, 255, 0, (err, bytesRead, buffer) => {
    if (err) {
      throw err;
    }
    console.log(bytesRead, buffer.slice(0, bytesRead).toString())
  })
})