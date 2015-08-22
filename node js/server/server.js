var  http = require('http');

var server = http.createServer(function(rquest, response){
    response.writeHead(200);
    response.write('<h1>Hello from NodeJS</h1>');
    response.end()
});

server.listen(8080);
console.log('server running at http://127.0.0.1:8080/')






/*
http://127.0.0.1:8080/
    */