var fs = require('fs');
var path = require('path');
var gzip = require('zlib').createGzip();
  
var inp = fs.createReadStream(path.join(__dirname, '../data/books.csv'));
var out = fs.createWriteStream(path.join(__dirname, '../data/books.zip'));
inp.pipe(gzip).pipe(out);