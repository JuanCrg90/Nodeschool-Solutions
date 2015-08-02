var net = require('net');
var moment = require('moment');
var port = process.argv[2];
var server = net.createServer(function(socket){
  //"AAAA-MM-DD hh:mm"
  socket.end(moment().format('YYYY-MM-DD HH:mm'));
  
});

server.listen(port);
