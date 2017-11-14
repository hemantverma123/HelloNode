var dt = require('./myfirstmodule');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("The date and time are currently: " + dt.myDateTime());
	res.end('Hello World from Hemant!');
}).listen(8080);