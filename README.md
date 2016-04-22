## Ionic 2 Demo / Seed Project : Karma + Protractor + Travis
[![Build Status](https://travis-ci.org/lathonez/clicker.svg?branch=master)](https://travis-ci.org/lathonez/clicker) [![codecov.io](https://codecov.io/github/lathonez/clicker/coverage.svg?branch=master)](https://codecov.io/github/lathonez/clicker?branch=master) [![Join the chat at https://gitter.im/lathonez/clicker](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/lathonez/clicker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
 [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Dependency Status](https://david-dm.org/lathonez/clicker.svg)](https://david-dm.org/lathonez/clicker) [![devDependency Status](https://david-dm.org/lathonez/clicker/dev-status.svg)](https://david-dm.org/lathonez/clicker#info=devDependencies)
<p align="center">
  <img src="http://lathonez.github.io/images/ionic2_unit_testing/clicker.gif" alt=""/>

</p>
## Install & Start

```bash
git clone https://github.com/lathonez/clicker.git
cd clicker
npm install       # or `npm run reinstall` if you get an error
npm start         # start the application (ionic serve)
```

## Run Unit Tests
```bash
npm test          # run unit tests
```

## Debug Unit tests
```bash
npm run watch   # in one window - build all the tests and start watching for changes
npm run karma        # start karma in debug mode: mutli run Chrome, hit `debug` to get going
```

## Run E2E
```
# e2e (aka. end-to-end, integration) - In two different shell windows
# Make sure you don't have a global instance of Protractor

# npm run webdriver-update <- You will need to run this the first time
npm start
npm run e2e
```

## Blog Topics

* [Unit testing walkthrough](http://lathonez.com/2016/ionic-2-unit-testing/)
* [E2E testing walkthrough](http://lathonez.com/2016/ionic-2-e2e-testing/)
* [Removing assets from the APK](http://lathonez.com/2016/cordova-remove-assets/)

## Contribute
Issues and PRs are welcome, see the [roadmap sticky](https://github.com/lathonez/clicker/issues/38)

## Acks

* This started out as a fork of [Angular 2 Seed](https://github.com/mgechev/angular2-seed) and would not be possible without it
* @bengro for the lightweightify inspiration (#68)
* @ric9176 and @DanielaGSB for E2E tests (#50)
* [Everyone else](https://github.com/lathonez/clicker/graphs/contributors) for the advice, help, PRs etc

## Changelog

See the changelog [here](https://github.com/lathonez/clicker/CHANGELOG.md)

## Dependencies

**Angular 2:** 2.0.0-beta.15
**Ionic:** 2.0.0-beta.6

External dependencies are listed here to justify their inclusion and to enable their removal if you aren't using the related functionality.

* codecov.io: sending unit test coverage reports to codecov.io
* gulp-load-plugins: helper to load other gulp plugins easily
* gulp-rename: rename a file in gulp, used to patch Ionic's app decorator
* gulp-tslint: access tslint from gulp
* gulp-typescript: transpile typescript in gulp
* gulp-util: logging in gulp
* istanbul: unit test coverage reporter
* jasmine-core: jasmine coverage reporter
* jasmine-spec-reporter: e2e coverage reporter for jasmine
* karma: unit test runner
* karma-chrome-launcher: allows using chrome with Karma - chrome is used in Travis
* karma-coverage: unit test coverage reporter
* karma-jasmine: jasmine framework for Karma
* karma-mocha-reporter: mocha progress reporter for Karma
* karma-phantomjs-launcher: allows using phantom with Karma
* phantomjs-prebuilt: phantom headless browser
* protractor: e2e test runner
* remap-istanbul: remap unit test coverage using sourcemaps
* traceur: needed to prevent errors in Phantom
* ts-node: transpile gulpfile
* tslint: static code analysis for typescript
* tslint-eslint-rules: eslint rules plugin for tslint
* typescript: transpile e2e tests
* typings: type definitions manager
