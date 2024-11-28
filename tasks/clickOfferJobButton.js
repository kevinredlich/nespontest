const locators = require('../locators/Locators');

const OfferJobButton = {
    async performAs(actor) {
        // Ensure the button is visible and clickable
        await actor.page.waitForSelector(locators.offerJobButton, { timeout: 100000 });
        await actor.page.click(locators.offerJobButton);
    }
};

module.exports = OfferJobButton;
