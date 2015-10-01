function reduction(arr, fn, init) {
	if (!arr.length) {
		return init;
	}
	fn(init, arr[0], 0, arr);
	return reduction(arr.slice(1), fn, init);
}

module.exports = function(arr, fn, init) {
	return reduction(arr, fn, init);
};
