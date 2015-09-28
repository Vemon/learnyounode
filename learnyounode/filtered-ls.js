var fs = require('fs'),
  path = require('path'),
  name = process.argv[2],
  ext = process.argv[3];

fs.readdir(name, function(err, list) {
  if (err) {
    console.log(err);
    return;
  }
  list.forEach(function(item) {
    if (path.extname(item) === '.' + ext) {
      console.log(item);
    }
  });
});
