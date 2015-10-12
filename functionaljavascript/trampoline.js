function repeat(operation, num) {
  num--;
  operation();
  return num > 0;
}

function trampoline(fn) {
  while(fn()) {}
}

module.exports = function(operation, num) {
  return trampoline(function() {
    repeat(operation, num);
  });
};
