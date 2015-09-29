var spawn = require('child_process').spawn,
  duplexer = require('duplexer2');

module.exports = function(counter) {
  return duplexer(counter, process.stdout);
};
