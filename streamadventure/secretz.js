var crypto = require('crypto'),
  zlib = require('zlib'),
  tar = require('tar'),
  through = require('through');

process.stdin
  .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
  .pipe(zlib.createGunzip())
  .pipe(tar.Parse().on('entry', function(entry) {
    if (entry.type === 'File') {
      entry.pipe(crypto.createHash('md5', {encoding: 'hex'}))
        .pipe(through(function(buffer, _, next) {
          this.push(buffer.toString() + ' ' + entry.path + '\n');
        }))
        .pipe(process.stdout);
    }
  }));
