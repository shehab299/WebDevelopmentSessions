const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST ,() => {
    console.log(`App running on port ${PORT}`)
});