const locators = require('../locators/Locators');

const savewButtonShortList = {
    async performAs(actor) {
        // Espera explícita para asegurarse de que los botones están cargados
        await actor.page.waitForSelector(locators.saveButton, { timeout: 100000 });
        await actor.page.click(locators.saveButton);
    }
};

module.exports = savewButtonShortList;
