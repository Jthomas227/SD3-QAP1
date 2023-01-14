// HTTP Global Object

// The http object allows node to to transfer data over http. This module can create a http server that listens to a specific port and gives a response back to the client. 

// Sample code

// Getting module
var http = require('http');

// Creating Server
http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    // Writing to web page
    res.write('HTTP Server');
    // Ending response
    res.end();
}).listen(8080);
