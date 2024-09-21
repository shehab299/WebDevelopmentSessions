// Let's Say after creating the 10 GB file, you want to send the file to the client.


const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {

    fs.readFile("bigFile.txt", (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    });

});

server.listen(3000);

// This code will read the whole file into memory and then send the file to the client.
// This code will crash my server because my server has only 8 GB of memory and the file is 10 GB.
// So what can we do?
// We can use streams to read the file and also use streams to send the file to the client.

// So there are readable streams and writable streams.

const readStream = fs.createReadStream("bigFile.txt");

// Interestingly the readStream is also an EventEmitter.

readStream.on("data", (chunk) => {
    // process the chunk
    // In our case processing is sending the chunk to the client.
});

readStream.on("end", () => {
    // end of the file reached
    // In our case we will end the response.
});

readStream.on("error", (err) => {
    // error occurred
    // In our case we will send the error to the client.
});



const server2 = http.createServer();

server2.on("request", (req, res) => {

    const readStream = fs.createReadStream("bigFile.txt");

    readStream.on("data", (chunk) => {
        res.write(chunk); // res is a writable stream
    });

    readStream.on("end", () => {
        res.statusCode = 200;
        res.end();
    });

    readStream.on("error", (err) => {
        res.statusCode = 500;
        res.end(err);
    });

});


server2.listen(3001);


// There are other kinds of streams as well. For example, Duplex streams and Transform streams.
// Duplex streams are both readable and writable. 
// Transform streams are a special kind of duplex stream with a processing stage in between the readable and writable parts.





