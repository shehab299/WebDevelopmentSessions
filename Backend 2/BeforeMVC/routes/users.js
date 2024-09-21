const express = require("express");
const fs = require("fs/promises");
const path = require("path");

const usersApp = express.Router();

usersApp.get("/", async (req, res) => {

    const userPath = path.join(__dirname, "../data/users.json");

    const jsonData = await fs.readFile(userPath, "utf-8");
    const users = JSON.parse(jsonData);

    res.status(200);

    for(let user of users) {
        const userPrint = `user id: ${user.id}, user name: ${user.name}, user email: ${user.email}`;
        res.write(userPrint);
    }

    res.end();
});

usersApp.get("/:id", async (req, res) => {

    const userPath = path.join(__dirname, "../data/users.json");

    const jsonData = await fs.readFile(userPath, "utf-8");
    const users = JSON.parse(jsonData);

    const idToFind = parseInt(req.params.id);

    const user = users.find(user => user.id === idToFind);

    if(user) {
        res.status(200).send(`user id: ${user.id}, user name: ${user.name}, user email: ${user.email}`);
    } else {
        res.status(404).send("User not found");
    }


});


usersApp.post("/", async (req, res) => {

    const userPath = path.join(__dirname, "../data/users.json");

    const jsonData = await fs.readFile(userPath, "utf-8");
    const users = JSON.parse(jsonData);

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);

    await fs.writeFile(userPath, JSON.stringify(users, null, 2));

    res.status(201).send("User created successfully");
});



module.exports = usersApp;