var bookService = require('./service/bookService');
var booksHttp = require('./http/booksHttp');
var keyboard = require('./infra/keyboard.js');

var httpMode = process.argv.some(function (arg) {
	return arg === '-http';
});

if (httpMode) {
	console.log("Http Mode");
	booksHttp.listen(3000);
	console.log("Server running");
	return;
}

console.log("Keyboard Mode");
keyboard.onKeyStroke(function (line) {
	if (line === '/q') process.exit();
	setTimeout(function () {
		bookService.showBooksByTitle(line);
	}, 1000);
});