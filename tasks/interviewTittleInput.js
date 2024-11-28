const locators = require('../locators/Locators');

const TitleInterviewInput = {
    async performAs(actor) {
        // Ensure the button is visible and clickable
        await actor.page.waitForSelector(locators.interViewTitleInput, { timeout: 100000 });
        await actor.page.click(locators.interViewTitleInput);
        await actor.page.fill(locators.interViewTitleInput, 'Testing')
    }
};

module.exports = TitleInterviewInput;
