var gulp = require('gulp'),
    gulpWatch = require('gulp-watch'),
    del = require('del'),
    runSequence = require('run-sequence'),
    argv = process.argv;


/**
 * Ionic hooks
 * Add ':before' or ':after' to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task('serve:before', ['watch']);
gulp.task('emulate:before', ['build']);
gulp.task('deploy:before', ['build']);
gulp.task('build:before', ['build']);

// we want to 'watch' when livereloading
var shouldWatch = argv.indexOf('-l') > -1 || argv.indexOf('--livereload') > -1;
gulp.task('run:before', [shouldWatch ? 'watch' : 'build']);

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */
var buildBrowserify = require('ionic-gulp-browserify-typescript');
var buildSass = require('ionic-gulp-sass-build');
var copyHTML = require('ionic-gulp-html-copy');
var copyFonts = require('ionic-gulp-fonts-copy');
var copyScripts = require('ionic-gulp-scripts-copy');
var tslint = require('ionic-gulp-tslint');

var isRelease = argv.indexOf('--release') > -1;

gulp.task('watch', ['clean'], function(done){
  runSequence(
    ['sass', 'html', 'fonts', 'scripts'],
    function(){
      gulpWatch('app/**/*.scss', function(){ gulp.start('sass'); });
      gulpWatch('app/**/*.html', function(){ gulp.start('html'); });
      buildBrowserify({ watch: true }).on('end', done);
    }
  );
});

gulp.task('build', ['clean'], function(done){
  runSequence(
    ['sass', 'html', 'fonts', 'scripts'],
    function(){
      buildBrowserify({
        minify: isRelease,
        browserifyOptions: {
          debug: !isRelease
        },
        uglifyOptions: {
          mangle: false
        }
      }).on('end', done);
    }
  );
});

gulp.task('sass', buildSass);
gulp.task('html', copyHTML);
gulp.task('fonts', copyFonts);
gulp.task('scripts', ['configure-environment'], copyScripts);
gulp.task('clean', function(){
  return del('www/build');
});
gulp.task('lint', tslint);

gulp.task('copy-config-xml', function(){
  var env = process.env.ENV || 'dev';
  var opts = {
    src: 'config/' + env + '/config.xml',
    dest: './',
    onComplete: function() {
      console.log('copy-config-xml(' + env.toUpperCase() + '): copied to ./');
    },
    onError: function(err) {
      console.error(err.toString());
      this.emit('end');
    }
  };

  return gulp.src(opts.src)
    .pipe(gulp.dest(opts.dest))
    .on('end', opts.onComplete)
    .on('error', opts.onError);
});

gulp.task('copy-config-ts', function(){
  var env = process.env.ENV || 'dev';
  var opts = {
    src: 'config/' + env + '/config.ts',
    dest: './config',
    onComplete: function() {
      console.log('copy-config-ts(' + env.toUpperCase() + '): copied to ./config');
    },
    onError: function(err) {
      console.error(err.toString());
      this.emit('end');
    }
  };
  return gulp.src(opts.src)
    .pipe(gulp.dest(opts.dest))
    .on('end', opts.onComplete)
    .on('error', opts.onError);
});

gulp.task('configure-environment', function(done){
  return runSequence(
    ['copy-config-ts', 'copy-config-xml'],
    done
  );
});
