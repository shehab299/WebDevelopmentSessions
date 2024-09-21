const express = require("express");

const messagesApp = express.Router();

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

module.exports = messagesApp;
