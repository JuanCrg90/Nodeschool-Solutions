var concatStream = require('concat-stream');
var http = require('http');
var urls = process.argv.slice(2);

var results = [];
var count = 0;

urls.forEach(function(url,i){
  http.get(url,function(response){
    response.setEncoding('utf-8');
    response.pipe(concatStream(function(data){
      results[i] = data;
      count++;

      if(count === urls.length){
        results.forEach(function(result){
          console.log(result);
        });
      }

    }));
  });
});
