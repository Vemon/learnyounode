var http = require('http'),
  fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(process.argv[3]).pipe(response);
})
.listen(Number(process.argv[2]));
