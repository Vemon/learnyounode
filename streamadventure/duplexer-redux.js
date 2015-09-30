var duplexer = require('duplexer'),
  through = require('through2').obj;

module.exports = function(counter) {
  var counts = {},
    input = through(
      function(buffer, _, next) {
        counts[buffer.country] = (counts[buffer.country] || 0) + 1;
        next();
      },
      function(done) {
        counter.setCounts(counts);
        done();
      }
    );

  return duplexer(input, counter);
};
