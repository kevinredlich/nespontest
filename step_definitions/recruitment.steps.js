const { expect } = require('@playwright/test');
const { Given, When, Then } = require('@cucumber/cucumber');
const Actor = require('../actors/Actor');
const Login = require('../tasks/Login');
const Recruitment = require('../tasks/Recruitment');
const RecruitmentStatus = require('../questions/RecruitmentStatus');
const ClickAddButton = require('../tasks/clickAddButton');
const { vacancyDropdown } = require('../locators/Locators');
const clickShortlistButton = require('../tasks/clickShortlistButton')
const saveButtonShortlistCandidate = require('../tasks/saveButtonShortlistCandidate')
const ScheduleButtonCandidate = require('../tasks/ScheduleInterviewButtonCandidate');
const TitleInterviewInput = require ('../tasks/interviewTittleInput');
const InterviewerInput = require('../tasks/InterviewerInput');
const DateInput = require('../tasks/dateInput');
const markInterviewPassed = require('../tasks/markInterviewPassed');
const OfferJobButton = require('../tasks/clickOfferJobButton');
const HireButton = require('../tasks/clickHireButton');



let actor;

Given('the user logs into the OrangeHRM application', async () => {
    actor = new Actor('QA Tester');
    await actor.prepares();
    await Login.withCredentials(actor, 'Admin', 'admin123');
});

When('the user navigates to the Recruitment module', async () => {
    await actor.page.waitForTimeout(3000);
    await Recruitment.navigateToModule(actor);
});

When('the user clicks the Add button', async () => {
    await actor.page.waitForTimeout(3000);
    await ClickAddButton.performAs(actor);
});


When('the user adds a new hire with the following details:', async (dataTable) => {
    await actor.page.waitForTimeout(3000);
    const details = dataTable.hashes()[0];

    // Generar email aleatorio y número de teléfono
    const randomEmail = `test${Math.random().toString(36).substring(2, 8)}@example.com`;
    const randomPhoneNumber = Math.floor(Math.random() * Math.pow(10, 25)).toString().slice(0, 25);

    // Llamar a la función para llenar los detalles del candidato
    await Recruitment.addNewHire(
        actor,
        details.FirstName,
        details.LastName,
        randomPhoneNumber,
        randomEmail,
    );
   
});


When('the user select vacancy button', async () => {
    await actor.page.waitForTimeout(3000);
    await vacancyDropdown.performAs(actor)
})

When('the user clicks the Shortlist button', async () => {
    await actor.page.waitForTimeout(3000);
    await clickShortlistButton.performAs(actor);
});

When('the user click save button', async () => {
    await actor.page.waitForTimeout(3000);
    await saveButtonShortlistCandidate.performAs(actor);
})

When('the user click in Schedule Interview Button', async () => {
    await actor.page.waitForTimeout(3000);
    await ScheduleButtonCandidate.performAs(actor)
})

When('the user fill Interview Title', async () => {
    await actor.page.waitForTimeout(3000)
    await TitleInterviewInput.performAs(actor)
})

When('the user fill Interviewer', async () => {
    await actor.page.waitForTimeout(3000)
    await InterviewerInput.performAs(actor)
})

When('the user fill Date', async () => {
    await actor.page.waitForTimeout(3000)
    await DateInput.performAs(actor)
})

When('the user marks interview passed', async () => {
    await actor.page.waitForTimeout(3000)
    await markInterviewPassed.performAs(actor)
})

When('the user click offer job button', async () => {
    await actor.page.waitForTimeout(3000)
    await OfferJobButton.performAs(actor)
})

When('the user click hire button', async () => {
    await actor.page.waitForTimeout(3000)
    await HireButton.performAs(actor)
})




Then('the user should see the status of the hire as {string}', async (expectedStatus) => {
    const isCorrectStatus = await RecruitmentStatus.hasStatus(actor, expectedStatus);
    console.log(`Estado esperado: ${expectedStatus} | Resultado: ${isCorrectStatus}`); // Log para depuración

    // Verifica que el estado sea exactamente el esperado
    expect(isCorrectStatus).toBe(true);
});







