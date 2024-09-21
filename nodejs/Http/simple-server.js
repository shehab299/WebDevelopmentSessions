const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {

    // METHOD
    console.log(req.method);

    // PATH
    console.log(req.url);

    // HEADERS
    console.log(req.headers);

    // BODY ( need little talk)

    req.on('data', (chunk) => {
        console.log(chunk.toString());
    });

    req.on('end', () => {
        res.end('Request received');
    });

});


server.listen(3000);