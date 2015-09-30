module.exports = function(validUsers) {
	return function(users) {
		return users.every(function(item) {
			return validUsers.some(function(value) {
				return value.id === item.id;
			});
		});
	};
};
