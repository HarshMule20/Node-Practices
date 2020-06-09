var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var page_name = "." + q.pathname;
    if (page_name == './'){
        page_name = './app';
    }

    page_name = page_name + '.html';
    console.log(page_name);
    fs.readFile(page_name, function(err, data){
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("<h1>404 Not Found</h1>")
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);

console.log("Listening to port 8080....");