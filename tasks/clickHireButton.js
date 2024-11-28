const locators = require('../locators/Locators');

const HireButton = {
    async performAs(actor) {
        // Ensure the button is visible and clickable
        await actor.page.waitForSelector(locators.hireButton, { timeout: 100000 });
        await actor.page.click(locators.hireButton);
    }
};

module.exports = HireButton;
