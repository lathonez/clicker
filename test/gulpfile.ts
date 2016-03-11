import { APP_DIR, DIST_DIR, E2E_DEST, JS_DEST, TEST_DIR, TYPINGS_DIR, TEST_DEST } from './config';
import * as CONFIG       from './config';
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
  gulpfile: require(join(process.cwd(), 'gulpfile.js'))
};

function buildE2E (): any {
  'use strict';

  let tsProject: any = plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
  });

  let src: Array<string> = [
    'typings/browser.d.ts',
    join(APP_DIR, '**/*.ts'),
    '!' + join(APP_DIR, '**/*.spec.ts'),
  ];

  let result: any = gulp.src(src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.template(templateLocals()))
    .pipe(gulp.dest(E2E_DEST));
};

// compile typescript into individual files, project directoy structure is replicated under www/build/test
function buildTypescript(): any {
  'use strict';

  let tsProject: any = plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
  });
  let src: Array<any> = [
    join(APP_DIR, '**/*.ts'),
    join(TEST_DIR, '**/*.ts'),
    join(TYPINGS_DIR, '/browser.d.ts'),
    '!' + join(APP_DIR, '**/*.e2e.ts'),
  ];
  let result: any = gulp.src(src)
    .pipe(plugins.inlineNg2Template({ base: 'www', useRelativePaths: false }))
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(gulp.dest(TEST_DEST));
}

// delete everything used in our test cycle here
function clean(): any {
  'use strict';

  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([DIST_DIR + '**/*', '!' + JS_DEST]).then((paths: Array<any>) => {
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
  }).start(done);
}

// run jasmine unit tests using karma with PhantomJS2 in single run mode
function startKarma(done: Function): any {
  'use strict';

  new (<any>karma).Server({
    configFile: join(process.cwd(), TEST_DIR, 'karma.config.js'),
    singleRun: true,
  }).start(done);
}

function templateLocals(): any {
  'use strict';

  return CONFIG;
}

function watchTest(): any {
  'use strict';

  plugins.watch(join(APP_DIR, '**/*.ts'), () => {
    gulp.start('test.watch.build');
  });
};

gulp.task('test.build.e2e', buildE2E);
gulp.task('test.build.typescript', buildTypescript);
gulp.task('test.clean', clean);
gulp.task('test.karma', startKarma);
gulp.task('test.karma.debug', debugKarma);
gulp.task('test.lint', lint);
gulp.task('test.watch', watchTest);

gulp.task('test.build', (done: any) => {
  runSequence(
    ['test.lint', 'test.clean'],
    ['sass', 'copy.fonts', 'copy.html'],
    'test.build.typescript',
    done
  );
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
