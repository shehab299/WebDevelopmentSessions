class UserView {

    renderUser(user) {
        return `${user.id}, ${user.name}, ${user.email}`;
    }

    renderUsers(users) {

        let usersPrint = "";

        for (let user of users) {
            usersPrint += this.renderUser(user) + "\n";
        }

        return usersPrint;
    }
}

module.exports = new UserView();