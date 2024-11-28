const locators = require('../locators/Locators');

const ClickAddButton = {
    async performAs(actor) {
        // Espera explícita para asegurarse de que los botones están cargados
        await actor.page.waitForSelector(locators.addButton, { timeout: 10000 });

        // Obtén todos los botones y selecciona el segundo (índice 1)
        const buttons = await actor.page.$$(locators.addButton);    
        if (buttons.length < 2) {
            throw new Error('No se encontró el botón esperado con el selector');
        }

        // Asegúrate de que el botón esté visible y haz scroll si es necesario
        await buttons[1].scrollIntoViewIfNeeded();
        await buttons[1].click(); // Haz clic en el botón
    }
};

module.exports = ClickAddButton;
