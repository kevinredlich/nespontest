const locators = require('../locators/Locators');

const DateInput = {
    async performAs(actor) {
        // Espera a que el input sea visible
        await actor.page.waitForSelector(locators.dateInputField, { timeout: 10000 });

        // Clic en el input para asegurarte de que esté enfocado
        await actor.page.click(locators.dateInputField);

        // Llenar el input con una fecha específica
        await actor.page.fill(locators.dateInputField, '2024-11-29'); // Cambia la fecha según lo necesites
    }
};

module.exports = DateInput;