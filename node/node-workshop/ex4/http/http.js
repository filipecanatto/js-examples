var http = require('http');
var bookService = require('../service/bookService');
var url = require('url');
  
var server = http.createServer(function (req, res) {
	var title = url.parse(req.url, true).query.title;
  	res.writeHead(200, {
    	'Content-Type': 'text/html;charset=UTF-8'
  	});
  	res.write("<h1>book</h1>")
  	var book = bookService.getbook(title);
	book.forEach(function (book) {
		res.write("<h4>" + book.title + "</h4>");
		res.write("<h1>" + book.author + "</h1><br/>");
	});
	res.end();
});
module.exports = server;