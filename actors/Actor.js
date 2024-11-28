class Actor {
    constructor(name) {
        this.name = name;
        this.browser = null;
        this.context = null;
        this.page = null;
    }

    async prepares(browserType = 'chromium') {
        this.browser = await require('playwright')[browserType].launch({ headless: true });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        return this;
    }

    async cleansUp() {
        await this.browser.close();
    }
}

module.exports = Actor;
