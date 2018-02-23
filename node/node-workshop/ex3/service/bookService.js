var books = require('../data/books');

var showBooksByTitle = function (i_title) {

	
	var findedBooks = books.filter(function (book) {
		
	  return book.title.indexOf(i_title) > -1;
	});
	if (findedBooks.length === 0) {
		console.log("None book was finded!");
		return;
	}

	findedBooks.forEach(function(book){
		console.log(book);
	});
};

module.exports = {
	showBooksByTitle: showBooksByTitle
};