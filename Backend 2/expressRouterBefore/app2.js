const express = require("express");

const app = express();

const productsApp = express.Router();
const messagesApp = express.Router();

productsApp.get("/products", (req, res) => {
    // send products page
});

productsApp.get("products/:id", (req, res) => {
    // send product details page
});

productsApp.post("/products", (req, res) => {
    // add new product
    // reditect to products page
});

productsApp.delete("/products/:id", (req, res) => {
    // delete product
    // reditect to products page
});


messagesApp.get("/messages", (req, res) => {
    // send messages page
});

messagesApp.get("/messages/:id", (req, res) => {
    // send message details page
});

messagesApp.post("/message", (req, res) => {
    // add new message
    // reditect to messages page
});

messagesApp.delete("/message/:id", (req, res) => {
    // delete message
    // reditect to messages page
});



app.use(messagesApp);
app.use(productsApp);


app.get("/", (req, res) => {
    // send home page
});


app.listen(3000);

// We could futher move these apps into separate files