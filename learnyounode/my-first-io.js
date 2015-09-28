var fs = require('fs'),
	path = process.argv[2],
	data = fs.readFileSync(path),
	texts = data.toString(),
	array = texts.split('\n'),
	count = array.length - 1;

console.log(count);
