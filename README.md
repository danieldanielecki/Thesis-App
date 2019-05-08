# Thesis application

The following repository is for a source code of an Angular application developed during writing a Master's Thesis.

## Description

Focus is to achieve high quality source code by using programming best practices, many testing techniques, and ethical hacking to measure how secure is the application. It contains number of different dependencies, first of all to speed up development, as well provides more opportunities to detect potential source of vulnerable source code during penetration testing phase. The application itself is equipped with CI/CD integration, PWA capabilities, rich front-end, and state management.

## Technological stack

- Angular
- Cypress
- Docker
- Jest
- Node.js
- npm
- Nx
- Three.js
- TypeScript
- Webpack
  <!--
  TODO: Add this if brief would be build
- NgRx/RxJS
  -->

## Commands

- `ng generate app myapp` - generate new application, in Nx there can be multiple applications, and libraries in the same workspace.
- `ng generate lib mylib` - generate new library, in Nx there can be multiple applications, and libraries in the same workspace.
- `ng serve --project=myapp` - run local server in production environment, navigate to `http://localhost:4200/` in order to access it. Changes are detected automatically, and will server will reload the page once they will be detected.
- `ng generate component component-name --project=myapp` - generate new component, can be used as `ng generate directive|pipe|service|class|guard|interface|enum|module`.
- `ng build --project=myapp` - build project.
- `ng serve` - build, and serve project.
- `ng e2e` - run end-to-end tests.
- `ng test` - run unit tests.
- `ng version` - show version of Angular with its core dependencies.
- `ng lint` - perform static code analysis.
- `ng help` - show all available commands of the CLI.
- `npm outdated` - show outdated dependencies.
- `npm run dep-graph` - run dependency graph.
- `npm test -t "test-name"` - run only single test.
- `npx jest --clearCache` - clear cache for Jest.
- For Angular CLI, and Nx more can be found on [Nx official project website](https://nrwl.io/nx/guide-nx-workspace), or [Angular CLI documentation](https://angular.io/cli). To simplify management of these commands Angular Console, as an extension to Visual Studio Code is used for more sophisticated scenarios.
- `git log --all --decorate --graph --oneline` - log commits of repository in a human friendly way.
- `git diff --color-words` - display difference between commit, and working tree with distinguishing between words colors without breaking line where differences occured.
- `git diff --stat` - show number of changed lines for each file.
- `git status` - display differences between the index file, and the current HEAD commit.
- `git status -sb` - same as `git status`, but in shorter version, and showing current branch.
- `git add .` - add all changed files in the repository to the index.
- `git commit -m "commit message"` - create commit with a message.
- `git commit --amend` - edit unpushed commit.
- `git push` - push commit to the repository.
- `git tag` - show tags from the repository.
- `git tag -a v0.0.0 -m "tag message"` - create tag on current commit with specific version, and message.
- `git push --tags` - push tags to the repository.
- `git tag -d v0.0.0` - delete local tag.
- `git push --delete origin v0.0.0` - delete remote tag.
- `git tag -a v0.0.0 123abcde -m "Message here"` - add tag to certain commit.
- `docker build -t IMAGE_NAME .` - build Docker image.
- `docker images` - list Docker images.
- `docker ps` - show Docker container status.
- `docker run -p 4200:4200 IMAGE_NAME` - run Docker image with a specific image name.
- `docker stop CONTAINER_ID` - stop running container with specific ID.
- `docker exec -it CONTAINER_NAMES sh` - enter the container.

## Commits convention

- **Add:** - new functionality has been added.
- **Change:** - changes in methods, project setup, variables, etc.
- **Delete:** - something has been removed.
- **Fix:** - part of code/functionality has been performed.
- **Refactor:** - signifcant enough change in the logic, which required refactoring.
- **Tags to commits** - First commit, then add appropriate tag to the new commit. Otherwise the tag will be placed on an old commit.

## Submitted issues

- [Canvas problems in Jest](https://github.com/hustcc/jest-canvas-mock/issues/2#issuecomment-468600415)
- [JSDOM mocking canvas](https://github.com/jsdom/jsdom/issues/1782#issuecomment-468602403)
