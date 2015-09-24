/**
 * Baby Steps
 */
// var total = 0;
// for (var i = 2; i < process.argv.length; i++) {
// 	total += +process.argv[i];
// }
// console.log(total);

/**
 * Sync I/O
 */
// var fs = require('fs')
// var file = process.argv[2]
// var content = fs.readFileSync(file)
// var total = content.toString().split('\n').length - 1
// console.log(total)

/**
 * Async I/O
 */
// var fs = require('fs')
// var file = process.argv[2]
// fs.readFile(file, function(err, data) {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		var content = data.toString().split('\n').length - 1
// 		console.log(content)
// 	}
// })

/**
 * Filter
 */
// var fs = require('fs');
// var path = require('path')
// var dir = process.argv[2]
// var ext = '.' + process.argv[3]
// fs.readdir(dir, function(err, list) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		for (var i = 0, size = list.length; i < size; i++) {
// 			var file = list[i];
// 			if (path.extname(file) === ext) {
// 				console.log(file);
// 			}
// 		}
// 	}
// })

/**
 * Module
 */
// var filter = require('./filter')
// filter(process.argv[2], process.argv[3], function(err, data) {
// 	if (err) {
// 		return console.log(err)
// 	}
// 	for (var i = 0, size = data.length; i < size; i++) {
// 		console.log(data[i])
// 	}
// })

/**
 * HTTP request
 */
var http = require('http')
http.get(process.argv[2], function(response) {
	response.setEncoding('utf8')
		.on('data', console.log)
		.on('error', console.error)
})
