var fs = require('fs');
var path = require('path');

var filter = function(pathArg,ext,callback) {

    var fileList = [];

    fs.readdir(pathArg,function(error,data) {
        if(error) {
            return callback(error);
        }
        else {
            data.forEach(function(element) {
                if(path.extname(element) === '.' + ext) {
                    fileList.push(element); 
                }
            });
        }
        return callback(null,fileList);
    });
}

module.exports = filter;
