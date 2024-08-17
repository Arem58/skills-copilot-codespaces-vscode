// Create web server
// 1. Create a web server
// 2. Handle a request
// 3. Send a response

// Load the http module
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a web server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // 3. Send a response
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
    } else {
        // 3. Send a response
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Page not found');
    }
});

// Start the server
server.listen(3000, '');