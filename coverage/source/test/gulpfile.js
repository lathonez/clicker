"use strict";
var config_1 = require('./config');
var path_1 = require('path');
var chalk = require('chalk');
var del = require('del');
var gulp = require('gulp');
var karma = require('karma');
var loadPlugins = require('gulp-load-plugins');
var runSequence = require('run-sequence');
var util = require('gulp-util');
var plugins = loadPlugins();
var ionicGulpfile = {
    gulpfile: require(path_1.join(process.cwd(), 'gulpfile.js')),
    logline: 'sourced Ionic\'s gulpfile @ ' + path_1.join(process.cwd(), 'gulpfile.js'),
};
util.log(ionicGulpfile.logline);
// compile typescript into individual files, project directoy structure is replicated under www/build/test
function buildTypescript() {
    'use strict';
    var tsProject = plugins.typescript.createProject('tsconfig.json', {
        typescript: require('typescript'),
    });
    var src = [
        path_1.join(config_1.TYPINGS_DIR, '/browser.d.ts'),
        path_1.join(config_1.APP_DIR, '**/*.ts'),
        path_1.join(config_1.TEST_DIR, '**/*.ts'),
    ];
    var result = gulp.src(src)
        .pipe(plugins.inlineNg2Template({ base: 'www', useRelativePaths: false }))
        .pipe(plugins.typescript(tsProject));
    return result.js
        .pipe(gulp.dest(config_1.TEST_DEST));
}
// compile E2E typescript into individual files, project directoy structure is replicated under www/build/test
function buildE2E() {
    'use strict';
    var tsProject = plugins.typescript.createProject('tsconfig.json', {
        typescript: require('typescript'),
    });
    var src = [
        path_1.join(config_1.TYPINGS_DIR, '/browser.d.ts'),
        path_1.join(config_1.APP_DIR, '**/*e2e.ts'),
    ];
    var result = gulp.src(src)
        .pipe(plugins.typescript(tsProject));
    return result.js
        .pipe(gulp.dest(config_1.TEST_DEST));
}
// delete everything used in our test cycle here
function clean() {
    'use strict';
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del([config_1.TEST_DEST]).then(function (paths) {
        util.log('Deleted', chalk.yellow(paths && paths.join(', ') || '-'));
    });
}
// run tslint against all typescript
function lint() {
    'use strict';
    return gulp.src(path_1.join(config_1.APP_DIR, '**/*.ts'))
        .pipe(plugins.tslint())
        .pipe(plugins.tslint.report(plugins.tslintStylish, {
        emitError: true,
        sort: true,
        bell: true,
    }));
}
// run jasmine unit tests using karma with Chrome, Karma will be left open in Chrome for debug
function debugKarma(done) {
    'use strict';
    new karma.Server({
        configFile: path_1.join(process.cwd(), config_1.TEST_DIR, 'karma.config.js'),
        singleRun: false,
        browsers: ['Chrome'],
    }).start(done);
}
// run jasmine unit tests using karma with PhantomJS2 in single run mode
function startKarma(done) {
    'use strict';
    new karma.Server({
        configFile: path_1.join(process.cwd(), config_1.TEST_DIR, 'karma.config.js'),
        singleRun: true,
    }).start(done);
}
function watchTest() {
    'use strict';
    plugins.watch(path_1.join(config_1.APP_DIR, '**/*.ts'), function () {
        gulp.start('test.watch.build');
    });
}
gulp.task('test.build.e2e', buildE2E);
gulp.task('test.build.typescript', buildTypescript);
gulp.task('test.clean', clean);
gulp.task('test.karma', startKarma);
gulp.task('test.karma.debug', debugKarma);
gulp.task('test.lint', lint);
gulp.task('test.watch', watchTest);
// just a hook into ionic's build
gulp.task('ionic.build', function (done) {
    runSequence('build', done);
});
gulp.task('test.build', function (done) {
    runSequence(['test.lint', 'test.clean'], ['sass', 'fonts', 'html'], // these are hooks into ionic
    'test.build.typescript', done);
});
// first time round we should nuke everything
gulp.task('test.watch.build', function (done) {
    runSequence('test.build', 'test.watch', done);
});
gulp.task('test', function (done) {
    runSequence('test.build', 'test.karma', done);
});
