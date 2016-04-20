<a name="1.0.0"></a>
# 1.0.0 (2016-04-20)

### Features

* **[#68](https://github.com/lathonez/clicker/issues/68)** Lightweightify ([commitHash](https://github.com/lathonez/clicker/commit/commitHash))

### BREAKING CHANGES

Lightweightify is a major refactor to the framework. See [the issue](https://github.com/lathonez/clicker/issues/68) for further info.

**The main changes are listed below:**
* unit tests are now bundled into `test.bundle.js`
* sourcemaps are now produced @ `test.bundle.js.map`
* coverage is remapped onto source Typescript meaning that transpiled javascript is no longer pushed to `./coverage/source`
* gulpfile.ts has had a [large refactor](https://github.com/lathonez/clicker/commit/3119b92) away from the ng2-seed style and back toward what everyone else seems to be doing
* `app.stub.ts` has been renamed and largely re-written in `app.stub.js`, as was required by a change in the process

**The following files have been removed as they are no longer required:**
* .travis/push_built_tests.sh
* coverage/source/**.js
* test/ionic-angular.js
* test/test-main.js

**Migration:**

I strongly suggest adopting the new framework as it brings with it many benefits. I will update this if firsthand information is forthcoming:

* nuke the `./test` and replace it with the new version. Note that any proxies for external modules in `karma.conig.js` are no longer required, thus there should be no project specifics in that folder
* remove the `export function main()` wrapper from your `*.spec`: [example](https://github.com/lathonez/clicker/commit/f1b72ee)
* merge `package.json` (just for dependencies), some have been removed, some added. Note dependencies are now documented in README.md

Hopefully that should be it.

<a name="0.12.0"></a>
# 0.12.0 (2016-04-13)

### Features

* **[#71](https://github.com/lathonez/clicker/pull/71)** Merge PR 71 correcting `ionic-gulp-webpack` dependency ([efc9cdf](https://github.com/lathonez/clicker/commit/efc9cdf))
* **Ionic 2.0.0.beta.4** Upgrade deps (angular2, etc) match latest Ionic ([5649061](https://github.com/lathonez/clicker/commit/5649061))

<a name="0.11.0"></a>
# 0.11.0 (2016-03-25)

### Bug Fixes

* **Clarify Readme** Add "two shell windows" to README.md after someone misread it ([69b5ccb](https://github.com/lathonez/clicker/commit/69b5ccb))
* **403 Phantom Workaround** Adding install for Phantom manually to get around this 403 in Travis ([aa6173a](https://github.com/lathonez/clicker/commit/aa6173a))

### Features

* **[#62](https://github.com/lathonez/clicker/pull/62)** Merge PR 62 update to latest ([f2f66d9](https://github.com/lathonez/clicker/commit/f2f66d9))

<a name="0.10.1"></a>
# 0.10.1 (2016-03-22)

### Bug Fixes

* **[#60](https://github.com/lathonez/clicker/pull/60)** Merge PR 60 missing `gulp-util` ([4398038](https://github.com/lathonez/clicker/commit/4398038))

<a name="0.10.0"></a>
# 0.10.0 (2016-03-18)

### Bug Fixes

* **SendKeys** Use sendKeys workaround to send delayed keystrokes for randomly failing e2e ([642973d](https://github.com/lathonez/clicker/commit/642973d))
* **[#56](https://github.com/lathonez/clicker/pull/56)** Merge PR 56 remove `;` ([9ecdbf4](https://github.com/lathonez/clicker/commit/9ecdbf4))

### Features

* **e2e CI** Testing e2e in Travis ([4a6f5eb](https://github.com/lathonez/clicker/commit/4a6f5eb))
* **@Page DOM** DOM test skeleton for @Page Clicker List ([65bf5d5](https://github.com/lathonez/clicker/commit/65bf5d5))

<a name="0.9.0"></a>
# 0.9.0 (2016-03-12)

### Features

* **remove ionic-app-lib** Hook into Ionic's gulpfile directly and remove ionic-app-lib ([6a4b17c](https://github.com/lathonez/clicker/commit/6a4b17c))

<a name="0.8.0"></a>
# 0.8.0 (2016-03-11)

### Features

* **[#50](https://github.com/lathonez/clicker/pull/50)** Merge PR 50 containing e2e tests with protractor ([440d463](https://github.com/lathonez/clicker/commit/440d463))

<a name="0.7.0"></a>
# 0.7.0 (2016-03-09)

### Bug Fixes

* **CSS** Fixing CSS references broken in upgrade (again) ([40d682c](https://github.com/lathonez/clicker/commit/40d682c))

### Features

* **Ionic 2.0.0.beta.3** Upgrade deps (angular2, etc) match latest Ionic ([1e9cc11](https://github.com/lathonez/clicker/commit/1e9cc11))
* **Protractor Init** Starting groundwork for e2e testing based on ng2 seed ([36572b6](https://github.com/lathonez/clicker/commit/36572b6))

<a name="0.6.1"></a>
# 0.6.1 (2016-03-06)

### Bug Fixes

* **buildlocker count** Count source and target files in buildlocker rather than relying on existance of a specific file in the target ([6137fd8](https://github.com/lathonez/clicker/commit/6137fd8))

<a name="0.6.0"></a>
# 0.6.0 (2016-03-05)

### Bug Fixes

* **[#24](https://github.com/lathonez/clicker/issues/24)** Ionic Framework .beta.18 was broken on Travis, upgrade to .19 ([6003691](https://github.com/lathonez/clicker/commit/6003691))
* **[#9](https://github.com/lathonez/clicker/issues/9)** Upgrade angular2 to beta.9 which supports typescript 1.8.* ([d46f017])
### Features

* **ionic-app-lib** Using Ionic's build tools in `ionic-app-lib` ([9005006](https://github.com/lathonez/clicker/commit/9005006))
* **[#12](https://github.com/lathonez/clicker/issues/12)** Enable form tests again after our PR is merged into Ionic ([aa726486](https://github.com/lathonez/clicker/commit/aa726486))
* **[#27](https://github.com/lathonez/clicker/issues/27)** Improve workaround for `ionic-angular/index` by creating own references in `ionic-angular.js` ([21ba465](https://github.com/lathonez/clicker/commit/21ba465))

### BREAKING CHANGES

* Description - was / is now

<a name="0.5.1"></a>
# 0.5.1 (2016-03-03)

### Bug Fixes

* **[#28](https://github.com/lathonez/clicker/pull/28)** Update webpack css font reference ([c333f56](https://github.com/lathonez/clicker/commit/c333f56))

<a name="0.5.0"></a>
# 0.5.0 (2016-03-02)

### Features

* **[#27](https://github.com/lathonez/clicker/issues/26)** Move conifg to `./test` ([f78363d](https://github.com/lathonez/clicker/commit/f78363d))
* **[#25](https://github.com/lathonez/clicker/issues/25)** Update to Ionic 2.0.0.beta2 ([67bad59](https://github.com/lathonez/clicker/commit/67bad59))
* **Cordova Hooks** Use Cordova Hooks to prevent test files from ending up inside the apk ([82be26a](https://github.com/lathonez/clicker/commit/82be26a))

<a name="0.4.0"></a>
# 0.4.0 (2016-02-25)

### Bug Fixes

* **[#17]](https://github.com/lathonez/clicker/issues/17)** Use explicit versioning in npm ([90f677d](https://github.com/lathonez/clicker/commit/90f677d))

### Features

* **[#13](https://github.com/lathonez/clicker/issues/13)** Dependency Badge ([b30e24d](https://github.com/lathonez/clicker/commit/b30e24d))
* **[#10](https://github.com/lathonez/clicker/issues/10)** Migrate from tsd to typings ([120c02e](https://github.com/lathonez/clicker/commit/120c02e))
* **[#11](https://github.com/lathonez/clicker/issues/11)** Move spec to source directory ([3d3650f4](https://github.com/lathonez/clicker/commit/3d3650f4))

<a name="0.3.1"></a>
# 0.3.1 (2016-02-24)

### Bug Fixes

* **[#8](https://github.com/lathonez/clicker/pull/8)** Merge PR #8 Fixing test file name ([f524bcf](https://github.com/lathonez/clicker/commit/f524bcf))

<a name="0.3.0"></a>
# 0.3.0 (2016-02-19)

### Bug Fixes

* **Control.setErrors** Previously using a bunch of hacks accessing private control variables ([cc5c0a5](https://github.com/lathonez/clicker/commit/cc5c0a5))
* **String vs string** Need to use one or the other when typing ([cc2d919](https://github.com/lathonez/clicker/commit/cc2d919))

### Features

* **Strict Typing** Update tslint to enforce strict typing and change typescript to be strictly typed ([cc2d919](https://github.com/lathonez/clicker/commit/cc2d919))

<a name="0.2.0"></a>
# 0.2.0 (2016-02-18)

### Bug Fixes

* **Remove 404 for app.js** Misconfiguration in Karma ([5af7958](https://github.com/lathonez/clicker/commit/5af7958))
* **not.toBeNull** Previously using toBeDefined, but they will always be defined! ([d8e1cf5](https://github.com/lathonez/clicker/commit/d8e1cf5))

### Features

* **DOM Component Testing** Using Angular2's DI to test component's in the DOM ([07f60bf](https://github.com/lathonez/clicker/commit/07f60bf))
* **Promise Catch Handler** Utility function should be placed in `.catch` in any promise to debug errors ([0621169](https://github.com/lathonez/clicker/commit/07f60bf))

<a name="0.1.0"></a>
# 0.1.0 (2016-02-17)

### Bug Fixes

* **Fix CSS** CSS was broken in Ionic upgrade ([98c13c4](https://github.com/lathonez/clicker/commit/98c13c4))
* **Fix Icons** Icons were broken in Ionic upgrade ([c954c15](https://github.com/lathonez/clicker/commit/c954c15))

### Features

* **Ionic 2.0.0.beta.0** Upgrade deps (angular2, etc) match latest Ionic ([830ae8b](https://github.com/lathonez/clicker/commit/830ae8b))
* **MIT** Adding MIT License ([a3475cf](https://github.com/lathonez/clicker/commit/a3475cf))

<a name="0.0.1"></a>
# 0.0.1 (2016-01-08)

### Features

* **Final revision before blog** ([f8865b0](https://github.com/lathonez/clicker/commit/f8865b0))
* **Travis** Build and deploy using Travis CI ([fb045f6](https://github.com/lathonez/clicker/commit/fb045f6))
* **Unit tests** Initial unit test set up now working ([04a1028](https://github.com/lathonez/clicker/commit/04a1028))
* **App functionally** Clickers functionality including local storage ([9d04f8d](https://github.com/lathonez/clicker/commit/9d04f8d))
* **Initial CI (Ionic Starter)** Skeleton app using `ionic start --v2 --ts clickers` ([8bde84f](https://github.com/lathonez/clicker/commit/8bde84f))