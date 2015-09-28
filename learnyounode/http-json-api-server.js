var http = require('http'),
  url = require('url');

http.createServer(function(request, response) {
  response.writeHead(200, {'content-type': 'application/json'});
  var requestInfo = url.parse(request.url, true),
    date = new Date(requestInfo.query.iso),
    data = {};

  if (requestInfo.pathname === '/api/parsetime') {
    data = {
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    };
  } else if (requestInfo.pathname === '/api/unixtime') {
    data = {
      'unixtime': date.getTime()
    };
  }

  response.end(JSON.stringify(data));
})
.listen(process.argv[2]);
