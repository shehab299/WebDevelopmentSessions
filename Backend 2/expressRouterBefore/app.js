const express = require("express");

const app = express();

app.get("/", (req, res) => {
    // send home page
});


app.get("/prdoucts", (req, res) => {
    // send products page
});

app.get("/products/:id", (req, res) => {

});

app.post("/product", (req, res) => {
    // add new product
    // reditect to products page
});

app.delete("/product/:id", (req, res) => {
    // delete product
    // reditect to products page
});


app.get("/messages", (req, res) => {
    // send messages page
});

app.get("/messages/:id", (req, res) => {
    // send message details page
});

app.post("/message", (req, res) => {
    // add new message
    // reditect to messages page
});

app.delete("/message/:id", (req, res) => {
    // delete message
    // reditect to messages page
});


app.listen(3000);


// You can divide this app into two logical parts
// 1. Products
// 2. Messages
// Express offer you a way to divide your app into multiple apps
// You can use express.Router to divide your app into multiple apps

