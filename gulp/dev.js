var gulp  = require('gulp'),
  jshint  = require('gulp-jshint'),
  sass    = require('gulp-sass'),
  concat  = require('gulp-concat'),
  uglify  = require('gulp-uglify'),
  rename  = require('gulp-rename'),
  assetsPath = './client/assets',
  publicPath = './client/public';

gulp.task('lint', function lint() {
  return gulp.src(assetsPath + '/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function watchForChanges() {
  gulp.watch(assetsPath + '/js/*.js', ['lint', 'js-concat']);
  gulp.watch(assetsPath + '/scss/*.scss', ['sass']);
});

gulp.task('serve', ['lint', 'build', 'watch']);

