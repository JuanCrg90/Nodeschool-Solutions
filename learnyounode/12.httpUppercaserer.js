var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(req,res) {
  if(req.method === 'POST'){
    req.on('data',function(chunk){
      res.write(chunk.toString().toUpperCase());
    });

    req.on('end',function(){res.end();});
  }
});

server.listen(port);
