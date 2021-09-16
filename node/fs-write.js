const fs = require('fs');

fs.open('write-data.txt', 'w', (err, fd) => {
  if (err) {
    throw err;
  }

  let buffer = Buffer.from("《Node.js企业级应用开发实战》");
  fs.write(fd, buffer, 0, buffer.length, 0, (err, bytesWritten, buffer) => {
    if (err) {
      throw err;
    }
    console.log(bytesWritten, buffer.slice(0, bytesWritten).toString())
  })
})