<a name="1.8.0"></a>
# 1.8.0 (2016-06-30)

### Features

* **Unit Test**: Upgrade karma to 1.1.0 [#110](https://github.com/lathonez/clicker/issues/110) ([1a061b7](https://github.com/lathonez/clicker/commit/1a061b7))

<a name="1.7.1"></a>
# 1.7.1 (2016-06-29)

### Bug Fixes

* **E2E**: Problems introduced with 1.7.0, missing menu, incorrect title, and transition timing on Page2 ([c0562f0](https://github.com/lathonez/clicker/commit/c0562f0))

<a name="1.7.0"></a>
# 1.7.0 (2016-06-29)

### Features

* **Unit Test**: Implement Barrels and move mocks to individual files PR [#109](https://github.com/lathonez/clicker/pull/109) ([0734e45](https://github.com/lathonez/clicker/commit/0734e45))
* **Update**: Update to Ionic 2.0.0.beta.10 ([1b1b2e3](https://github.com/lathonez/clicker/commit/1b1b2e3))

<a name="1.6.0"></a>
# 1.6.0(2016-06-19)

### Features

* **Unit Test**: Centralise Testing DI Boilerplate ([#103](https://github.com/lathonez/clicker/issues/103)) ([4769372](https://github.com/lathonez/clicker/commit/4769372))

<a name="1.5.0"></a>
# 1.5.0 (2016-06-18)

### Features

* **Update**: Update to Ionic 2.0.0.beta.9 ([a61432c](https://github.com/lathonez/clicker/commit/a61432c))

<a name="1.4.0"></a>
# 1.4.0 (2016-06-07)

### Features

* **Update**: Update to Ionic 2.0.0.beta.8 PR [#98](https://github.com/lathonez/clicker/pull/98) ([5f8d5fb](https://github.com/lathonez/clicker/commit/5f8d5fb20f456d2e8b98d9db1098c51588e6568e))

<a name="1.3.1"></a>
# 1.3.1 (2016-05-25)

### Bug Fixes

* **App**: Duplicate include of Reflect.js ([#96](https://github.com/lathonez/clicker/issues/96)) ([15bd2e6](https://github.com/lathonez/clicker/commit/15bd2e6))

<a name="1.3.0"></a>
# 1.3.0 (2016-05-22)

### Features

* **Update**: Update to Ionic 2.0.0.beta.7 and Angular 2.0.0.rc.1 PR [#93](https://github.com/lathonez/clicker/pull/93) big update due to Angular RC1 ([bc392c3](https://github.com/lathonez/clicker/commit/bc392c3))

<a name="1.2.0"></a>
# 1.2.0 (2016-04-28)

### Features

* **Unit Test**: Use browserify within Karma (see below) ([5f096f7](https://github.com/lathonez/clicker/commit/5f096f7))
* **Unit Test**: Remove glob, gulp-load-plugins and gulp-util dependencies, refactor gulpfile to remove most typing dependencies ([c67beae](https://github.com/lathonez/clicker/commit/c67beae))

### Browserify in Karma

* actually enables sourcemaps in Karma
* quicker builds
* remove the requirement for remapping coverage as it happens with browserify
* remove `test/config.ts` as it was only being used in gulpfile.ts, and as we're making everything lighter it seems unlikely to be extended
* remove `test/app.stub.js` Now using a workaround in Karma instead. See ([#79](https://github.com/lathonez/clicker/issues/79))

<a name="1.1.1"></a>
# 1.1.1 (2016-04-27)

### Bug Fixes

* **Unit Test**: Merge PR [#87](https://github.com/lathonez/clicker/pull/87) which sorts out Karma's random "Formatting Errors" ([f3b6641](https://github.com/lathonez/clicker/commit/f3b6641))
* **E2E**: Remove absolute path for protractor ([#83](https://github.com/lathonez/clicker/issues/83)) ([5894a5a](https://github.com/lathonez/clicker/commit/5894a5a))
* **Unit Test**: Increase browser timeout ([#82](https://github.com/lathonez/clicker/issues/82)) ([ff59b33](https://github.com/lathonez/clicker/commit/ff59b33))

<a name="1.1.0"></a>
# 1.1.0 (2016-04-23)

### Features

* **Update**: Update to Ionic 2.0.0.beta.6 ([a571e7c](https://github.com/lathonez/clicker/commit/a571e7c))

### Bug Fixes

* **Unit Test**: Merge PR [#80](https://github.com/lathonez/clicker/pull/80) removing a trailing `;` ([e8fb205](https://github.com/lathonez/clicker/commit/e8fb205))

<a name="1.0.0"></a>
# 1.0.0 (2016-04-20)

### Features

* **Unit Test**: [Lightweightify](https://github.com/lathonez/clicker/issues/68) ([440ac08](https://github.com/lathonez/clicker/commit/440ac08))

### BREAKING CHANGES

Lightweightify is a major refactor to the framework. See [the issue](https://github.com/lathonez/clicker/issues/68) for further info.

**The main changes are listed below**
* unit tests are now bundled into `test.bundle.js`
* sourcemaps are now produced @ `test.bundle.js.map`
* coverage is remapped onto source Typescript meaning that transpiled javascript is no longer pushed to `./coverage/source`
* gulpfile.ts has had a [large refactor](https://github.com/lathonez/clicker/commit/3119b92) away from the ng2-seed style and back toward what everyone else seems to be doing
* `app.stub.ts` has been renamed and largely re-written in `app.stub.js`, as was required by a change in the process

**The following files have been removed as they are no longer required**
* .travis/push_built_tests.sh
* coverage/source/**.js
* test/ionic-angular.js
* test/test-main.js

**Migration**

I strongly suggest adopting the new framework as it brings with it many benefits. I will update this if firsthand information is forthcoming
* nuke the `./test` and replace it with the new version. Note that any proxies for external modules in `karma.conig.js` are no longer required, thus there should be no project specifics in that folder
* remove the `export function main()` wrapper from your `*.spec`: [example](https://github.com/lathonez/clicker/commit/f1b72ee)
* merge `package.json` (just for dependencies), some have been removed, some added. Note dependencies are now documented in README.md

Hopefully that should be it.

<a name="0.12.0"></a>
# 0.12.0 (2016-04-13)

### Features

* **Deps**: Merge PR [#71](https://github.com/lathonez/clicker/pull/71) correcting `ionic-gulp-webpack` dependency ([efc9cdf](https://github.com/lathonez/clicker/commit/efc9cdf))
* **Update**: Upgrade deps (angular2, etc) to latest Ionic 2.0.0.beta.4 ([5649061](https://github.com/lathonez/clicker/commit/5649061))

<a name="0.11.0"></a>
# 0.11.0 (2016-03-25)

### Bug Fixes

* **Docs**: Add "two shell windows" to README.md after someone misread it ([69b5ccb](https://github.com/lathonez/clicker/commit/69b5ccb))
* **Travis**: Adding install for Phantom manually to get around this 403 in Travis ([aa6173a](https://github.com/lathonez/clicker/commit/aa6173a))

### Features

* **Update**: Merge PR [#62](https://github.com/lathonez/clicker/pull/62) update to Ionic 2.0.0.beta.3 ([f2f66d9](https://github.com/lathonez/clicker/commit/f2f66d9))

<a name="0.10.1"></a>
# 0.10.1 (2016-03-22)

### Bug Fixes

* **Deps**: Merge PR [#60](https://github.com/lathonez/clicker/pull/60) missing `gulp-util` ([4398038](https://github.com/lathonez/clicker/commit/4398038))

<a name="0.10.0"></a>
# 0.10.0 (2016-03-18)

### Bug Fixes

* **E2E**: Use sendKeys workaround to send delayed keystrokes for randomly failing e2e ([642973d](https://github.com/lathonez/clicker/commit/642973d))
* **Build**: Merge PR [#56](https://github.com/lathonez/clicker/pull/56) remove `;` ([9ecdbf4](https://github.com/lathonez/clicker/commit/9ecdbf4))

### Features

* **Travis**: Testing e2e in Travis ([4a6f5eb](https://github.com/lathonez/clicker/commit/4a6f5eb))
* **Unit Test**: DOM test skeleton for @Page Clicker List ([65bf5d5](https://github.com/lathonez/clicker/commit/65bf5d5))

<a name="0.9.0"></a>
# 0.9.0 (2016-03-12)

### Features

* **Build**: Hook into Ionic's gulpfile directly and remove ionic-app-lib ([6a4b17c](https://github.com/lathonez/clicker/commit/6a4b17c))

<a name="0.8.0"></a>
# 0.8.0 (2016-03-11)

### Features

* **E2E**: Merge PR [#50](https://github.com/lathonez/clicker/pull/50) containing e2e tests with protractor ([440d463](https://github.com/lathonez/clicker/commit/440d463))

<a name="0.7.0"></a>
# 0.7.0 (2016-03-09)

### Bug Fixes

* **Update**: Fixing CSS references broken in upgrade (again) ([40d682c](https://github.com/lathonez/clicker/commit/40d682c))

### Features

* **Update**: Upgrade deps (angular2, etc) to latest Ionic 2.0.0.beta.2 ([1e9cc11](https://github.com/lathonez/clicker/commit/1e9cc11))
* **E2E**: Starting groundwork for e2e testing based on ng2 seed ([36572b6](https://github.com/lathonez/clicker/commit/36572b6))

<a name="0.6.1"></a>
# 0.6.1 (2016-03-06)

### Bug Fixes

* **Build**: Count source and target files in buildlocker rather than relying on existance of a specific file in the target ([6137fd8](https://github.com/lathonez/clicker/commit/6137fd8))

<a name="0.6.0"></a>
# 0.6.0 (2016-03-05)

### Bug Fixes

* **Travis**: Ionic Framework .beta.18 was broken on Travis ([#24](https://github.com/lathonez/clicker/issues/24)), upgrade to .19 ([6003691](https://github.com/lathonez/clicker/commit/6003691))
* **Update**: Upgrade angular2 to beta.9 which supports typescript 1.8.* ([#9](https://github.com/lathonez/clicker/issues/9) ([d46f017])

### Features

* **Build**: Using Ionic's build tools in `ionic-app-lib` ([9005006](https://github.com/lathonez/clicker/commit/9005006))
* **Unit Test**: Enable form tests again after our PR is merged into Ionic ([#12](https://github.com/lathonez/clicker/issues/12)) ([aa726486](https://github.com/lathonez/clicker/commit/aa726486))
* **Build**: Improve workaround for `ionic-angular/index` by creating own references in `ionic-angular.js` ([#27](https://github.com/lathonez/clicker/issues/27)) ([21ba465](https://github.com/lathonez/clicker/commit/21ba465))

<a name="0.5.1"></a>
# 0.5.1 (2016-03-03)

### Bug Fixes

* **Update**: Update webpack css font reference ([#28](https://github.com/lathonez/clicker/pull/28)) ([c333f56](https://github.com/lathonez/clicker/commit/c333f56))

<a name="0.5.0"></a>
# 0.5.0 (2016-03-02)

### Features

* **Build**: Move conifg to `./test` ([#27](https://github.com/lathonez/clicker/issues/26)) ([f78363d](https://github.com/lathonez/clicker/commit/f78363d))
* **Update**: Update to Ionic 2.0.0.beta.1 ([#25](https://github.com/lathonez/clicker/issues/25)) ([67bad59](https://github.com/lathonez/clicker/commit/67bad59))
* **Build**: Use Cordova Hooks to prevent test files from ending up inside the apk ([82be26a](https://github.com/lathonez/clicker/commit/82be26a))

<a name="0.4.0"></a>
# 0.4.0 (2016-02-25)

### Bug Fixes

* **Deps**: Use explicit versioning in npm ([#17]](https://github.com/lathonez/clicker/issues/17)) ([90f677d](https://github.com/lathonez/clicker/commit/90f677d))

### Features

* **Deps**: Dependency Badge ([#13](https://github.com/lathonez/clicker/issues/13)) ([b30e24d](https://github.com/lathonez/clicker/commit/b30e24d))
* **Deps**: Migrate from tsd to typings ([#10](https://github.com/lathonez/clicker/issues/10)) ([120c02e](https://github.com/lathonez/clicker/commit/120c02e))
* **Build**: Move spec to source directory ([#11](https://github.com/lathonez/clicker/issues/11)) ([3d3650f4](https://github.com/lathonez/clicker/commit/3d3650f4))

<a name="0.3.1"></a>
# 0.3.1 (2016-02-24)

### Bug Fixes

* **Build**: Merge PR [#8](https://github.com/lathonez/clicker/pull/8) Fixing test file name ([f524bcf](https://github.com/lathonez/clicker/commit/f524bcf))

<a name="0.3.0"></a>
# 0.3.0 (2016-02-19)

### Bug Fixes

* **Unit Test**: Previously using a bunch of hacks accessing private control variables ([cc5c0a5](https://github.com/lathonez/clicker/commit/cc5c0a5))
* **App**: Need to use one or the other when typing ([cc2d919](https://github.com/lathonez/clicker/commit/cc2d919))

### Features

* **App**: Update tslint to enforce strict typing and change typescript to be strictly typed ([cc2d919](https://github.com/lathonez/clicker/commit/cc2d919))

<a name="0.2.0"></a>
# 0.2.0 (2016-02-18)

### Bug Fixes

* **Unit Test**: Misconfiguration in Karma ([5af7958](https://github.com/lathonez/clicker/commit/5af7958))
* **Unit Test**: Previously using toBeDefined, but they will always be defined! ([d8e1cf5](https://github.com/lathonez/clicker/commit/d8e1cf5))

### Features

* **Unit Test**: Using Angular2's DI to test component's in the DOM ([07f60bf](https://github.com/lathonez/clicker/commit/07f60bf))
* **App**: Utility function should be placed in `.catch` in any promise to debug errors ([0621169](https://github.com/lathonez/clicker/commit/07f60bf))

<a name="0.1.0"></a>
# 0.1.0 (2016-02-17)

### Bug Fixes

* **Update**: CSS was broken in Ionic upgrade ([98c13c4](https://github.com/lathonez/clicker/commit/98c13c4))
* **Update**: Icons were broken in Ionic upgrade ([c954c15](https://github.com/lathonez/clicker/commit/c954c15))

### Features

* **Update**: Upgrade deps (angular2, etc) to Ionic 2.0.0.beta.0 ([830ae8b](https://github.com/lathonez/clicker/commit/830ae8b))
* **App**: Adding MIT License ([a3475cf](https://github.com/lathonez/clicker/commit/a3475cf))

<a name="0.0.1"></a>
# 0.0.1 (2016-01-08)

### Features

* **App**: ([f8865b0](https://github.com/lathonez/clicker/commit/f8865b0))
* **Travis**: Build and deploy using Travis CI ([fb045f6](https://github.com/lathonez/clicker/commit/fb045f6))
* **Unit Test**: Initial unit test set up now working ([04a1028](https://github.com/lathonez/clicker/commit/04a1028))
* **App**: Clickers functionality including local storage ([9d04f8d](https://github.com/lathonez/clicker/commit/9d04f8d))
* **App**: Skeleton app using `ionic start --v2 --ts clickers` ([8bde84f](https://github.com/lathonez/clicker/commit/8bde84f))
