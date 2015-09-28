var fs = require('fs'),
  path = require('path');

module.exports = function(name, ext, callback) {
  fs.readdir(name, function(err, data) {
    if (err) {
      callback(err);
      return;
    }
    
    var files = [];
    data.forEach(function(item) {
      if (path.extname(item) === '.' + ext) {
        files.push(item);
      }
    });

    callback(null, files);
  });
};
