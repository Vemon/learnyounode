module.exports = function(target, method) {
  var spy = {
    count: 0
  };

  var currentMethod = target[method];

  var newMethod = function() {
    spy.count++;
    currentMethod.apply(target, arguments);
  };

  target[method] = newMethod;

  return spy;
};
