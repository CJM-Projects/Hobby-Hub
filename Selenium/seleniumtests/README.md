Hobby Hub Selenium Tests

Automated end-to-end tests for the Hobby Hub web application using Java, Maven, Selenium WebDriver and TestNG.

The purpose of this project is to automate key user journeys through the Hobby Hub application and demonstrate reliable, maintainable test automation practices.

Project Overview

Hobby Hub is a web application that helps users discover hobbies based on their interests, preferences and lifestyle.

This Selenium project tests the application's functionality from a user's perspective by interacting with the browser in the same way a real user would.

The test project is maintained separately from the Hobby Hub application itself, allowing the tests to be run against a deployed version of the application and independently through CI/CD.

Technologies Used
| Technology | Purpose |
| -------------- | -------------------------- |
| Java | Programming language |
| Maven | Project and dependency management |
| Selenium WebDriver | Browser automation | 
| TestNG | Test framework and test execution |
| GitHub Actions | Continuous integration and automated test execution|
| Chrome / ChromeDriver	| Browser used for automated testing |

What Is Tested?

The test suite focuses on important user journeys and functionality within Hobby Hub.

Examples include:

Navigating between pages
Browsing all hobbies
Selecting filters
Navigating to hobby details
Displaying hobby information
Completing the hobby quiz
Selecting quiz answers
Reaching the quiz results page
Verifying expected page URLs and content

The tests are intended to provide confidence that key functionality continues to work after changes to the application.