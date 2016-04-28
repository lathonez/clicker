import { join }          from 'path';
import * as del          from 'del';
import * as gulp         from 'gulp';
import * as karma        from 'karma';
import * as loadPlugins  from 'gulp-load-plugins';
import * as runSequence  from 'run-sequence';
import * as typescript   from 'typescript';

const config: any = {
  appDir: 'app',
  testDir: 'test',
  testDest: 'www/build/test',
  typingsDir: 'typings',
};

let plugins: any = loadPlugins();

let ionicGulpfile: any = {
  gulpfile: require(join(process.cwd(), 'gulpfile.js')),
  logline: 'sourced Ionic\'s gulpfile @ ' + join(process.cwd(), 'gulpfile.js'),
};

plugins.util.log(ionicGulpfile.logline);

// just a hook into ionic's build
gulp.task('build-app', (done: Function) => {
  runSequence(
    'build',
    (<any>done)
  );
});

// compile E2E typescript into individual files, project directoy structure is replicated under www/build/test
gulp.task('build-e2e', () => {

  let tsProject: any = plugins.typescript.createProject('tsconfig.json', {
    typescript: typescript,
  });
  let src: Array<any> = [
    join(config.typingsDir, '/browser.d.ts'),
    join(config.appDir, '**/*e2e.ts'),
  ];
  let result: any = gulp.src(src)
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(gulp.dest(config.testDest));
});

// delete everything used in our test cycle here
gulp.task('clean-test', () => {

  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([config.testDest]).then((paths: Array<any>) => {
    plugins.util.log('Deleted', paths && paths.join(', ') || '-');
  });
});

// run jasmine unit tests using karma with PhantomJS2 in single run mode
gulp.task('karma', (done: Function) => {

  new (<any>karma).Server(
    {
      configFile: join(process.cwd(), config.testDir, 'karma.config.js'),
      singleRun: true,
    },
    (() => done())
  ).start();
});

// run jasmine unit tests using karma with Chrome, Karma will be left open in Chrome for debug
gulp.task('karma-debug', (done: Function) => {

  new (<any>karma).Server(
    {
      configFile: join(process.cwd(), config.testDir, 'karma.config.js'),
      singleRun: false,
      browsers: ['Chrome'],
    },
    (() => done())
  ).start();
});

// run tslint against all typescript
gulp.task('lint', () => {

  return gulp.src(join(config.appDir, '**/*.ts'))
    .pipe(plugins.tslint())
    .pipe(plugins.tslint.report(plugins.tslintStylish, {
      emitError: true,
      sort: true,
      bell: true,
    }));
});

// build unit tests, run unit tests, remap and report coverage
gulp.task('unit-test', (done: Function) => {
  runSequence(
    'html',
    'karma',
    (<any>done)
  );
});

// watch app directory and trigger unit test rebuild on change
gulp.task('watch-unit', ['build-unit'], () => {
  plugins.watch(join(config.appDir, '**/*.ts'), () => {
    gulp.start('build-unit');
  });
});
