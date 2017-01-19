## Ionic 2 Demo / Seed Project : Karma + Protractor + Travis
[![Build Status](https://travis-ci.org/lathonez/clicker.svg?branch=master)](https://travis-ci.org/lathonez/clicker) [![Build status](https://ci.appveyor.com/api/projects/status/github/lathonez/clicker?svg=true)](https://ci.appveyor.com/project/lathonez/clicker) [![codecov.io](https://codecov.io/github/lathonez/clicker/coverage.svg?branch=master)](https://codecov.io/github/lathonez/clicker?branch=master) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Dependency Status](https://david-dm.org/lathonez/clicker/status.svg)](https://david-dm.org/lathonez/clicker) [![devDependency Status](https://david-dm.org/lathonez/clicker/dev-status.svg)](https://david-dm.org/lathonez/clicker#info=devDependencies)
<p align="center">
  <img src="http://lathonez.github.io/images/ionic2_unit_testing/clicker.gif" alt=""/>
</p>

## Install & Start

You need to be running [the latest node LTS](https://nodejs.org/en/download/) or newer

```bash
git clone https://github.com/lathonez/clicker.git
cd clicker
npm install       # or `npm run reinstall` if you get an error
npm start         # start the application (ionic serve)
```

Running as root? You probably shouldn't be. If you need to: `npm run postinstall` before `npm start`. [#111](https://github.com/lathonez/clicker/issues/111) for more info.

## Build for a specific environment (#135)
```bash
ENV=qa ionic build android    # uses ./config.xml and ./config/config.ts from ./config/qa
```

## Run Unit Tests
```bash
npm test          # run unit tests
```

## Run E2E
```
npm run e2e
```

## Blog Topics

* [Unit testing walkthrough](http://lathonez.com/2017/ionic-2-unit-testing/)
* [E2E testing walkthrough](http://lathonez.com/2017/ionic-2-e2e-testing/)
* [Removing assets from the APK](http://lathonez.com/2016/cordova-remove-assets/)

## Contribute
PRs are welcome, see the [roadmap sticky](https://github.com/lathonez/clicker/issues/38)

## Help

* If you can't get the testing working, raise an issue
* If you have a general question about unit testing (e.g. how can I write a unit test for `some-module`), see [#191](https://github.com/lathonez/clicker/issues/191)

## Acks

* This started out as a fork of [Angular 2 Seed](https://github.com/mgechev/angular2-seed) and would not be possible without it
* @bengro for the lightweightify inspiration (#68)
* @ric9176 and @DanielaGSB for E2E tests (#50)
* @tja4472 for the ngrx implementation (#133)
* [Everyone else](https://github.com/lathonez/clicker/graphs/contributors) for the advice, help, PRs etc

## Changelog

See the changelog [here](https://github.com/lathonez/clicker/blob/master/CHANGELOG.md)

## Dependencies

* **@Angular:** 2.2.1
* **angular-cli**: 1.0.0-beta.25-5
* **Ionic:** 2.0.0-rc.5