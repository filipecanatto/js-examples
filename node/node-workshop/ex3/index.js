var bookService = require('./service/bookService');
var keyboard = require('./infra/keyboard.js');

keyboard.onKeyStroke(function (val) {
	if (val === '/q') process.exit();
	console.log("searching ...");
	setTimeout(function () {
		bookService.showBooksByTitle(val);
		console.log("\nlisteing - input a value");
	}, 1000);
});