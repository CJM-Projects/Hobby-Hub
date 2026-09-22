# Hobby Hub Selenium Tests

Automated end-to-end tests for the Hobby Hub web application using Java, Maven, Selenium WebDriver and TestNG.

The purpose of this project is to automate key user journeys through the Hobby Hub application and demonstrate reliable, maintainable test automation practices.

## Project Overview

Hobby Hub is a web application that helps users discover hobbies based on their interests, preferences and lifestyle.

This Selenium project tests the application's functionality from a user's perspective by interacting with the browser in the same way a real user would.

The test project is maintained separately from the Hobby Hub application itself, allowing the tests to be run against a deployed version of the application and independently through CI/CD.

### Technologies Used
| Technology | Purpose |
| -------------- | -------------------------- |
| Java | Programming language |
| Maven | Project and dependency management |
| Selenium WebDriver | Browser automation | 
| TestNG | Test framework and test execution |
| GitHub Actions | Continuous integration and automated test execution|
| Chrome / ChromeDriver	| Browser used for automated testing |

## What Is Tested?

The test suite focuses on important user journeys and functionality within Hobby Hub.

Examples include:

- Navigating between pages
- Browsing all hobbies
- Selecting filters
- Navigating to hobby details
- Displaying hobby information
- Completing the hobby quiz
- Selecting quiz answers
- Reaching the quiz results page
- Verifying expected page URLs and content

The tests are intended to provide confidence that key functionality continues to work after changes to the application.

## Best Practices Applied

### Page Object Model

Each page has its own Page Object containing its locators and interactions. This reduces duplication and makes UI changes easier to maintain.

### Reusable Methods

Common Selenium actions such as clicking, finding elements and waiting are handled by reusable methods in BasePage.

### Explicit Waits

WebDriverWait and ExpectedConditions are used instead of fixed delays such as Thread.sleep().

This improves reliability when page loading times vary, particularly in CI.

### Test Data Separation

Quiz answers are stored separately from the test logic using a QuizTestData class and TestNG DataProvider.

This allows different test scenarios to reuse the same test flow.

### Configuration

Browser settings, application URL and wait times are kept in configuration rather than being hard-coded throughout the tests.

### Test Isolation

@BeforeMethod and @AfterMethod are used to create and close the browser for each test, ensuring tests start with a clean state.

## Screenshot on Failure

As a bonus feature, screenshots are automatically captured when a test fails.

Screenshots are saved with a timestamp to prevent repeated failures from overwriting previous evidence.

screenshots/
└── userCanCompleteQuiz_2026-09-22_12-06-42.png

This is particularly useful when investigating failures in GitHub Actions where the browser cannot be viewed directly.

## GitHub Actions

The test suite can be executed automatically through GitHub Actions.

The workflow:

Checks out the repository
Sets up Java
Runs the Maven test suite
Reports the test results

This allows tests to be run consistently in a CI environment rather than relying only on local execution.

## Key Findings

During development, several issues highlighted the importance of good automation practices:

- Fragile selectors – Long CSS selectors were replaced where possible with stable attributes.
- Responsive layouts – Browser size can affect which navigation elements are displayed.
- Loading times – Explicit waits were more reliable than fixed delays.
- CI differences – Headless Chrome and GitHub Actions can behave differently from local execution, making reliable waits and failure screenshots particularly useful.
- Test maintainability – POM and reusable methods reduce duplicated Selenium code.

## Test Reports

TestNG provides test results showing:

- Passed tests
- Failed tests
- Skipped tests
- Failure information
- Execution details

These results can be used alongside failure screenshots to investigate problems.

## Future Improvements

Potential future improvement:

Stable Locators - Using stable attributes such as data-testid and aria-label are over long CSS selectors

## Summary

This project demonstrates a maintainable Selenium test suite using Java, Maven and TestNG.

It applies key automation practices including POM, reusable methods, explicit waits, stable locators, separated test data, configuration and CI execution, with automatic screenshots providing additional failure evidence.