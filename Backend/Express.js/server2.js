const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    console.log("Request received");
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res, next) => {
    console.log("Request received");
    res.status(200).sendFile(__dirname + "/public/about.html");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});
