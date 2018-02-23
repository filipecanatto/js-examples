var fs = require("fs");
Book = require('../domain/book');

books = [];


var loadBooks = function(){

	fs.readFile('./data/books_old.csv', 'utf8', function(err, csv){
		if (err){
			console.log('error');
			console.log(err);
			return;
		}
		// csv is a string
		console.log(csv);

		var lines = csv.split('\n');	
		console.log(lines);
		lines.forEach(function(line){
			var properties = line.split(',');
			console.log(properties);
			var book = new Book(properties[0], properties[1], properties[2], properties[3]);
			console.log(book.author);
			books.push(book)
		});
	});

};

loadBooks();


module.exports = books;

