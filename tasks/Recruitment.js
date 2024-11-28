const locators = require('../locators/Locators');

const Recruitment = {
    async navigateToModule(actor) {
        await actor.page.click(locators.recruitmentTab);
        await actor.page.waitForSelector(locators.addButton, { timeout: 10000 }); // Espera a que cargue el módulo
    },

    async addNewHire(actor, firstName, lastName, email, phoneNumber) {
        // Llenar nombre y apellido
        await actor.page.fill(locators.firstNameField, firstName);
        await actor.page.fill(locators.lastNameField, lastName);

        // Abrir el dropdown
        await actor.page.click(locators.vacancyDropdown);

        // Espera a que el dropdown esté visible
        await actor.page.waitForSelector('[role="listbox"]', { timeout: 10000 });

        // Usa teclas hacia abajo para llegar a la opción 2
        for (let i = 0; i < 2; i++) {
            await actor.page.keyboard.press('ArrowDown');
        }

        // Selecciona la opción actual (al presionar Enter)
        await actor.page.keyboard.press('Enter');

        // Llenar email
        await actor.page.fill(locators.emailField, email);

        // Llenar número de teléfono
        await actor.page.fill(locators.phoneNumberField, phoneNumber);

        // Guardar
        await actor.page.click(locators.saveButton);
    },
};

module.exports = Recruitment;
