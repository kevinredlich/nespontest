const locators = require('../locators/Locators');

const InterviewerInput = {
    async performAs(actor) {
        // Ensure the button is visible and clickable
        await actor.page.waitForSelector(locators.InterviewerInput, { timeout: 100000 });
        await actor.page.click(locators.InterviewerInput);
        await actor.page.fill(locators.InterviewerInput, 'Ranga  Akunuri')
        await actor.page.click(locators.rangaAkunuriInterviewer)
    }
};

module.exports = InterviewerInput;
