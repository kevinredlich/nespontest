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
