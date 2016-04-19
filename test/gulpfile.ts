import { APP_DIR, COVERAGE, TEST_DIR, TEST_DEST, TYPINGS_DIR } from './config';
import { join }          from 'path';
import * as del          from 'del';
import * as fs           from 'fs';
import * as glob         from 'glob';
import * as gulp         from 'gulp';
import * as istanbul     from 'istanbul';
import * as karma        from 'karma';
import * as loadPlugins  from 'gulp-load-plugins';
import * as runSequence  from 'run-sequence';
import * as typescript   from 'typescript';

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
    join(TYPINGS_DIR, '/browser.d.ts'),
    join(APP_DIR, '**/*e2e.ts'),
  ];
  let result: any = gulp.src(src)
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(gulp.dest(TEST_DEST));
});

gulp.task('build-unit', ['clean-test', 'html', 'lint', 'patch-app'], (done: Function) => {

  let browserify: any = require('ionic-gulp-browserify-typescript');
  let specs: any = glob.sync('**/*.spec.ts');
  let doneFn: Function = (() => {
    runSequence('restore-app', (<any>done));
  });

  browserify(
    {
      watch: false,
      src: [specs, './typings/main.d.ts'],
      outputPath: TEST_DEST,
      outputFile: 'test.bundle.js',
      browserifyOptions: {
        cache: {},
        packageCache: {},
        debug: true,
      },
    }
  ).on('end', doneFn);
});

// delete everything used in our test cycle here
gulp.task('clean-test', () => {

  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([TEST_DEST]).then((paths: Array<any>) => {
    plugins.util.log('Deleted', paths && paths.join(', ') || '-');
  });
});

// run jasmine unit tests using karma with PhantomJS2 in single run mode
gulp.task('karma', (done: Function) => {

  new (<any>karma).Server(
    {
      configFile: join(process.cwd(), TEST_DIR, 'karma.config.js'),
      singleRun: true,
    },
    done
  ).start();
});

// run jasmine unit tests using karma with Chrome, Karma will be left open in Chrome for debug
gulp.task('karma-debug', (done: Function) => {

  new (<any>karma).Server(
    {
      configFile: join(process.cwd(), TEST_DIR, 'karma.config.js'),
      singleRun: false,
      browsers: ['Chrome'],
    },
    done
  ).start();
});

// run tslint against all typescript
gulp.task('lint', () => {
  'use strict';

  return gulp.src(join(APP_DIR, '**/*.ts'))
    .pipe(plugins.tslint())
    .pipe(plugins.tslint.report(plugins.tslintStylish, {
      emitError: true,
      sort: true,
      bell: true,
    }));
});

gulp.task('patch-app', () =>  {

  let appSrc: string  = 'node_modules/ionic-angular/decorators/';
  let stubSrc: string = 'test/app.stub.js';

  gulp.src(join(appSrc, 'app.js'))
    .pipe(plugins.rename('app.backup'))
    .pipe(gulp.dest(appSrc));

  plugins.util.log(join(appSrc, 'app.js') + ' has been backed up to ' + join(appSrc, 'app.backup'));

  gulp.src(stubSrc)
    .pipe(plugins.rename('app.js'))
    .pipe(gulp.dest(appSrc));

  plugins.util.log(join(appSrc, 'app.js') + ' has been patched with ' + stubSrc);
});

gulp.task('prune-coverage', () => {

  const toPrune: Array<string> = ['node_modules', '.spec.ts', '.d.ts', 'testUtils.ts'];
  let remapped: any = JSON.parse(<any>(fs.readFileSync(join(COVERAGE, 'istanbul-remap', 'coverage-remapped.json'))));
  let pruned: Object = {};

  Object.keys(remapped).forEach((key) => {
    let doPrune: any = toPrune.find((glob) => (key.indexOf(glob) > -1));
    // the find will return `undefined` if there is nothing to be pruned
    if (doPrune) return;
    pruned[key] = remapped[key];
    pruned[key].path = remapped[key].path.replace('/source/', '');
  });

  fs.writeFileSync(join(COVERAGE, 'istanbul-remap', 'coverage-pruned.json'), JSON.stringify(pruned));
});

gulp.task('remap-coverage', () => {

  let remapIstanbul: any = require('remap-istanbul/lib/gulpRemapIstanbul');

  return gulp.src(join(COVERAGE, 'istanbul-remap', 'coverage-final.json'))
    .pipe(remapIstanbul({
      reports: {
        'json': join(COVERAGE, 'istanbul-remap', 'coverage-remapped.json'),
      },
    }));
});

gulp.task('report-coverage', (done: Function) => {

  let collector: any = new istanbul.Collector();
  let reporter:  any = new istanbul.Reporter();
  let pruned: Object = JSON.parse(<any>(fs.readFileSync(join(COVERAGE, 'istanbul-remap', 'coverage-pruned.json'))));

  collector.add(pruned);
  reporter.addAll([ 'text', 'lcov']);
  reporter.write(collector, false, done);
});

gulp.task('restore-app', () => {

  let appSrc: string  = 'node_modules/ionic-angular/decorators/';

  gulp.src(join(appSrc, 'app.backup'))
    .pipe(plugins.rename('app.js'))
    .pipe(gulp.dest(appSrc));

  plugins.util.log(join(appSrc, 'app.backup') + ' has been restored to ' + join(appSrc, 'app.js'));
});

gulp.task('unit-test', (done: Function) => {
  runSequence(
    'build-unit',
    'karma',
    'remap-coverage',
    'prune-coverage',
    'report-coverage',
    (<any>done)
  );
});

gulp.task('watch-unit', ['build-unit'], () => {
  plugins.watch(join(APP_DIR, '**/*.ts'), () => {
    gulp.start('build-unit');
  });
});
