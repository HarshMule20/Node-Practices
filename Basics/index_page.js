var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var page_file = "." + q.pathname;
    if (page_file == './'){
        page_file = "./app.html"; 
    } 
    fs.readFile(page_file, function(err, data){
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080)
console.log("Listening to the port 8080.....")