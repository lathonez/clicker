import { APP_DIR, COVERAGE, TEST_DIR, TEST_DEST, TYPINGS_DIR } from './config';
import { join }          from 'path';
import * as chalk        from 'chalk';
import * as del          from 'del';
import * as gulp         from 'gulp';
import * as karma        from 'karma';
import * as loadPlugins  from 'gulp-load-plugins';
import * as runSequence  from 'run-sequence';
import * as util         from 'gulp-util';

let plugins: any = loadPlugins();

let ionicGulpfile: any = {
  gulpfile: require(join(process.cwd(), 'gulpfile.js')),
  logline: 'sourced Ionic\'s gulpfile @ ' + join(process.cwd(), 'gulpfile.js'),
};

util.log(ionicGulpfile.logline);

// compile typescript into individual files, project directoy structure is replicated under www/build/test
function buildTypescript(): any {
  'use strict';

  let tsProject: any = plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript'),
  });
  let src: Array<any> = [
    join(TYPINGS_DIR, '/browser.d.ts'),
    join(APP_DIR, '**/*.ts'),
    join(TEST_DIR, '**/*.ts'),
  ];
  let result: any = gulp.src(src)
    .pipe(plugins.inlineNg2Template({ base: 'www', useRelativePaths: false }))
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(gulp.dest(TEST_DEST));
}

// compile E2E typescript into individual files, project directoy structure is replicated under www/build/test
function buildE2E(): any {
  'use strict';

  let tsProject: any = plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript'),
  });
  let src: Array<any> = [
    join(TYPINGS_DIR, '/browser.d.ts'),
    join(APP_DIR, '**/*e2e.ts'),
  ];
  let result: any = gulp.src(src)
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(gulp.dest(TEST_DEST));
}

// delete everything used in our test cycle here
function clean(): any {
  'use strict';

  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([TEST_DEST]).then((paths: Array<any>) => {
    util.log('Deleted', chalk.yellow(paths && paths.join(', ') || '-'));
  });
}

// run tslint against all typescript
function lint(): any {
  'use strict';

  return gulp.src(join(APP_DIR, '**/*.ts'))
    .pipe(plugins.tslint())
    .pipe(plugins.tslint.report(plugins.tslintStylish, {
      emitError: true,
      sort: true,
      bell: true,
    }));
}

// run jasmine unit tests using karma with Chrome, Karma will be left open in Chrome for debug
function debugKarma(done: Function): any {
  'use strict';

  new (<any>karma).Server({
    configFile: join(process.cwd(), TEST_DIR, 'karma.config.js'),
    singleRun: false,
    browsers: ['Chrome'],
  }, done).start();
}

// run jasmine unit tests using karma with PhantomJS2 in single run mode
function startKarma(done: Function): any {
  'use strict';

  new (<any>karma).Server({
    configFile: join(process.cwd(), TEST_DIR, 'karma.config.js'),
    singleRun: true,
  }, done).start();
}

function watchTest(): any {
  'use strict';

  plugins.watch(join(APP_DIR, '**/*.ts'), () => {
    gulp.start('test.watch.build');
  });
}

function bundleSpecs(done: Function): any {

  var browserify = require('ionic-gulp-browserify-typescript');
  let glob = require('glob');
  let specs = glob.sync('**/*.spec.ts')

  browserify(
    {
      watch: false,
      src: [specs, './typings/main.d.ts'],
      outputPath: TEST_DEST,
      outputFile: 'test.bundle.js',
      browserifyOptions: {
        cache: {},
        packageCache: {},
        debug: true
      },
    }
  ).on('end', done);
};

function remapIstanbul(): any {
  var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

  return gulp.src(join(COVERAGE, 'istanbul-remap', 'coverage-final.json'))
    .pipe(remapIstanbul({
        reports: {
          'json': join(COVERAGE, 'istanbul-remap', 'coverage-remapped.json')
        }
    }));
}

function reportIstanbul(): any {

  var istanbulReport = require('gulp-istanbul-report');
  gulp.src(join(COVERAGE, 'istanbul-remap', 'coverage-remapped.json'))
    .pipe(istanbulReport({
    reporters: [
      'text',
      {name: 'lcovonly', file: 'lcov'}
    ]
  }))
}

gulp.task('test.bundle.specs', bundleSpecs);
gulp.task('test.build.e2e', buildE2E);
gulp.task('test.build.typescript', buildTypescript);
gulp.task('test.clean', clean);
gulp.task('test.karma', startKarma);
gulp.task('test.karma.debug', debugKarma);
gulp.task('test.lint', lint);
gulp.task('test.watch', watchTest);
gulp.task('remap-istanbul', remapIstanbul);
gulp.task('report-istanbul', reportIstanbul);

// just a hook into ionic's build
gulp.task('ionic.build', (done: any) => {
  runSequence(
    'build',
    done
  );
});

gulp.task('test.build', (done: any) => {
  runSequence(
    ['test.clean'],
    ['sass', 'fonts', 'html'], // these are hooks into ionic
    'test.build.typescript',
    done
  );
});

gulp.task('test.bundle', (done: any) => {
  runSequence(
    'test.clean',
    'html', // this is a hook into ionic
    'test.bundle.specs',
    done
  )
});

// first time round we should nuke everything
gulp.task('test.watch.build', (done: any) => {
  runSequence(
    'test.build',
    'test.watch',
    done
  );
});

gulp.task('test', (done: any) => {
  runSequence(
    'test.build',
    'test.karma',
    done
  );
});


gulp.task('test.new', (done: any) => {
  runSequence(
    'test.bundle',
    'test.karma',
    'remap-istanbul',
    'report-istanbul',
    done
  );
});