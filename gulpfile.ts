import { APP_DIR, TEST_DIR, TYPINGS_DIR, TEST_DEST } from './config';
import { join }          from 'path';
import * as runSequence  from 'run-sequence';
import * as chalk        from 'chalk';
import * as del          from 'del';
import * as gulp         from 'gulp';
import * as karma        from 'karma';
import * as loadPlugins  from 'gulp-load-plugins';
import * as ts           from 'gulp-typescript';
import * as tslint       from 'gulp-tslint';
import * as util         from 'gulp-util';

let plugins: any = loadPlugins();

// compile typescript into indivudal files, project directoy structure is replicated under www/build/test
function build() {
  let tsProject = plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
  });
  let src = [
    join(APP_DIR, '**/*.ts'),
    join(TEST_DIR, '**/*.ts'),
    join(TYPINGS_DIR, '/browser.d.ts'),
  ];
  let result = gulp.src(src)
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(gulp.dest(TEST_DEST));
}

// typescript files are compiled individually and saved to www/build/test/ - delete them here
function clean(done) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([TEST_DEST]).then((paths) => {
    util.log('Deleted', chalk.yellow(paths && paths.join(', ') || '-'));
  });
}

function copyHTML() {
  return gulp.src(join(APP_DIR, '**/*.html'))
    .pipe(gulp.dest(TEST_DEST));
}

// run tslint against all typescript
function lint() {
  return gulp.src(join(APP_DIR, '**/*.ts'))
    .pipe(plugins.tslint())
    .pipe(plugins.tslint.report(plugins.tslintStylish, {
      emitError: true,
      sort: true,
      bell: true
    }));
}

// run jasmine unit tests using karma - lint and build are run in parallel
function startKarma(done) {
  new (<any>karma).Server({
    configFile: join(process.cwd(), TEST_DIR, 'karma.config.js')
  }).start(done);
}

gulp.task('test.clean', clean);
gulp.task('test.lint', lint);
gulp.task('test.copyHTML', copyHTML);
gulp.task('test.build', ['test.copyHTML'], build);
gulp.task('startKarma', startKarma);

gulp.task('test', (done) => {
  runSequence(
    ['test.clean', 'test.lint'],
    'test.build',
    'startKarma',
    done
  )
});
