import * as path from 'path'

const config: any = {
  gulp: require('gulp'),
  appDir: 'app',
  testDir: 'test',
  testDest: 'www/build/test',
  typingsDir: 'typings',
};

const imports: any = {
  gulp: require('gulp'),
  runSequence: require('run-sequence'),
  ionicGulpfile: require(path.join(process.cwd(), 'gulpfile.js')),
};

const gulp: any = imports.gulp;
const runSequence: any = imports.runSequence;

// just a hook into ionic's build
gulp.task('build-app', (done: Function) => {
  runSequence(
    'build',
    (<any>done)
  );
});

// compile E2E typescript into individual files, project directoy structure is replicated under www/build/test
gulp.task('build-e2e', ['clean-e2e'], () => {
  let typescript: any = require('gulp-typescript');
  let tsProject: any = typescript.createProject('tsconfig.json');
  let src: Array<any> = [
    path.join(config.typingsDir, '/index.d.ts'),
    path.join(config.appDir, '**/*e2e.ts'),
  ];
  let result: any = gulp.src(src)
    .pipe(typescript(tsProject));

  return result.js
    .pipe(gulp.dest(config.testDest));
});

// delete _only_ tests generated on e2e.
// If we delete everything (using Ionic's `clean` task we'll wipe the newly built app we're testing against)
gulp.task('clean-e2e', () => {

  let del: any = require('del');

  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([config.testDest]).then((paths: Array<any>) => {
    console.log('Deleted', paths && paths.join(', ') || '-');
  });
});

// run jasmine unit tests using karma with PhantomJS2 in single run mode
'use strict';

gulp.task('karma', (done) => {

  let karma = require('karma');
  let karmaOpts = {
    configFile: path.join(process.cwd(), 'test/karma.config.js'),
    singleRun: true
  };

  new karma.Server(karmaOpts, done).start();
});

// run jasmine unit tests using karma with Chrome, Karma will be left open in Chrome for debug

gulp.task('karma-debug', (done) => {

  let karma = require('karma');
  let karmaOpts = {
    configFile: path.join(process.cwd(), 'test/karma.config.js'),
    singleRun: false
  };

  new karma.Server(karmaOpts, done).start();
});

// run tslint against all typescript
gulp.task('lint', () => {

  let tslint: any = require('gulp-tslint');

  return gulp.src(path.join(config.appDir, '**/*.ts'))
    .pipe(tslint({
      formatter: 'verbose',
    }))
    .pipe(tslint.report());
});

// build unit tests, run unit tests, remap and report coverage
gulp.task('unit-test', (done: Function) => {
  runSequence(
    ['clean'], // Ionic's clean task, nukes the whole of www/build
    ['configure-environment'],
    ['lint', 'html'],
    'karma',
    (<any>done)
  );
});
