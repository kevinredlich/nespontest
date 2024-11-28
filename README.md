<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Playwright Screenplay Automation</h1>
    <h2>Introducción</h2>
    <p>
        Este proyecto implementa la automatización del flujo de reclutamiento en 
        <strong>OrangeHRM</strong>, desde la creación de un candidato hasta la contratación 
        con el estado final <code>Hired</code>. La automatización está diseñada utilizando 
        el <strong>patrón Screenplay</strong> con <strong>Playwright</strong> y 
        <strong>Cucumber</strong>, asegurando modularidad, escalabilidad y mantenibilidad.
    </p>
    <h2>Historia de Usuario</h2>
    <h3>En español:</h3>
    <blockquote>
        Como reclutador en OrangeHRM,<br>
        Quiero automatizar el flujo de reclutamiento de un candidato,<br>
        Para reducir el tiempo y errores al realizar la contratación.
    </blockquote>
    <h3>In English:</h3>
    <blockquote>
        As a recruiter in OrangeHRM,<br>
        I want to automate the recruitment flow for a candidate,<br>
        So that I can reduce the time and errors when completing the hiring process.
    </blockquote>
    <h2>Tecnologías Utilizadas</h2>
    <ul>
        <li><strong>Playwright:</strong> Framework de automatización para realizar acciones en el navegador.</li>
        <li><strong>Cucumber:</strong> Define los escenarios en lenguaje Gherkin, facilitando la comprensión para usuarios técnicos y no técnicos.</li>
        <li><strong>Patrón Screenplay:</strong> Estructura que separa responsabilidades en:
            <ul>
                <li><strong>Actors:</strong> Representan a los usuarios que ejecutan las pruebas.</li>
                <li><strong>Tasks:</strong> Encapsulan las acciones que los usuarios realizan.</li>
                <li><strong>Questions:</strong> Validan las condiciones esperadas.</li>
                <li><strong>Locators:</strong> Centralizan los selectores para una mayor mantenibilidad.</li>
            </ul>
        </li>
    </ul>
    <h2>Estructura del Proyecto</h2>
    <pre>
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
    </pre>
    <h2>Escenarios Automatizados</h2>
    <h3>Escenario Principal:</h3>
    <pre>
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
    </pre>
    <h2>Cómo Ejecutar el Proyecto</h2>
    <h3>1. Clonar el Repositorio</h3>
    <pre>git clone &lt;URL_DEL_REPOSITORIO&gt;<br>cd playwright-screenplay</pre>
    <h3>2. Instalar Dependencias</h3>
    <pre>npm install</pre>
    <h3>3. Configurar Playwright</h3>
    <pre>npx playwright install</pre>
    <h3>4. Ejecutar las Pruebas</h3>
    <pre>npx cucumber-js --require step_definitions/ features/</pre>
    <h3>
    <p>
        Para identificar elementos en el DOM, se aplicó el siguiente orden de prioridades:
    </p>
    <ol>
        <li><strong>Selectores únicos:</strong> Se priorizan atributos como <code>id</code> y <code>data-*</code>.</li>
        <li><strong>Clases únicas:</strong> Si no hay identificadores únicos, se usan clases específicas.</li>
        <li><strong>Combinar atributos y texto:</strong> En caso de elementos similares, se combinan clases y texto.</li>
        <li><strong>XPath para casos complejos:</strong> Cuando otros métodos no son suficientes.</li>
    </ol>
    <h2>Puntos Clave del Proyecto</h2>
    <ul>
        <li><strong>Modularidad:</strong> El uso del patrón Screenplay facilita la escalabilidad y reutilización del código.</li>
        <li><strong>Legibilidad:</strong> Escenarios en Gherkin para asegurar que sean comprensibles para todos los involucrados.</li>
        <li><strong>Eficiencia:</strong> Selectores centralizados en <code>Locators.js</code> para facilitar el mantenimiento.</li>
        <li><strong>Automatización Completa:</strong> Desde la creación del candidato hasta la validación del estado <code>Hired</code>.</li>
    </ul>
</body>
</html>
