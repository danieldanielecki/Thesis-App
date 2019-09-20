# Thesis application

The following repository is for a source code of an Angular application developed during writing a Master's Thesis.

## Description

Focus is to achieve high quality and secure source code by using continuous security, many testing techniques, programming best practices, SecDevOps, Secure Software Development Life Cycle (SSDLC) and security analysis to measure how secure is the application. It contains number of different dependencies, first of all to speed up development, as well provides more opportunities to detect potential source of vulnerable source code during penetration testing phase. The application itself is equipped with Content Security Policy (CSP) Continuous Integration (CI)/Continuous Delivery (CD)/Continuous Deployment (CDE) integration, lots of external dependencies, PWA capabilities, rich front-end, security headers and whitelisting domains for external services. It's deployed to Firebase using many of its features (Cloud Firestore, Cloud Functions for Firebase, Cloud Storage for Firebase, Firebase Hosting, Firebase Security Rules) and uses Angular Universal for Server-Side Rendering (SSR). Nx plays a role as a monorepo and integrates nicely with End-to-End (E2E) and unit testing as well as other features. The used tools respectively were Cypress and Jest. The project assiociated with the thesis is available through the following links:

- Production environment: [https://thesisapp-16048.firebaseapp.com/](https://thesisapp-16048.firebaseapp.com/)
- Staging environment: [https://thesisapp-dev.firebaseapp.com/](https://thesisapp-16048.firebaseapp.com/)

## Commands

List of useful commands during development.

### docker

- `docker build -t IMAGE_NAME .` - build Docker image.
- `docker exec -it CONTAINER_NAMES sh` - enter the container.
- `docker images` - list Docker images.
- `docker ps` - show Docker container status.
- `docker run -p 4200:4200 IMAGE_NAME` - run Docker image with a specific image name.
- `docker stop CONTAINER_ID` - stop running container with specific ID.

### git

- `git add .` - add all changed files in the repository to the index.
- `git branch` - check project branches and highlight active branch.
- `git commit -m "commit message"` - create commit with a message.
- `git commit --amend` - edit unpushed commit with opening a default text editor.
- `git commit --amend -m "COMMIT MESSAGE"` - edit unpushed commit directly from command line.
- `git checkout BRANCH_NAME` - switch to a certain branch.
- `git diff --color-words` - display difference between commit, and working tree with distinguishing between words colors without breaking line where differences occured.
- `git diff --stat` - show number of changed lines for each file.
- `git log --all --decorate --graph --oneline` - log commits of repository in a human friendly way.
- `git merge --no-ff --no-commit BRANCH_NAME` - safe merging branch from certain branch to "master". Done after `git checkout BRANCH_NAME`, `git pull`, `git checkout master`, `git pull`.
- `git pull` - update local version of a project's repository from remote.
- `git push` - push commit to the repository.
- `git push --delete origin v0.0.0` - delete remote tag.
- `git push --tags` - push tags to the repository.
- `git push origin master:BRANCH_NAME` - push local Git branch to "master" branch in remote.
- `git reset HEAD~1` - remove unpushed commit.
- `git rm -r --cached ."` - remove completely, sometimes if .gitignore will be not updated just run it before git add.
- `git status` - display differences between the index file, and the current HEAD commit.
- `git status -sb` - same as `git status`, but in shorter version, and showing current branch.
- `git tag` - show tags from the repository.
- `git tag -a v0.0.0 -m "tag message"` - create tag on current commit with specific version, and message.
- `git tag -a v0.0.0 123abcde -m "Message here"` - add tag to certain commit.
- `git tag -d v0.0.0` - delete local tag.
- `git tag v0.0.0 v0.0.0^{} -f -m "new name here"` - change tag message of some specific tag.

### ng

- `ng build --project=MYAPP` - build project.
- `ng e2e` - run end-to-end tests.
- `ng generate app MYAPP` - generate new application, in Nx there can be multiple applications, and libraries in the same workspace.
- `ng generate component component-name --project=MYAPP` - generate new component, can be used as `ng generate directive|pipe|service|class|guard|interface|enum|module`.
- `ng generate lib mylib` - generate new library, in Nx there can be multiple applications, and libraries in the same workspace.
- `ng help` - show all available commands of the CLI.
- `ng lint` - perform static code analysis.
- `ng serve` - build, and serve project.
- `ng serve --project=MYAPP` - run local server in production environment, navigate to `http://localhost:4200/` in order to access it. Changes are detected automatically, and will server will reload the page once they will be detected.
- `ng test` - run unit tests.
- `ng version` - show version of Angular with its core dependencies.
- `ng update` - check which packages are ready to update.
- `ng update --all` - update all packages.
- `ng update PACKAGE_NAME` - update certain package.

### npm

- `npm audit` - display known vulnerabilities in dependencies.
- `npm audit fix` - fix known vulnerabilities in dependencies.
- `npm cache clean --force` - clean cache of npm.
- `npm info PACKAGE_NAME version` - show the newest version of certain package.
- `npm install PACKAGE_NAME@VERSION --save-exact` - install exact package version without "~" and "^", i.e. don't update automatically.
- `npm list` - show versions of installed packages in project.
- `npm list | grep PACKAGE_NAME` - show package details with its own depndencies.
- `npm list -g` - show versions of installed packages globally.
- `npm list --depth=0` - show versions of installed packages in project without its own dependencies.
- `npm list --depth=0 -g` - show versions of installed packages globallyn without its own dependencies.
- `npm outdated` - show outdated dependencies.
- `npm run dep-graph` - run dependency graph.
- `npm test -t "test-name"` - run only single test.

### others

- `npx jest --clearCache` - clear cache for Jest.
- For Angular CLI, and Nx more can be found on [Nx official project website](https://nrwl.io/nx/guide-nx-workspace), or [Angular CLI documentation](https://angular.io/cli). To simplify management of these commands Angular Console, as an extension to Visual Studio Code is used for more sophisticated scenarios.

## Commits convention

- **Add:** - new functionality has been added.
- **Change:** - changes in methods, project setup, variables, etc.
- **Delete:** - something has been removed.
- **Fix:** - part of code/functionality has been performed.
- **Improve:** - something has been improved, i.e. error handling, security etc.
- **Refactor:** - signifcant enough change in the logic, which required refactoring.
- **Update:** - at least one of application's dependencies has been updated.
- **Tags to commits** - First commit, then add appropriate tag to the new commit. Otherwise the tag will be placed on an old commit.

## Penetration Testing tools

The following tools have been used to investiage the application and validate security of the application:

- [Acunetix](https://www.acunetix.com/web-vulnerability-scanner/)
- [Burp Suite Professional](https://portswigger.net/burp)
- [Checkbot: SEO, Web Speed & Security Tester](https://chrome.google.com/webstore/detail/checkbot-seo-web-speed-se/dagohlmlhagincbfilmkadjgmdnkjinl?hl=en)
- [CryptCheck](https://tls.imirhil.fr/)
- [HTTrack Website Copier](https://en.kali.tools/?p=443)
- [ImmuniWeb](https://www.immuniweb.com/websec/?id=Oy27vLRH)
- [Maltego](https://www.paterva.com/buy/maltego-clients/maltego-ce.php)
- [Mozilla Observatory](https://observatory.mozilla.org/)
- [Nikto](https://cirt.net/Nikto2)
- [nmap](https://nmap.org/)
- [npm audit](https://docs.npmjs.com/cli/audit)
- [OWASP Zed Attack Proxy](https://www.zaproxy.org/)
- [Pentest-Tools](https://pentest-tools.com/home)
- [Security Headers](https://securityheaders.com/)
- [SiteCheck](https://sitecheck.sucuri.net/)
- [SlowHTTPTest](https://tools.kali.org/stress-testing/slowhttptest)
- [Skipfish](https://tools.kali.org/web-applications/skipfish)
- [Qualys SSL Labs](https://www.ssllabs.com/ssltest/)
- [TSLint](https://palantir.github.io/tslint/)
- [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg?hl=en)

## Scanning results

| Name of a web scanner                      | Score                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Checkbot: SEO, Web Speed & Security Tester | [92%](https://chrome.google.com/webstore/detail/checkbot-seo-web-speed-se/dagohlmlhagincbfilmkadjgmdnkjinl?hl=en) |
| CryptCheck                                 | [A](https://tls.imirhil.fr/https/thesisapp-16048.firebaseapp.com)                                                 |
| ImmuniWeb                                  | [A](https://www.immuniweb.com/websec/?id=Oy27vLRH)                                                                |
| Mozilla Observatory                        | [A+](https://observatory.mozilla.org/analyze/thesisapp-16048.firebaseapp.com)                                     |
| Pentest-Tools                              | [Low security risk](https://pentest-tools.com/home)                                                               |
| Security Headers                           | [A](https://securityheaders.com/?q=https://thesisapp-16048.firebaseapp.com)                                       |
| SiteCheck                                  | [Low security risk](https://sitecheck.sucuri.net/results/https/thesisapp-16048.firebaseapp.com)                   |
| Qualys SSL Labs                            | [A+](https://www.ssllabs.com/ssltest/analyze.html?d=thesisapp%2d16048.firebaseapp.com&latest)                     |

## Submitted issues and questions

This research caused opening many issues on GitHub and asking questions on Stack Overflow. These contributions are to: [Angular](https://angular.io/) with its [CLI](https://cli.angular.io/), [Angular Material](https://material.angular.io/), [Angular Universal](https://angular.io/guide/universal), [Firebase](https://firebase.google.com/), [Font Awesome](https://fontawesome.com/), [GitLab](https://about.gitlab.com/), [Helmet](https://helmetjs.github.io/), [Jest](https://jestjs.io/), [Mozilla Observatory](https://observatory.mozilla.org/), [NestJS](https://nestjs.com/), [Nodemailer](https://nodemailer.com/about/), [npm](https://www.npmjs.com/), [Nx](https://nx.dev/), [Three.js](https://threejs.org/), [TypeScript](https://www.typescriptlang.org/) and several other dependencies used during this project.

### GitHub issues

- [RangeError: Maximum call stack size exceeded](https://github.com/VincentGarreau/particles.js/issues/369)
- ["Overwriting" tsconfig when generating a new lib](https://github.com/nrwl/nx/issues/1136)
- [Smarter tsconfig.lib.json for Angular/TypeScript compiler options](https://github.com/nrwl/nx/issues/1142)
- [Dyslexia & Night modes in Angular Material button](https://github.com/OswaldLabsOpenSource/agastya/issues/116)
- [Improve semantics of error message for incorrectly imported lazy loaded FeatureModule in AppModule](https://github.com/angular/angular-cli/issues/14065)
- [Docs: lazy routing](https://github.com/nrwl/nx/issues/1255)
- [Centering mat-hint](https://github.com/angular/components/issues/15831)
- [Add docs for unit testing](https://github.com/FortAwesome/angular-fontawesome/issues/135)
- [Directives for SVG icons](https://github.com/ionic-team/ionicons/issues/684)
- [Improve documentation FileValidator](https://github.com/merlosy/ngx-material-file-input/issues/30)
- [Accepting multiple files [demo/docs improvement]](https://github.com/merlosy/ngx-material-file-input/issues/29)
- [Dial code in input field](https://github.com/gauravsoni119/ng2-tel-input/issues/42)
- [z-index of flags](https://github.com/gauravsoni119/ng2-tel-input/issues/43)
- [Allow Files (_._)](https://github.com/merlosy/ngx-material-file-input/issues/31)
- [Extra space at the end of title/subtitles](https://github.com/bootsoon/ng-circle-progress/issues/80)
- [Renderer2 breaks on unit tests](https://github.com/angular/angular/issues/30865)
- [Demo](https://github.com/nest-modules/mailer/issues/40)
- [Update to Angular 8](https://github.com/vitalii-andriiovskyi/ngx-owl-carousel-o/issues/37)
- [Bug: `npm run lint` fails on freshly generated project](https://github.com/nrwl/nx/issues/1674)
- ["ReferenceError: window is not defined" when rendering on the server](https://github.com/OswaldLabsOpenSource/agastya/issues/240)
- [`featurePolicy` is not included in Helmet package](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37627)
- [Content Security Policy (CSP) not correct](https://github.com/Ismaestro/angular8-example-app/issues/54)
- [1.5.0 breaks when rendering on the server](https://github.com/bootsoon/ng-circle-progress/issues/97)
- [Add support for Mutation Testing](https://github.com/nrwl/nx/issues/1749)
- [Add ngrev](https://github.com/nrwl/nx/issues/1753)
- [mprovement fo passing --min-score when printing report](https://github.com/mozilla/observatory-cli/issues/42)
- [Header report-uri deprecated](https://github.com/helmetjs/helmet/issues/202)
- [Header require-sri-for deprecated](https://github.com/helmetjs/helmet/issues/203)

### Stack Overflow questions

- [CommonJS modules in](https://stackoverflow.com/questions/54999435/commonjs-modules-in)
- [Angular Material datapicker with custom formats AND filtering available days](https://stackoverflow.com/questions/56005260/angular-material-datapicker-with-custom-formats-and-filtering-available-days)
- [Can't mock Renderer2 in Jest](https://stackoverflow.com/questions/56429209/cant-mock-renderer2-in-jest)
- [Firebase storage security rules 400 error issue “Permission denied. Could not access bucket …” (on deployment, whilst working on localhost)](https://stackoverflow.com/questions/57304522/firebase-storage-security-rules-400-error-issue-permission-denied-could-not-ac)
- [Explicit npm package versions are more secure?](https://stackoverflow.com/questions/57371336/explicit-npm-package-versions-are-more-secure)
- [Payload size in Firebase reverse-proxy](https://stackoverflow.com/questions/57377776/payload-size-in-firebase-reverse-proxy)
- [Is setting up XSRF-TOKEN on the server still required with HttpClientXsrfModule?](https://stackoverflow.com/questions/57391940/is-setting-up-xsrf-token-on-the-server-still-required-with-httpclientxsrfmodule)
- [THREE.WebGLRenderer: NotYetImplemented ~ Server-Side Rendering (SSR) Angular Universal + NestJS](https://stackoverflow.com/questions/57408980/three-webglrenderer-notyetimplemented-server-side-rendering-ssr-angular-uni)
- [Root path not rendering properly](https://stackoverflow.com/questions/57411644/root-path-not-rendering-properly)
- [ERROR ReferenceError: particlesJS is not defined ~ Angular Universal + Webpack](https://stackoverflow.com/questions/57427002/error-referenceerror-particlesjs-is-not-defined-angular-universal-webpack)
- [TypeError: provideModuleMap is not a function ~ NestJS](https://stackoverflow.com/questions/57431624/typeerror-providemodulemap-is-not-a-function-nestjs)
- [How to get attachmens from Cloud Storage for Firebase to Nodemailer](https://stackoverflow.com/questions/57433706/how-to-get-attachmens-from-cloud-storage-for-firebase-to-nodemailer)
- [How to use @types/csurf? ~ TypeScript ~ csurf ~ typings](https://stackoverflow.com/questions/57496109/how-to-use-types-csurf-typescript-csurf-typings)
- [TS2339: Property 'featurePolicy' does not exist on type 'Helmet'](https://stackoverflow.com/questions/57497817/ts2339-property-featurepolicy-does-not-exist-on-type-helmet)
- [What is bivariant parameter? ~ TypeScript](https://stackoverflow.com/questions/57499459/what-is-bivariant-parameter-typescript)
- [How to exclude livereload dependency from NestJS/Angular Universal?](https://stackoverflow.com/questions/57534050/how-to-exclude-livereload-dependency-from-nestjs-angular-universal/57854379#57854379)
- [Your configured registry does not support audit requests ~ On npm audit](https://stackoverflow.com/questions/57536939/your-configured-registry-does-not-support-audit-requests-on-npm-audit)
- [Cloud Storage for Firebase limit size of (combined) multiple file upload](https://stackoverflow.com/questions/57539021/cloud-storage-for-firebase-limit-size-of-combined-multiple-file-upload)
- [Firebase Hosting doesn't has firewall?](https://stackoverflow.com/questions/57543829/firebase-hosting-doesnt-has-firewall)
- [Why unsecure/non-strict compilers rules in TypeScript are disabled by default?](https://stackoverflow.com/questions/57748162/why-unsecure-non-strict-compilers-rules-in-typescript-are-disabled-by-default)
- [ERROR for site owner: Invalid site key ~ Google reCAPTCHA ~ GitLab CI](https://stackoverflow.com/questions/57790211/error-for-site-owner-invalid-site-key-google-recaptcha-gitlab-ci)

## Summary

These findings have major 3 conclusions:

1. SSR causes breaking CSP due to `unsafe-eval` and `unsafe-inline` by its design. The solution supposed to be nonce-based CSP.
2. Exclusion of cookies security and protection against CSRF. Creating custom interceptors (which is a bit advanced) looks like a solution to solve this problem. Still, to make CSRF working setting `httpOnly` to `false` in cookies is required. In such a way cookies would be accessible not only for the web server, which is not recommended because the cookie becomes vulnerable to theft of modification by malicious script.
3. Niche findings from Skipfish related with injection (server-side XML, shell, query).

Moreover, around 1,500 vulnerabilities have been detected by using `npm audit` in the GitLab CI. Docker containerization helps to abstract working environment. Stirct compilers rules are disabled by default and TypeScript reduces number of bugs by 15% according to `To Type or Not to Type: Quantifying Detectable Bugs in JavaScript`. Many things have been automated and are integral part of the GitLab CI.

## Technological stack

- [Agastya](https://oswaldlabs.com/platform/agastya/)
- [Angular](https://angular.io/) (incl. [AngularFire](https://github.com/angular/angularfire2), [Angular CLI](https://cli.angular.io/), [Angular Flex-Layout](https://github.com/angular/flex-layout), [Angular Material](https://material.angular.io/), [Angular Universal](https://angular.io/guide/universal), [Schematics](https://material.angular.io/guide/schematics))
- APIs ([MailChimp](https://mailchimp.com/developer/), [reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html))
- [Cypress](https://www.cypress.io/)
- [Docker](https://www.docker.com/)
- [Express](https://expressjs.com/)
- [Firebase](https://firebase.google.com/) (incl. [Cloud Firestore](https://firebase.google.com/products/firestore), [Cloud Functions for Firebase](https://firebase.google.com/products/functions/), [Cloud Storage for Firebase](https://firebase.google.com/products/storage/), [Firebase Hosting](https://firebase.google.com/products/hosting/), [Firebase Security Rules](https://firebase.google.com/docs/rules))
- [Font Awesome](https://fontawesome.com/)
- [GitLab](https://about.gitlab.com/) (incl. [GitLab CI/CD](https://docs.gitlab.com/ee/ci/))
- [Google Tag Manager](https://tagmanager.google.com/#/home) ([Google Analytics](https://analytics.google.com/analytics/web/), [Hotjar](https://www.hotjar.com/))
- [Hammer.js](https://hammerjs.github.io/)
- [Helmet](https://helmetjs.github.io/)
- [HTML](https://www.w3schools.com/html/)
- [International Telephone Input](https://intl-tel-input.com/)
- [Jest](https://jestjs.io/)
- [Moment.js](https://momentjs.com/)
- [NestJS](https://nestjs.com/)
- [ng-circle-progress](https://github.com/bootsoon/ng-circle-progress)
- [ng2-tel-input](https://github.com/gauravsoni119/ng2-tel-input)
- [ngx-gallery](https://lukasz-galka.github.io/ngx-gallery-demo/)
- [ngx-material-file-input](https://merlosy.github.io/ngx-material-file-input/)
- [Nodemailer](https://nodemailer.com/about/)
- [npm](https://www.npmjs.com/) (incl. [npm audit-ci](https://github.com/IBM/audit-ci))
- [Nx](https://nx.dev/) (incl. [Nx CLI](https://nx.dev/web/guides/cli))
- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)
- [particles.js](https://vincentgarreau.com/particles.js/)
- [Prettier](https://prettier.io/)
- [RxJS](https://rxjs-dev.firebaseapp.com/)
- [SCSS](https://sass-lang.com/documentation/syntax#scss)
- [Three.js](https://threejs.org/)
- [TSLint](https://palantir.github.io/tslint/) (incl. [TSLint security rules](https://github.com/webschik/tslint-config-security))
- [TypeScript](https://www.typescriptlang.org/)
- [webpack](https://webpack.js.org/)
