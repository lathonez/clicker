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
# e2e (aka. end-to-end, integration) - In two different shell windows
# Make sure you don't have a global instance of Protractor

npm start
npm run e2e
```

## Blog Topics

* [Unit testing walkthrough](http://lathonez.com/2016/ionic-2-unit-testing/)
* [E2E testing walkthrough](http://lathonez.com/2016/ionic-2-e2e-testing/)
* [Removing assets from the APK](http://lathonez.com/2016/cordova-remove-assets/)
* [Unifying DI Boilerplate](http://lathonez.com/2016/unify-di-boilerplate/)

## Contribute
Issues and PRs are welcome, see the [roadmap sticky](https://github.com/lathonez/clicker/issues/38)

## Acks

* This started out as a fork of [Angular 2 Seed](https://github.com/mgechev/angular2-seed) and would not be possible without it
* @bengro for the lightweightify inspiration (#68)
* @ric9176 and @DanielaGSB for E2E tests (#50)
* @tja4472 for the ngrx implementation (#133)
* [Everyone else](https://github.com/lathonez/clicker/graphs/contributors) for the advice, help, PRs etc

## Changelog

See the changelog [here](https://github.com/lathonez/clicker/blob/master/CHANGELOG.md)

## Dependencies

* **@Angular:** 2.1.1
* **Ionic:** 2.0.0-rc.2