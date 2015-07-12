var fs = require('fs');
var path = require('path');
var pathArg = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(pathArg,function(error,data){
    if(error){
        console.log(error)
    }
    else{

        data.forEach(function(element){
            if(path.extname(element) === ext){
                console.log(element);
            }
        });

    }
});
