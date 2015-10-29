var gulp  = require('gulp'),
  jshint  = require('gulp-jshint'),
  sass    = require('gulp-sass'),
  concat  = require('gulp-concat'),
  uglify  = require('gulp-uglify'),
  rename  = require('gulp-rename'),
  browserSync = require('browser-sync').create(),
  config  = require('../config'),
  assetsPath  = './client/assets',
  jsPaths = assetsPath + '/js/**/*.js',
  scssPaths   = assetsPath + '/scss/**/*.scss',
  viewPaths   = './views/**/*.ejs',
  publicPath  = './client/public';


gulp.task('lint', function lint() {
  return gulp.src(jsPaths)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function compileSass() {
  return gulp.src(scssPaths)
    .pipe(sass())
    .pipe(gulp.dest(publicPath + '/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function watchForChanges() {
  browserSync.init({
    proxy: 'http://localhost:' + config.port
  });

  gulp.watch(jsPaths, ['lint', 'js-concat']);
  gulp.watch(scssPaths, ['sass']);
  gulp.watch(viewPaths).on('change', browserSync.reload);
});

gulp.task('serve', ['lint', 'build', 'watch']);

