Playwright Screenplay Automation
Introducción
Este proyecto implementa la automatización del flujo de reclutamiento en OrangeHRM, desde la creación de un candidato hasta la contratación con el estado final Hired. La automatización está diseñada utilizando el patrón Screenplay con Playwright y Cucumber, asegurando modularidad, escalabilidad y mantenibilidad.

Historia de Usuario
En español:

Como reclutador en OrangeHRM,
Quiero automatizar el flujo de reclutamiento de un candidato,
Para reducir el tiempo y errores al realizar la contratación.

In English:

As a recruiter in OrangeHRM,
I want to automate the recruitment flow for a candidate,
So that I can reduce the time and errors when completing the hiring process.

Tecnologías Utilizadas
Playwright: Framework de automatización para realizar acciones en el navegador.
Cucumber: Define los escenarios en lenguaje Gherkin, facilitando la comprensión para usuarios técnicos y no técnicos.
Patrón Screenplay: Estructura que separa responsabilidades en:
Actors: Representan a los usuarios que ejecutan las pruebas.
Tasks: Encapsulan las acciones que los usuarios realizan.
Questions: Validan las condiciones esperadas.
Locators: Centralizan los selectores para una mayor mantenibilidad.

Estructura del Proyecto


playwright-screenplay/
├── actors/
│   └── Actor.js             # Define los actores en el patrón Screenplay
├── features/
│   └── recruitment.feature  # Escenarios en lenguaje Gherkin
├── helpers/
│   └── utility.js           # Funciones auxiliares reutilizables
├── locators/
│   └── Locators.js          # Selectores centralizados para el DOM
├── questions/
│   └── RecruitmentStatus.js # Verifica que el estado sea "Hired"
├── step_definitions/
│   └── recruitment.steps.js # Mapea pasos de Gherkin con Tasks y Questions
├── tasks/
│   ├── clickAddButton.js    # Maneja el clic en el botón "Add"
│   ├── dateInput.js         # Llena el campo de fecha
│   ├── Recruitment.js       # Flujo principal de reclutamiento
│   └── ...                  # Otros archivos de tareas
├── tests/
│   └── playwright.config.js # Configuración de Playwright
├── package.json             # Dependencias y scripts de npm



Feature: Recruitment process in OrangeHRM

  Scenario: Add a new hire and validate status
    Given the user logs into the OrangeHRM application
    When the user navigates to the Recruitment module
    When the user clicks the Add button
    And the user adds a new hire with the following details:
      | FirstName | LastName |
      | Test      | Testing  |
    When the user clicks the Shortlist button
    When the user click save button
    When the user click in Schedule Interview Button
    When the user fill Interview Title
    When the user fill Interviewer
    When the user fill Date
    When the user click save button
    When the user marks interview passed
    When the user click save button
    When the user click offer job button
    When the user click save button
    When the user click hire button
    When the user click save button
    Then the user should see the status of the hire as "Hired"


Cómo Ejecutar el Proyecto
1. Clonar el Repositorio
git clone <URL_DEL_REPOSITORIO>
cd playwright-screenplay
2. Instalar Dependencias
npm install
3. Configurar Playwright
npx playwright install
4. Ejecutar las Pruebas
npx cucumber-js --require step_definitions/ features/

Prioridad en la Identificación de Objetos
Para identificar elementos en el DOM, se aplicó el siguiente orden de prioridades:

Selectores únicos: Se priorizan atributos como id y data-* cuando están disponibles:

addButton: 'button[data-v-12345]'
Clases únicas: Si no hay identificadores únicos, se usan clases con nombres específicos:

recruitmentStatusField: 'div.orangehrm-recruitment-status'
Combinar atributos y texto: En caso de elementos similares, se combinan clases y texto para mayor precisión:

'//button[contains(@class, "oxd-button") and text()="Offer Job"]'
XPath para casos complejos: Cuando otros métodos no son suficientes:

(//button[contains(@class, "oxd-button--success")])[2]
Puntos Clave del Proyecto
Modularidad: El uso del patrón Screenplay facilita la escalabilidad y reutilización del código.
Legibilidad: Escenarios en Gherkin para asegurar que sean comprensibles para todos los involucrados.
Eficiencia: Selectores centralizados en Locators.js para facilitar el mantenimiento.
Automatización Completa: Desde la creación del candidato hasta la validación del estado Hired.