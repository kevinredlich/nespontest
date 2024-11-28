const locators = require('../locators/Locators');

const OfferJobButton = {
    async performAs(actor) {
        // Espera explícita para asegurarse de que los botones están cargados
        await actor.page.waitForSelector(locators.offerJobButton, { timeout: 100000 });
        await actor.page.click(locators.offerJobButton);
    }
};

module.exports = OfferJobButton;
