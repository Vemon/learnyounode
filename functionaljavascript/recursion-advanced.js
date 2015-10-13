module.exports = function(tree) {
  return (function retrieveDependencies(arr, tree) {
    if (tree && tree.hasOwnProperty('dependencies')) {
      var keys = Object.keys(tree.dependencies);
      keys.reduce(function(previousValue, currentValue, index, array) {
        var current = tree.dependencies[currentValue];
        var info = currentValue + '@' + current.version;
        if (previousValue.indexOf(info) < 0) {
          previousValue.push(info);
        }
        if (current.hasOwnProperty('dependencies')) {
          retrieveDependencies(previousValue, current);
        }
        return previousValue;
      }, arr);
    }
    return arr.sort();
  })([], tree);
};
