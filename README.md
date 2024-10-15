# Cypress testing challenge

Today we'll use test driven development (TDD) to build and validate a signup form.

We'll use [Cypress](https://www.cypress.io/) to test the UI of our form, along with [Testing Library](https://testing-library.com/docs/) to help drive the building of an accessible experience through testing.

# Getting started

1. Clone this repo
1. Run `npm install`.
1. Run `npm start` to start the development server.
1. Run `npm test` in a separate terminal to open Cypress.
1. In the Cypress UI, run `signup.cy.js`.
1. You should see a failing test.
1. Open the test file: [./cypress/e2e/signup.cy.js](./cypress/e2e/signup.cy.js).
1. Open the html file: [./signup.html](./signup.html).
1. Work through each step of the first test, implementing the code necessary in `signup.html` to make each step pass.
1. Subsequent tests are marked pending with `xit`. Change this to `it` to enable the test.
1. Rinse and repeat until all tests are passing.
1. Bonus: Add additional password validation! Be sure to test drive it!