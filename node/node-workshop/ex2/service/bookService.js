books = require("../data/books");

var listBooks = function (){
	books.forEach(function(book){
	console.log(book);
});

}

module.exports = {listBooks : listBooks};