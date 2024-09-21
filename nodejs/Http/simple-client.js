const http = require('http');

const agent = new http.Agent({keepAlive: true});

const options = {
    agent: agent,
    hostname: 'localhost',
    port: 3000,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};


const req = http.request(options);

req.on("response", (res) => {
    res.on("data", (chunk) => {
        console.log(chunk.toString());
    });
});

req.write(JSON.stringify({name: 'John Doe'}));
req.end();

