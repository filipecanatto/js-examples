var Book = function (title, author, isbn, pages, year, editora, idioma, assunto) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
	this.pages = pages;
	this.year = year;
	this.editora = editora;
	this.idioma = idioma;
	this.assunto = assunto;
};

module.exports = Book;