const express = require("express");
const usersApp = require("./routes/users");

const app = express();

app.use(express.json());

app.use("/users", usersApp);

app.listen(3000);