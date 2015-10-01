module.exports = function() {
	return (function isDuck(objs) {
		if (!objs.length) {
			return 0;
		}
		if (Object.prototype.hasOwnProperty.call(objs[0], 'quack')) {
			return 1 + isDuck(Array.prototype.slice.call(objs, 1));
		} else {
			return isDuck(Array.prototype.slice.call(objs, 1));
		}
	})(arguments);
};
