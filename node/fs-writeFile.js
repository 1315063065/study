const fs = require('fs');

let data = "《Node.js企业级应用开发实战》";

fs.writeFile('write-date1.txt', data, 'utf-8', (err) => {
  if (err) {
    throw err;
  }
})