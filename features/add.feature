Feature: To test the add & subtract feature of ng1 calculator

@AddScenario
Scenario: Add two numbers
Given I am on my mobile calculator app
When I add "3" and "5"
Then the result "8" should be displayed