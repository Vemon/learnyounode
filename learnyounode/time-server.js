var net = require('net'),
  strftime = require('strftime');

net.createServer(function(socket) {
  var date = new Date(),
    strDate = strftime('%Y-%m-%d %H:%M', date);

  socket.end(strDate);
})
.listen(process.argv[2]);
