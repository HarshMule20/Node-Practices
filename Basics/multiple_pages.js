var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    console.log(q);
    var page_file = '.' + q.pathname;
    fs.readFile(page_file, function(err, data){
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("<h1>404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
               })
    
}).listen(8080);