// Let's play with middleware in Express.js
// Let's use a thirdparty middleware 

const express = require("express");
const morgan = require("morgan");

const app = express();


app.post("/", (req, res, next) => {
    res.send("Hello World");
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});




