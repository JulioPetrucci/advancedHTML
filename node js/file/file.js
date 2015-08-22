var fs = require('fs');//   O 'fs' e o pacote
var http = require('http');
var html;

fs.stat('page.html',function(error, stats){

    console.log('Is file?' + stats.isFile());

    console.log(stats);

});


fs.readFile('./page.html',function(error, buffer){

    html = buffer.toString();

    console.log('*************** file ***************');
    console.log();
    console.log(buffer.toString());
    console.log();
    console.log('*************** End file ***************');

});


http.createServer(function(req, res){

    res.write(html);
    res.end();

}).listen(8080);