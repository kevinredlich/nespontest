const locators = require('../locators/Locators');

const ScheduleButtonCandidate = {
    async performAs(actor) {
        // Espera explícita para asegurarse de que los botones están cargados
        await actor.page.waitForSelector(locators.ScheduleInterviewButton, { timeout: 100000 });
        await actor.page.click(locators.ScheduleInterviewButton);
    }
};

module.exports = ScheduleButtonCandidate;
