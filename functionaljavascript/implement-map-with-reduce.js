module.exports = function(arr, func) {
  return arr.reduce(function(previousValue, currentValue, index, array) {
    previousValue.push(func(currentValue));
    return previousValue;
  }, []);
};
