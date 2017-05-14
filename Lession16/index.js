var fs = require('fs');
var writeStream = fs.createWriteStream('note.txt');
writeStream.write("Hello MyName is ThuongDQ");
writeStream.write("Hello MyName is Tun");
writeStream.end()