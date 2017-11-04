Feature: To test the add & subtract feature of mobile calculator app

@AddScenario
Scenario: Add two numbers
Given I am on my mobile calculator app
When I add "3" and "5"
Then the result "8" should be displayed

@SubtractScenario
Scenario: Subtract two numbers
When I subtract "7" from "5"
Then the result "2" should be displayed

@MultiplyScenario
Scenario: Multiply two numbers
When I multiply "3" with "5"
Then the result "15" should be displayed

@DivideScenario
Scenario: Divide two numbers
When I divide "9" with "3"
Then the result "3" should be displayed

@ClearScenario
Scenario: Clear the text
When I add "8" and "7"
When I click on AC button
Then the result should be cleared
