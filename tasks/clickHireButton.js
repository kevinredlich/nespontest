const locators = require('../locators/Locators');

const HireButton = {
    async performAs(actor) {
        // Espera explícita para asegurarse de que los botones están cargados
        await actor.page.waitForSelector(locators.hireButton, { timeout: 100000 });
        await actor.page.click(locators.hireButton);
    }
};

module.exports = HireButton;
