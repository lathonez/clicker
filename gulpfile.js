/******************************************************************************
 * Gulpfile
 * Be sure to run `npm install` for `gulp` and the following tasks to be
 * available from the command line. All tasks are run using `gulp taskName`.
 ******************************************************************************/
var gulp = require('gulp');
var del = require('del');
var path = require('path');
var config = require('./ionic.config');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var Server = require('karma').Server;


/******************************************************************************
 * gulp watch
 * Build the styles, and rebuild when source files change.
 ******************************************************************************/
gulp.task('watch', ['sass', 'fonts'], function(done) {
  var watch = require('gulp-watch');
  var sassFiles = path.join(config.paths.wwwDir, config.paths.appDir, config.paths.appSassWatch);
  watch(sassFiles, function(){
    gulp.start('sass');
  });
});


/******************************************************************************
 * gulp build
 * Build the styles once, without watching for source file changes.
 ******************************************************************************/
gulp.task('build', ['sass', 'fonts']);


/******************************************************************************
 * gulp sass
 * Convert Sass files to a single bundled CSS file. Uses auto-prefixer
 * to automatically add required vendor prefixes when needed.
 ******************************************************************************/
gulp.task('sass', function(){
  var sass = require('gulp-sass');
  var autoprefixer = require('gulp-autoprefixer');

  var sassSrcFiles = [];
  config.paths.appSassSrc.forEach(function(sassSrc) {
    sassSrcFiles.push( path.join(config.paths.wwwDir, config.paths.appDir, sassSrc) );
  });

  gulp.src(sassSrcFiles)
    .pipe(sass({
      includePaths: [path.join(config.paths.ionicDir, config.paths.ionicSassDir)],
    }))
    .on('error', function(err){
      console.error(err.message);
      this.emit('end');
    })
    .pipe(autoprefixer(config.autoPrefixerOpts))
    .pipe(gulp.dest(
      path.join(config.paths.wwwDir, config.paths.buildDir, config.paths.buildCSSDir)
    ));
});


/******************************************************************************
 * gulp fonts
 * Copy Ionic font files to build directory.
 ******************************************************************************/
gulp.task('fonts', function() {
  return gulp.src(path.join(config.paths.ionicDir, config.paths.ionicFontFiles))
         .pipe(gulp.dest(path.join(config.paths.wwwDir, config.paths.buildDir, config.paths.buildFontsDir)));
});


/******************************************************************************
 * gulp clean
 * Delete previous build files.
 ******************************************************************************/
gulp.task('clean', function(done) {
  var del = require('del');
  del([config.paths.buildDir], done);
});


/******************************************************************************
 * Code above is directly from `ionic start --v2` webpack config
 * Code below is for testing and is separate from the ionic workflow (at the moment)
 * All testing tasks are prefixed with "test"
 ******************************************************************************/


// typescript files are compiled individually and saved to www/build/test/ - delete them here
gulp.task('test.clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['www/build/test']);
});

// run tslint against all typescript
gulp.task('test.lint', function () {
  gulp.src('www/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'))
});

// compile typescript into indivudal files, project directoy structure is replicated under www/build/test
gulp.task('test.compile', ['test.clean'], function () {
  // tsconfig options basically copy pasta from tsconfig.json
  return gulp.src('www/**/*.ts')
    .pipe(ts({
      "target": "es5",
      "module": "commonjs",
      "noEmitOnError": false,
      "rootDir": ".",
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "sourceMap": false,
      "inlineSourceMap": false,
      "inlineSources": false
    }))
    .pipe(gulp.dest(
      path.join(config.paths.wwwDir, config.paths.buildDir, 'test')
    ));
});

// run jasmine unit tests using karma - lint and compile are run in parallel
gulp.task('test', ['test.lint', 'test.compile'], function(done) {
  new Server({
    configFile: __dirname + '/karma.config.js',
    singleRun: true
  }, done).start();
});