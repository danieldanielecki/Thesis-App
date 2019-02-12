# Thesis application

The following repository is for a source code of an Angular application developed during writing a Master's Thesis.

## Description

Focus is to achieve high quality source code by using programming best practices, many testing techniques, and ethical hacking to measure how secure is the application. It contains number of different dependencies, first of all to speed up development, as well provides more opportunities to detect potential source of vulnerable source code during penetration testing phase. The application itself is equippment with CI/CD integration, PWA capabilities, rich front-end,  and state management.

## Technological stack

+ Angular
+ Cypress
+ Docker
+ Jest
+ NgRx/RxJS
+ Node.js
+ npm
+ Nx
+ TypeScript
+ Webpack

## Commands

+ `ng generate app myapp` - generate new application, in Nx there can be multiple applications, and libraries in the same workspace.
+ `ng serve --project=myapp` - run local server in production environment, navigate to `http://localhost:4200/` in order to access it. Changes are detected automatically, and will server will reload the page once they will be detected.
+ `ng generate component component-name --project=myapp` - generate new component, can be used as `ng generate directive|pipe|service|class|guard|interface|enum|module`.
+ `ng build --project=myapp` - build project.
+ `ng serve` - build, and serve project.
+ `ng e2e` - run end-to-end tests.
+ `ng test` - run unit tests.
+ `npm run dep-graph` - run dependency graph.
+ More can be found on [Nx official project website](https://nrwl.io/nx/guide-nx-workspace), or [Angular CLI documentation](https://angular.io/cli). To simplify management of these commands Angular Console, as an extension to Visual Studio Code is used for more sophisticated scenarios.

## Commits convention

+ **Add:** - new functionality has been added.
+ **Change:** - changes in methods, project setup, variables, etc.
+ **Delete:** - something has been removed.
+ **Fix:** - part of code/functionality has been performed.
