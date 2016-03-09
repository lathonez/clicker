import { APP_DIR, DIST_DIR, E2E_DEST, JS_DEST, TEST_DIR, TYPINGS_DIR, TEST_DEST } from './config';
import * as CONFIG       from './config';
import { join, extname } from 'path';
import * as chalk        from 'chalk';
import * as del          from 'del';
import * as gulp         from 'gulp';
import * as ionicAppLib  from 'ionic-app-lib';
import * as karma        from 'karma';
import * as loadPlugins  from 'gulp-load-plugins';
import * as runSequence  from 'run-sequence';
import * as util         from 'gulp-util';

let plugins: any = loadPlugins();
let ionicBuild: any = ionicAppLib.v2.build;
let ionicBuildOptions: any = {
  appDirectory: process.cwd(),
  watch: false,
  config: require(join(process.cwd(), 'ionic.config.js')),
};

let srcCounts: any = {};
let destCounts: any = {};

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

// this does the exact same thing as `ionic serve` (wrt building fonts)
function buildFonts(): any {
  'use strict';

  return ionicBuild.fonts(ionicBuildOptions);
}

// this does the exact same thing as `ionic serve` (wrt building html)
function buildHTML(): any {
  'use strict';

  return ionicBuild.html(ionicBuildOptions);
}

// ionic's build functions are async but don't give us any callbacks
function buildLocker(done: Function): any {
  'use strict';

  let unlocked: boolean = true;

  let recurse: Function = function(): void {
    buildLocker(done);
  };

  count(null, true)
    .then(() => {
      if (!compareCounts('html')) unlocked = false;
      if (!compareCounts('fonts')) unlocked = false;
      if (!compareCounts('sass')) unlocked = false;

      if (!unlocked) {
        setTimeout(recurse, 100);
        return;
      }

      util.log('test.build.locker:' + chalk.green(' unlocked'));
      done();
    });
}

// this does the exact same thing as `ionic serve` (wrt building sass)
function buildSass(): any {
  'use strict';

  return ionicBuild.sass(ionicBuildOptions);
}

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

// delete everything used in our test cycle here __apart__ from HTML
// -- ionic caches html so we can't delete it when watching
function cleanIgnoreHTML(): any {
  'use strict';

  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([DIST_DIR + '/**/*', '!' + JS_DEST, '!' + DIST_DIR + '/**/*.html'], {'nodir': true}).then((paths: Array<any>) => {
    util.log('Deleted', chalk.yellow(paths && paths.length + ' files' || '-'));
  });
}

// check that source and dest counts are equal for the given type (html|fonts|sass)
function compareCounts(count: string): boolean {
  'use strict';

  if (srcCounts[count] !== destCounts[count]) {
    util.log('test.build.locker: ' + chalk.yellow(destCounts[count] + '/' + srcCounts[count] + ' ' + count));
    return false;
  }

  return true;
}

// count files in a src pattern, storing results in a global counter
function count(done: Function, dest?: boolean): any {
  'use strict';

  let countObj: any = srcCounts;
  let src: Array<any> = [
    ionicBuildOptions.config.paths.html.src[0],
    ionicBuildOptions.config.paths.fonts.src[0],
    ionicBuildOptions.config.paths.sass.src[0],
  ];

  if (dest) {
    // overwrite for dest mode
    countObj = destCounts;
    src = [
      join(ionicBuildOptions.config.paths.html.dest, '**/*.html'),
      join(ionicBuildOptions.config.paths.fonts.dest, '**/*.+(ttf|woff|woff2)'),
      join(ionicBuildOptions.config.paths.sass.dest, '**/*.css'),
    ];
  }

  countObj.html = 0;
  countObj.fonts = 0;
  countObj.sass = 0;

  return new Promise((resolve: Function, reject: Function) => {
    gulp.src(src)
      .pipe(plugins.tap((file: any, t: any) => {
        switch (extname(file.path)) {
          case '.html':
            countObj.html ++;
            break;
          case '.ttf':
          case '.woff':
          case '.woff2':
            countObj.fonts ++;
            break;
          case '.scss':
          case '.css':
            countObj.sass ++;
            break;
          default:
            throw 'unhandled extension: ' + extname(file.path);
        }
      }))
      .on('error', reject)
      .on('end', resolve);
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
    gulp.start('test.watch.rebuild');
  });
};

gulp.task('test.build.e2e', buildE2E);
gulp.task('test.build.fonts', buildFonts);
gulp.task('test.build.html', buildHTML);
gulp.task('test.build.locker', buildLocker);
gulp.task('test.build.sass', buildSass);
gulp.task('test.build.typescript', buildTypescript);
gulp.task('test.clean', clean);
gulp.task('test.clean.ignoreHTML', cleanIgnoreHTML);
gulp.task('test.srcCount', count);
gulp.task('test.karma', startKarma);
gulp.task('test.karma.debug', debugKarma);
gulp.task('test.lint', lint);
gulp.task('test.watch', watchTest);

gulp.task('test.build', (done: any) => {
  runSequence(
    ['test.lint', 'test.srcCount'],
    ['test.build.html', 'test.build.fonts', 'test.build.sass', 'test.build.locker'],
    'test.build.typescript',
    done
  );
});

// first time round we should nuke everything
gulp.task('test.watch.build', (done: any) => {
  runSequence(
    'test.clean',
    'test.build',
    'test.watch',
    done
  );
});

// subsequent triggers (watch changes), we don't want to delete HTML as Ionic caches it (and it wont be rebuilt!)
gulp.task('test.watch.rebuild', (done: any) => {
  runSequence(
    'test.clean.ignoreHTML',
    'test.build',
    'test.watch',
    done
  );
});

gulp.task('test', (done: any) => {
  runSequence(
    'test.clean',
    'test.build',
    'test.karma',
    done
  );
});
