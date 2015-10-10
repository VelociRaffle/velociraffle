var gulp  = require('gulp'),
  concat  = require('gulp-concat'),
  uglify  = require('gulp-uglify'),
  assetsPath = './client/assets',
  publicPath = './client/public';

gulp.task('js-minify', ['js-concat'], function concatenateAndMinifyJS() {
  return gulp.src(publicPath + '/js/all.js')
    .pipe(uglify())
    .pipe(gulp.dest(publicPath + '/js'));
});

gulp.task('serve:prod', ['build', 'js-minify']);
