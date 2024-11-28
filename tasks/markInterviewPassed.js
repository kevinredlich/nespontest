const locators = require('../locators/Locators');

const InterviewPassed = {
    async performAs(actor) {
        // Espera explícita para asegurarse de que los botones están cargados
        await actor.page.waitForSelector(locators.markInterviewPassedButton, { timeout: 100000 });
        await actor.page.click(locators.markInterviewPassedButton);
    }
};

module.exports = InterviewPassed;
