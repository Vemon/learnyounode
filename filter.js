var fs = require('fs'),
	path = require('path')

function filter(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {

		if (err) {
			return callback(err)
		}

		data = []

		for (var i = 0, size = list.length; i < size; i++) {
			var file = list[i]

			if (path.extname(file) === '.' + ext) {
				data.push(file)
			}
		}

		callback(null, data)

	})
}

module.exports = filter
