var path = require('path')

module.exports = function (config) {
  'use strict';
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/es6-shim/es6-shim.js',        // TypeError: undefined is not a constructor (evaluating 'new exports.Map()')
      'node_modules/reflect-metadata/Reflect.js', // 'Uncaught reflect-metadata shim is required when using class decorators'
      'node_modules/zone.js/dist/zone.js',        // Zone.js dependencies (Zone undefined)
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'app/**/*.spec.ts',
      { pattern: 'node_modules/reflect-metadata/Reflect.js.map', included: false, served: true }, // 404 on the same
      { pattern: 'www/build/**/*.html', included: false },
    ],

    // list of files to exclude
    exclude: [
      'node_modules/angular2/**/*_spec.js',
      'node_modules/ionic-angular/**/*spec*'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.ts': ['webpack'],
      'test/**/*.ts': ['webpack'],

    },

    webpack: {

      devtool: 'cheap-module-source-map',

      module: {
        loaders: [{
          test: /\.ts$/,
          loader: 'awesome-typescript',
          query: {
            doTypeCheck: true,
            resolveGlobs: false,
            externals: ["typings/index.d.ts"]
          },
          include: [path.resolve('app'),path.resolve('test')],
          exclude: /node_modules/
        }]
      },
      resolve: {
        alias: {
        },
        extensions: ['', '.js', '.ts']
      }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    // options on how to report coverage:
    // coverageReporter: {
    //   reporters: [
    //     { type: 'text' },
    //     { type: 'lcov', dir: 'coverage', subdir: '.' }
    //   ]
    // },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // GOTCHA -- Karma proxies _everything_ through base first..
    //           Also any files you want to serve need to be in the files array above with serverd: true
    proxies: {
      '/build': '/base/www/build'
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Chrome',
    ],

    // https://github.com/lathonez/clicker/issues/82
    // try increasing this value if you see the error "Disconnected (1 times), because no message in 30000 ms."
    browserNoActivityTimeout: 30000,

    customContextFile: "test/karma-static/context.html",

    customDebugFile: "test/karma-static/debug.html",

  });

  if (process.env.TRAVIS || process.env.CIRCLECI) {
    config.browsers = ['Chrome', 'PhantomJS'];
  }
};
