const http = require('http');
const fs = require('fs');


const server = http.createServer();

server.on('request', (req, res) => {

    // we will serve different stuff based on the path and method
    if(req.method == "GET" && req.url == "/")
    {
        // serve the home page
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;

        const readStream = fs.createReadStream('./public/index.html');
        readStream.pipe(res);
    }
    else if(req.method == "GET" && req.url == "/about")
    {
        // serve the about page
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;

        const readStream = fs.createReadStream('./public/about.html');
        readStream.pipe(res);
    }
    else if(req.method == "GET" && isCss(req.url) && existCss(req.url))
    {
        // serve the css file
        res.setHeader('Content-Type', 'text/css');
        res.statusCode = 200;

        const readStream = fs.createReadStream(`./public/css/${req.url}`);
        readStream.pipe(res);
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;

        const readStream = fs.createReadStream('./public/404.html');
        readStream.pipe(res);
    }


    console.log(req.method + " : " + req.url);
});



server.listen(3000, function cb() {
    console.log('Server started on port 3000');
});


function isCss(url) {
    return url.endsWith('.css');
}

function existCss(url) {
    return fs.existsSync(`./public/css/${url}`);
};