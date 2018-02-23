// builder function, it returns an object
var Book = function (title, author, isbn, pages, year, editor, subject){
	this.title = title;
	this.author = author;
	this.isbn = isbn;
	this.pages = pages;
	this.year = year;
	this.editor = editor;
	this.subject = subject;	
};

module.exports = Book;