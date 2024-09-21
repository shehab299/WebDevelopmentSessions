const express = require("express");

const productsApp = express.Router();


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





module.exports = productsApp;