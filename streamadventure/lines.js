var through = require('through2'),
  split = require('split'),
  counter = 1;

process.stdin
  .pipe(split())
  .pipe(through(
    function(line, _, next) {
      if (counter % 2 === 0) {
        this.push(line.toString().toUpperCase() + '\n');
      } else {
        this.push(line.toString().toLowerCase() + '\n');
      }
      counter++;
      next();
    },
    function(done) {
      done();
    }
  ))
  .pipe(process.stdout);
