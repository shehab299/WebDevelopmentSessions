const express = require("express");

const app = express();

app.use(express.json());

app.post("/", (req, res, next) => {
    console.log(req.body);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});



