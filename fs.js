// fs global object

// http to create a webserver and load a html file.

// The fs module in node allows you to work with the file system on your computer. this module allows you to read, create, update, and rename files .

// Sample code 

// getting http module
var http = require('http');

// getting fs module
var fs = require('fs');

// creating web server
http.createServer( (req, res) => {
    
    // Reading  html file
    fs.readFile('fs.html', (err, data) => {

        // Giving file type
        res.writeHead(200, {'Content-Type': 'text/html'});

        // Showing html file on webpage
        res.write(data);
        return res.end();
    })
}).listen(8080);