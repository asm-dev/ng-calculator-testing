# Calculator Application

A simple but complete application developed with **Angular 19** and standalone components. It allows performing additions, subtractions and multiplications, with a clear focus on **software quality** through unit tests and testing.

![image](https://github.com/user-attachments/assets/cf628316-d2bf-4746-b25e-11d28df6e483)

## The importance of testing

Tests are a fundamental necessity in modern development. In this project we use unit and E2E tests.

**Unit tests** are fast, automated and give us the confidence to refactor code without fear of introducing bugs. In this project they ensure that the initial values are `0`, validate the operation logic and verify the result displayed in the HTML.

With Cypress we run **end-to-end** or E2E tests, which simulate the end user's behavior, checking that numeric values can be entered and calculations can be performed with them, producing correct results.

Basically, this project follows Google's **test pyramid** principle:

- Many fast unit tests
- Some integration tests
- Few E2E tests, but they cover the critical flows

> More information: [Google Testing Blog - The Test Pyramid](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)
