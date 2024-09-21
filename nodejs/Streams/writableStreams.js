const fs = require('fs');


// Say you will create a create a 10 GB file and you will populate it with 0;
// 0 is a char and it takes 1 byte of memory. So, you will have to write 10^10 bytes to the file.
// If you use the following code, it will take a lot of time to write the file:


for(let i = 0; i < 10e10; i++) {
    fs.appendFileSync('bigFile.txt', '0'); 
}

// This code will take forever to write the file.
// Is it because of synchronous nature of the code?


// No, it is because of the way we are writing the file. We are writing the file byte by byte.
// This is a very inefficient way of writing a file.
// What about creating a big buffer and writing to the buffer and then writing the buffer to the file?

// but how big? 

// 10 GB?  my pc is 8 GB. I can't create a buffer of 10 GB.
// 1 GB? My memory is precious. I can't create a buffer of 1 GB.

// What about 100 MB? I can create a buffer of 100 MB.


const buffer = Buffer.alloc(100 * 1024 * 1024, '0');

for(let i = 0; i < 100; i++) {
    fs.appendFileSync('bigFile.txt', buffer); 
}


// Actually that what writable streams are all about
// We have a drain that we want to write to.
// We will create a writable stream for this drain and write to the stream 
// The stream will take care of writing to the file in an efficient way.
// The stream is internally using buffer to write to the file.

// Let's see how we can use writable streams to write to a file in an efficient way.

const stream = fs.createWriteStream('bigFile.txt');

for(let i = 0; i < 10e10; i++) {
    stream.write('0');
}

stream.end();

// Writable streams are one kind of streams. There are other kinds of streams as well.
// You can implement your own streams but we will mostly consume the streams that are provided by Node.js.

// Other Example Of Write Stream

const server = require('http').createServer();

server.on('request', (req, res) => {

    // res is a writable stream
    // So if you have a huge file in memory to send to the client, you can use a writable stream to send the file to the client.

    res.write('Hello\n');
});

server.listen(3000);



