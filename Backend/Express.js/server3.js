const express = require("express");

const app = express();

app.post("/", (req, res, next) => {

    let body = "";

    req.on("data", (data) => {
        body += data;
    });

    req.on("end", () => {
        console.log("Data received: " + body);
        res.status(200).send("Data received successfully");
    });

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});



