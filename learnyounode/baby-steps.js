var args = process.argv,
	sum = 0;

for (var i = 2, size = args.length; i < size; i++) {
	sum += +args[i];
}

console.log(sum);
