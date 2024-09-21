const express = require("express");
const User = require("../models/User");
const userView = require("../views/UserView");


const usersApp = express.Router();


usersApp.get("/", async (req, res) => {
    const users = await User.findAll();
    res.status(200).send(userView.renderUsers(users));
});


usersApp.get("/:id", async (req, res) => {
    
    const idToFind = parseInt(req.params.id);

    const user = await User.getUserById(idToFind);
    
    if(user) {
        res.status(200).send(userView.renderUser(user));
    } else {
        res.status(404).send("User not found");
    }

});


usersApp.post("/", async (req, res) => {
   
    const newUser = {
        name: req.body.name,
        email: req.body.email
    };

    const user = await User.create(newUser);

    res.status(201).send(userView.one(user));
});


