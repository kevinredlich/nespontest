const locators = require('../locators/Locators');

const RecruitmentStatus = {
    async hasStatus(actor, expectedStatus) {
        // Espera que el elemento esté presente en la página
        await actor.page.waitForSelector(locators.recruitmentStatusField, { timeout: 10000 });

        // Obtiene el texto del elemento
        const actualStatus = await actor.page.textContent(locators.recruitmentStatusField);

        // Limpia espacios en blanco y elimina "Status:" si está presente
        const normalizedStatus = actualStatus.replace('Status:', '').trim();
        console.log('Estado encontrado:', normalizedStatus); // Agrega un log para depuración

        // Retorna true si el estado coincide exactamente
        return normalizedStatus === expectedStatus;
    }
};

module.exports = RecruitmentStatus;
