const locators = require('../locators/Locators');

const ScheduleButtonCandidate = {
    async performAs(actor) {
        // Ensure the button is visible and clickable
        await actor.page.waitForSelector(locators.ScheduleInterviewButton, { timeout: 100000 });
        await actor.page.click(locators.ScheduleInterviewButton);
    }
};

module.exports = ScheduleButtonCandidate;
