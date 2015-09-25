var http = require('http');

http.get(process.argv[2], function(response) {
  var sum = 0,
    text = '';

  response.setEncoding('utf8');
  response.on('data', function(data) {
    sum += data.length;
    text += data;
  });
  response.on('error', console.error);
  response.on('end', function() {
    console.log(sum);
    console.log(text);
  });
});
