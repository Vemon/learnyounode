var combine = require('stream-combiner'),
  split = require('split'),
  through = require('through2'),
  zlib = require('zlib'),
  genres;

module.exports = function() {
  return combine(
    split(),
    through(
      function(buffer, _, next) {
        if (buffer.length !== 0) {
          var json = JSON.parse(buffer);
          if (json.type === 'genre') {
            if (genres) {
              this.push(JSON.stringify(genres) + '\n');
            }
            genres = {
              'name': json.name,
              'books': []
            };
          } else if (json.type === 'book') {
            genres.books.push(json.name);
          }
        }
        next();
      },
      function(done) {
        if (genres) {
          this.push(JSON.stringify(genres) + '\n');
        }
        done();
      }
    ),
    zlib.createGzip()
  );
};
