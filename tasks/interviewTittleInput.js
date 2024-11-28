const locators = require('../locators/Locators');

const TitleInterviewInput = {
    async performAs(actor) {
        // Espera explícita para asegurarse de que los botones están cargados y escribir en el input
        await actor.page.waitForSelector(locators.interViewTitleInput, { timeout: 100000 });
        await actor.page.click(locators.interViewTitleInput);
        await actor.page.fill(locators.interViewTitleInput, 'Testing')
    }
};

module.exports = TitleInterviewInput;
