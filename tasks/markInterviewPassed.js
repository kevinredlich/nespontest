const locators = require('../locators/Locators');

const InterviewPassed = {
    async performAs(actor) {
        // Ensure the button is visible and clickable
        await actor.page.waitForSelector(locators.markInterviewPassedButton, { timeout: 100000 });
        await actor.page.click(locators.markInterviewPassedButton);
    }
};

module.exports = InterviewPassed;
