var http = require('http'),
  counter = 0,
  handle1 = '',
  handle2 = '',
  handle3 = '';

http.get(process.argv[2], function(response) {
  handle1 = handler(response);
});

http.get(process.argv[3], function(response) {
  handle2 = handler(response);
});

http.get(process.argv[4], function(response) {
  handle3 = handler(response);
});

var handler = function (response) {
  var text = '';

  response.setEncoding('utf8');
  response.on('data', function(data) {
    text += data;
  });
  response.on('error', console.error);
  response.on('end', function() {
    print();
  });

  return {
    getText: function() {
      return text;
    }
  };
};

var print = function() {
  counter++;

  if (counter === 3) {
    console.log(handle1.getText());
    console.log(handle2.getText());
    console.log(handle3.getText());
  }
};
