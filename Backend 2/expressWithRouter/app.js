const express = require("express");
const productsApp = require("./routes/productsApp");
const messagesApp = require("./routes/messagesApp");

const app = express();

app.use(express.json());

app.use(productsApp);
app.use(messagesApp);

app.get("/", (req, res) => {
    // send home page
});

app.listen(3000);

