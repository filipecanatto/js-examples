// this function listen the keyboard buffer
var onKeyStroke = function (callback) {
	console.log("listeing - input a value");
	process.stdin.on('readable', function () {
		var data = process.stdin.read();
		var line = (data) ? data.toString() : '';
		line = line.replace(/\n/, '');
		if (line) callback(line);
	});
};

module.exports = {
	onKeyStroke: onKeyStroke
};