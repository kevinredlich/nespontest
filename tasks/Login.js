const locators = require('../locators/Locators');

const Login = {
    async withCredentials(actor, username, password) {
        await actor.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await actor.page.fill(locators.usernameField, username);
        await actor.page.fill(locators.passwordField, password);
        await actor.page.click(locators.loginButton);
    }
};

module.exports = Login;
