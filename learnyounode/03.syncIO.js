var fs = require('fs');

var filename = process.argv[2];
var buf = fs.readFileSync(filename).toString();

console.log(buf.match(/\n/g).length);
