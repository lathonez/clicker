// Screenshot Reporter needs declaring outside the export as it's used in multiple hooks
var SSReporter = require('protractor-jasmine2-screenshot-reporter');
var screenshotReporter = new SSReporter ({
  dest: 'coverage/screenshots',
  pathBuilder: function(currentSpec, suites) {
    var name = currentSpec.fullName;
    var testname = name.replace(/\s+/g, '-').toLowerCase();
    return testname;
  },
  filename: 'index.html'
});

exports.config = {
    baseUrl: 'http://localhost:8100',

    specs: [
      '../www/build/test/**/*.e2e.js'
    ],

    exclude: [],

    framework: 'jasmine2',

    allScriptsTimeout: 110000,

    jasmineNodeOpts: {
      showTiming: true,
      showColors: true,
      isVerbose: false,
      includeStackTrace: false,
      defaultTimeoutInterval: 400000
    },

    directConnect: true,

    capabilities: {
      'browserName': 'chrome'
    },

    // hook into screenshotReporter's beforeLaunch
    beforeLaunch: function() {
      return new Promise(function(resolve){
        screenshotReporter.beforeLaunch(resolve);
      });
    },

    onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');

      // Add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));

      // Add screenshot reporter
      jasmine.getEnv().addReporter(screenshotReporter);

      // Define browser size for tests/screenshots
      var width = 360;
      var height = 640;
      browser.driver.manage().window().setSize(width, height);

      browser.ignoreSynchronization = false;
    },

    // hook into screenshotReporter's afterLaunch
    afterLaunch: function(exitCode) {
      return new Promise(function(resolve){
        screenshotReporter.afterLaunch(resolve.bind(this, exitCode));
      });
    },

    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     *
     */
    useAllAngular2AppRoots: true
};
