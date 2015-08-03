var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];
console.log();
var server = http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream(file).pipe(res);

});

server.listen(port);
