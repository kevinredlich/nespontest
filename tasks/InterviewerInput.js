const locators = require('../locators/Locators');

const InterviewerInput = {
    async performAs(actor) {
        // Espera explícita para asegurarse de que los botones están cargados y escribir en el input
        await actor.page.waitForSelector(locators.InterviewerInput, { timeout: 100000 });
        await actor.page.click(locators.InterviewerInput);
        await actor.page.fill(locators.InterviewerInput, 'Ranga  Akunuri')
        await actor.page.click(locators.rangaAkunuriInterviewer)
    }
};

module.exports = InterviewerInput;
