const fs = require("node:fs");
const fsPromises = require("node:fs/promises");

// Synchroneous way of reading a file

const data = fs.readFileSync("hello.txt");

console.log(data); 

// A buffer is a way to store binary data
// We can interpret this buffer as a string with specific encoding by calling the toString method on it

console.log(data.toString("utf-8"));
console.log(data.toString("ascii"));


// // you can specify the encoding of the file you are reading as the second argument of the readFileSync method

const data2 = fs.readFileSync("hello.txt", "utf-8");
console.log(data2);


// // Asynchronous way of reading a file (Callback API)
// // Callbacks are used to handle the result of the operation

fs.readFile("hello.txt", (err, data) => {

    if(!err){
        console.log(data.toString("utf-8"));
        return;
    }

    console.log(err);
});

function readFilePromise(filename, callback){

    return new Promise(resolve, reject){

    }
}

// // Asynchronous way of reading a file (Promise API)

// fsPromises.readFile("hello.txt", "utf-8")
//     .then((data) => {console.log(data);})
//     .catch((err) => {console.log(err);});


// //////////////////////////////////////////////////////////////


// // Writing to a file

// // Synchronous way of writing to a file
// // encoding also matter because what if we want to map h using a different encoding


// fs.writeFileSync("hello.txt", "Hello World");


// // Asynchronous way of writing to a file (Callback API)
// fs.writeFile("hello.txt", "Hello World", (err) => {

//     if(!err){
//         console.log("File written successfully");
//         return;
//     }

//     console.log(err);
// });

// // Asynchronous way of writing to a file (Promise API)

// fsPromises.writeFile("hello.txt", "Hello World")
//     .then(() => {console.log("File written successfully");})
//     .catch((err) => {console.log(err);});


