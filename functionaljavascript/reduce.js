module.exports = function(inputWords) {
	return inputWords.reduce(function(previousValue, currentValue) {
		if (!previousValue.hasOwnProperty(currentValue)) {
			previousValue[currentValue] = 1;
		} else {
			previousValue[currentValue]++;
		}
		return previousValue;
	}, {});
};
