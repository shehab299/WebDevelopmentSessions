const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    const p = path.join(__dirname, "views" ,"home.html");
    res.sendFile(p);
});

app.listen(3000);