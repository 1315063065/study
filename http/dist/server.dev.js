"use strict";

var http = require('http');

var fs = require('fs');

http.createServer(function (request, response) {
  console.log('request come', request.url);

  if (request.url === '/') {
    var html = fs.readFileSync('test.html', 'utf8');
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.end(html);
  }

  if (request.url === '/script.js') {
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=20000000,no-cache',
      'Last-Modified': '123',
      'Etag': '777'
    });
    response.end('console.log("script loaded twice")');
  }
}).listen(8888);
console.log('server listening on 8888');