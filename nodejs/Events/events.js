function registerUser(){
    
    // take input from the user
    // validate the input

    // database logic
    console.log("Added user to the database");

    // email logic
    console.log("Sent an email to the user");

    // logging logic
    console.log("Logged the registration event");

    console.log("User registered successfully");
}

// this breaks the single responsibility principle
// Also breaks the open/closed principle

////////////////////////////////////////////////

const EventEmitter = require('events');


const subject = new EventEmitter();

subject.on("register", () => { // this is the observer
    // database logic
    console.log("Added user to the database");
});

subject.on("register", () => { // this is the observer
    // email logic
    console.log("Sent an email to the user");
});

subject.on("register", () => { // this is the observer
    // logging logic
    console.log("Logged the registration event");
});


function registerUserObserver(){
    
    // take input from the user
    // validate the input

    subject.emit("register");
    console.log("User registered successfully");
}

//////////////////////////////////////////////

registerUser();
registerUserObserver();




//////////////////////////////////////////////


// Examples on how core modules use event emitters

const http = require("node:http");

const server = http.createServer();

server.on("request", (req, res) => {
    console.log("Request received");    
    res.end("Hello World");
});

server.on("close", () => {
    console.log("Server closed");
});

server.listen(3000);

