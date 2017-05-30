## Ionic 2 Demo / Seed Project : Karma + Protractor + Travis
[![Build Status](https://travis-ci.org/lathonez/clicker.svg?branch=master)](https://travis-ci.org/lathonez/clicker) [![Build status](https://ci.appveyor.com/api/projects/status/github/lathonez/clicker?svg=true)](https://ci.appveyor.com/project/lathonez/clicker) [![codecov.io](https://codecov.io/github/lathonez/clicker/coverage.svg?branch=master)](https://codecov.io/github/lathonez/clicker?branch=master) [![Code Climate](https://codeclimate.com/github/lathonez/clicker/badges/gpa.svg)](https://codeclimate.com/github/lathonez/clicker) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Dependency Status](https://david-dm.org/lathonez/clicker/status.svg)](https://david-dm.org/lathonez/clicker) [![devDependency Status](https://david-dm.org/lathonez/clicker/dev-status.svg)](https://david-dm.org/lathonez/clicker#info=devDependencies)
<p align="center">
  <img src="http://lathonez.github.io/images/ionic2_unit_testing/clicker.gif" alt=""/>
</p>

## Ionic's official repo

Ionic have created an official unit testing example over at [driftyco/ionic-unit-testing-example](https://github.com/driftyco/ionic-unit-testing-example). To understand why this repo still exists, see [#239](https://github.com/lathonez/clicker/issues/239), where we looked at deprecating `clicker` in favour of `ionic-unit-testing-example`.

Broadly, the official example repo:

* Is not mature or production ready
* Is intended as a simple example only / will not be supported by Ionic
* Does not support e2e
* Does not use `@angular/cli` and thus lacks testing support from the wider ng2 community

For ~large or production projects, I suggest using clicker. For small apps / side projects the official example should suffice.

## Install & Start

You need to be running [the latest node LTS](https://nodejs.org/en/download/) or newer

```bash
git clone https://github.com/lathonez/clicker.git
cd clicker
npm install
npm start         # start the application (ionic serve)
```

Running as root? You probably shouldn't be. If you need to: `npm run postinstall` before `npm start`. [#111](https://github.com/lathonez/clicker/issues/111) for more info.

## Run Unit Tests
```bash
npm test          # run unit tests
```

## Run E2E
```
npm run e2e
```

## Run E2E on Android Emulator

Some extra setup is needed to test your Ionic app on an emulator. The
following is based on the configuration file at
[this version of clicker](https://github.com/balakirevs/clicker). 

Install and/or update the
Android SDK.  Create a virtual device for emulation. 
*protractor-android.config*
assumes a Nexus 5X, running Android 7.1.1.

Add the Android platform to your app and deploy

```
ionic platform add android

ionic emulate android
```

The app should deploy and you should be able to interact with it. 

If so, edit the *capabilities* object in *protractor-android.conf.js* to
have the correct device name, platform version, AVD name, and full path
to your Android `android-debug.apk` file. Note: shell shortcuts such as `~/` will not
work here.

```bash
  capabilities: {
    browserName: '',
    'appium-version': '1.6.4',
    platformName: 'android',
    platformVersion: '7.1.1',
    deviceName: 'emulator-5554',
    autoWebview: true,
    avd: 'Nexus_5X_API_25',
    nativeInstrumentsLib: true,
    app: "/full/path/to/your/apk/android-debug.apk"
  },
```

Install [Appium[(http://appium.io/). Appium is a server that
will relay information between Protractor and the emulator.

```
npm install appium@latest -g
```

Start Appium.

```
appium
```

Start the emulator again, if you stopped it.

```
ionic emulate android
```


After Appium and the emulator are both ready, run the E2E Android emulator test script.

```
npm run e2e-android
```

If everything works, you should see some of the Protractor tests executing on
the emulator. Others fail right now with errors related to what is and is
not clickable. 

### Troubleshooting ###

If you get an error about ChromeDriver being out of date, download
the latest version. *package.json* defines an "appium" script that
assumes you put ChromeDriver in */usr/local/bin*.  Start Appium
using the command

```
npm run appium
```

If you get any other Appium errors, try installing and running
[appium-doctor](https://www.npmjs.com/package/appium-doctor).


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

## Updated for:

* **@angular/*:** 4.0.0
* **@angular/cli:**: 1.0.0
* **@ionic-angular:** 3.0.1
