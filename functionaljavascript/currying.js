module.exports = function(fn, n) {
  var args = [];
  var num = n ? n : fn.length;
  console.log(n, num);
  console.log('fn', fn);
  var curryN = function(param) {
    args.push(param);
    console.log(num);
    if (--num === 0) {
      return fn.apply(this, args);
    } else {
      return curryN;
    }
  };

  return curryN;
};
