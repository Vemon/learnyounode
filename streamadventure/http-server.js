var http = require('http'),
  through = require('through2');

http.createServer(function(request, response) {
  if (request.method === 'POST') {
    request.pipe(through(function(buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
    }))
    .pipe(response);
  }
})
.listen(process.argv[2]);
