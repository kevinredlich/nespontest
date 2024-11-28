const locators = require('../locators/Locators');

const savewButtonShortList = {
    async performAs(actor) {
        // Ensure the button is visible and clickable
        await actor.page.waitForSelector(locators.saveButton, { timeout: 100000 });
        await actor.page.click(locators.saveButton);
    }
};

module.exports = savewButtonShortList;
