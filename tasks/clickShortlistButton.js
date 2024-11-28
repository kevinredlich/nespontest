const locators = require('../locators/Locators');

const ShortlistButton = {
    async performAs(actor) {
        // Espera explícita para asegurarse de que los botones están cargados
        await actor.page.waitForSelector(locators.shortlistButton, { timeout: 100000 });
        await actor.page.click(locators.shortlistButton);
    }
};

module.exports = ShortlistButton;
