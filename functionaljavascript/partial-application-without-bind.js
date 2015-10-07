module.exports = function(namespace) {
  return function() {
    var arr = Array.prototype.slice.call(arguments);
    arr.unshift(namespace);
    console.log.apply(console, arr);
  };
};
