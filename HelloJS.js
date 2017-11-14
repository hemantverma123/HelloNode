var dt = require('./myfirstmodule');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("The date and time are currently: " );
	res.end('Hello World from Hemant!');
	console.log("Hello Node from Eclipse!!");
}).listen(8080);