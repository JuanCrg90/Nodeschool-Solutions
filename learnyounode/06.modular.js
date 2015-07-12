var filter = require('./filter.js');
var pathArg = process.argv[2];
var ext = process.argv[3];

filter(pathArg,ext,function(error,data){
    if(error){
        return console.log(error);
    }
    else{
	data.forEach(function(element){
		console.log(element);
	});
    }

});

