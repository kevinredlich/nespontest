const locators = require('../locators/Locators');

const ShortlistButton = {
    async performAs(actor) {
        // Ensure the button is visible and clickable
        await actor.page.waitForSelector(locators.shortlistButton, { timeout: 100000 });
        await actor.page.click(locators.shortlistButton);
    }
};

module.exports = ShortlistButton;
