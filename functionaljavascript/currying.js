module.exports = function(fn, n) {
  var num = n ? n : fn.length;

  return (function curryN(fn, counter, arr) {
    var args = arr.slice(0);
    var num = --counter;

    return function(param) {
      if (num <= 0) {
        return fn.apply(this, args.concat(param));
      } else {
        return curryN(fn, num, args.concat(param));
      }
    };
  })(fn, num, []);
};
