const path = require("path");
const fs = require("fs/promises");

class User
{
    UserPath = path.join(__dirname, "../data/users.json");

    async findAll()
    {
        const jsonData = await fs.readFile(this.UserPath, "utf-8");
        return JSON.parse(jsonData);
    }

    async getUserById(id)
    {
        const users = await this.getAllUsers();
        return users.find(user => user.id === id);
    }


    async create(newUser)
    {
        const users = await this.getAllUsers();
        newUser.id = users.length + 1;
        users.push(newUser);
        await fs.writeFile(this.UserPath, JSON.stringify(users, null, 2));
    }
}


module.exports = new User();